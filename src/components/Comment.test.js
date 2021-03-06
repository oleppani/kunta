import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import { prettyDOM } from '@testing-library/dom'
import Comment from './Comment'

test('renders content', () => {
  const comment = {
    content: 'Component testing is done with react-testing-library',
    important: true
  }

  const component = render(
    <Comment comment={comment} />
  )

  const li = component.container.querySelector('li')  
  console.log(prettyDOM(li))
  expect(component.container).toHaveTextContent(
    'Component testing is done with react-testing-library'
  )
})

test('renders content', () => {
  const comment = {
    content: 'Component testing is done with react-testing-library',
    important: true
  }

  const component = render(
    <Comment comment={comment} />
  )
  component.debug()
  // tapa 1
  expect(component.container).toHaveTextContent(
    'Component testing is done with react-testing-library'
  )

  // tapa 2
  const element = component.getByText(
    'Component testing is done with react-testing-library'
  )
  expect(element).toBeDefined()

  // tapa 3
  const div = component.container.querySelector('.comment')
  expect(div).toHaveTextContent(
    'Component testing is done with react-testing-library'
  )
})

test('clicking the button calls event handler once', async () => {
  const comment = {
    content: 'Component testing is done with react-testing-library',
    important: true
  }

  const mockHandler = jest.fn()

  const component = render(
    <Comment comment={comment} toggleImportance={mockHandler} />
  )

  const button = component.getByText('make not important')
  fireEvent.click(button)

  expect(mockHandler.mock.calls).toHaveLength(1)
})