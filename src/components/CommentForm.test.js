import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import CommentForm from './CommentForm'

test('<CommentForm /> updates parent state and calls onSubmit', () => {
  const createComment = jest.fn()

  const component = render(
    <CommentForm createComment={createComment} />
  )

  const input = component.container.querySelector('input')
  const form = component.container.querySelector('form')

  fireEvent.change(input, { 
    target: { value: 'testing of forms could be easier' } 
  })
  fireEvent.submit(form)

  expect(createComment.mock.calls).toHaveLength(1)
  expect(createComment.mock.calls[0][0].content).toBe('testing of forms could be easier' )
})