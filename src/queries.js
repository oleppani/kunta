import { gql  } from '@apollo/client'

const ORGAN_DETAILS = gql`
  fragment OrganDetails on Organ {
    organname
    organshort
    organmunicipality 
  }
`
const LINK_DETAILS = gql`
  fragment LinkDetails on Link {
    linkdatetime
    linktext
    linkdatetime
    linktext
    commentid
    initiativeid
    sectionid
    proposalid
    linktype
    linkref
    userid 
  }
`
const USER_DETAILS = gql`
  fragment UserDetails on User {
    name
    email
    address
    postnumber
    postoffice
    phone
    activated
    type
    datetime
  }
`
const INITIATIVE_DETAILS = gql`
  fragment InitiativeDetails on Initiative {
    organid
    initiativetext
    initiativedatetime
    initiativeinfo
    initiativeaccepted
    active
  }
`
const VOTING_DETAILS = gql`
  fragment VotingDetails on Voting {
    proposalid
    commentid
    sectionid
    userid
    initiativeid
    votedatetime
    voteinfo
  }
`

const SECTION_DETAILS = gql`
  fragment SectionDetails on Section {
    caseid
    preparer
    casetext
    proposalforadecision
    x
    y
    z
    address
    postnumber
    postoffice
    country
    attachments
    sectionmunicipality
    agendaid
  }
`
const COMMENT_DETAILS = gql`
  fragment CommentDetails on Comment {
    commentdatetime
    commenttext
    sectionid 
  }
`
const MEETING_DETAILS = gql`
  fragment MeetingDetails on Meeting {
    meetingdatetime
    meetingtext
    organid
    meetingmunicipality
  }
`
const PROPOSAL_DETAILS = gql`
  fragment ProposalDetails on Proposal {
    proposaldatetime
    commenttext
    sectionid
  }
`


export const ALL_LINKS = gql`
query {
  allLinks {
    linkdatetime
    linktext
    commentid
    initiativeid
    sectionid
    proposalid
    linktype
    linkref 
    id
  }
}
`
export const ALL_VOTES = gql`
query {
  allVotes {
    proposalid
    commentid
    sectionid
    linkid
    userid
    initiativeid
    votedatetime
    voteinfo
    id
  }
}
`
export const ALL_USERS = gql`
query {
  allUsers {
    name
    email
    address
    postnumber
    postoffice
    phone
    activated
    type
    datetime
    id
  }
}
`
export const ALL_INITIATIVES = gql`
query {
  allInitiatives {  
    organid
    initiativetext
    initiativedatetime
    initiativeinfo
    initiativeaccepted
    active
    id
  }
}
`
 
export const ALL_ORGANS = gql`
  query {
    allOrgans {
      organname
      organshort
      organmunicipality
      id
    }
  }
`
export const ALL_MEETINGS = gql`
  query {
    allMeetings {
      meetingtext
      meetingdatetime
      organid
      meetingmunicipality
      id
    }
  }
`
export const ALL_MUNICIPALITIES = gql`
  query {
    allMunicipalities {
      organmunicipality
    }
  }
`

export const ALL_SECTIONS = gql`
  query {
    allSections {
      caseid
      preparer
      casetext
      proposalforadecision
      x
      y
      z
      address
      postnumber
      postoffice
      country
      attachments
      sectionmunicipality
      agendaid
      id
    }
  }
`
export const FIND_ORGAN = gql`
  query findOrganByName($nameToSearch: String!) {
    findOrgan(organname: $nameToSearch) {
      organname
      organshort
      organmunicipality
      id
    }
  }
  `
  export const FIND_LINK = gql`
  query findLinkByID($IDToSearch: String!) {
    findLink(id: $IDToSearch) {
      linkdatetime
      linktext
      linkdatetime
      linktext
      commentid
      sectionid
      initiativeid
      proposalid
      linktype
      linkref
      userid 
      id
    }
  }
  `
  
  export const FIND_USER = gql`
  query findUserByEmail($email: String!) {
    findUser(email: $email) {
      name
      email
      address
      postnumber
      postoffice
      phone
      activated
      type
      datetime
      id
    }
  }
  `
   
  export const FIND_INITIATIVE = gql`
  query findInitiativeByID($idToSearch: String!) {
    findInitiative(id: $idToSearch) {
      organid
      initiativetext
      initiativedatetime
      initiativeinfo
      initiativeaccepted
      active
      userid
      id
    }
  }
  `
  
  export const FIND_VOTE = gql`
  query findVoteByID($IDToSearch: String!) {
    findVote(id: $IDToSearch) {
      proposalid
      commentid
      sectionid
      initiativeid
      linkid
      userid
      votedatetime
      voteinfo
      id
    }
  }
  `
  

  export const FIND_COMMENT = gql`
  query findCommentByDatetime($datetimeToSearch: String!) {
    findComment(commentdatetime: $datetimeToSearch) {
      commentdatetime
      commenttext
      sectionid
      id
    }
  }
  `

  export const FIND_SECTION = gql`
  query findSectionByID($IDToSearch: String!) {
    findSection(id: $IDToSearch) {
      caseid
      preparer
      casetext
      proposalforadecision
      x
      y
      z
      address
      postnumber
      postoffice
      country
      attachments
      sectionmunicipality
      agendaid
      id
    }
  }
  `

  export const FIND_MEETING = gql`
  query findMeetingByDatetime($datetimeToSearch: String!) {
    findMeeting(meetingdatetime: $datetimeToSearch) {
      meetingtext
      meetingdatetime
      organid
      meetingmunicipality
      id
    }
  }
  `

  export const FIND_PROPOSAL = gql`
  query findProposalByDatetime($datetimeToSearch: String!) {
    findProposal(proposaldatetime: $datetimeToSearch) {
      proposaldatetime
      proposaltext
      sectionid
      id
    }
  }
  `
  export const FIND_MUNICIPAL = gql`
  query findMunicipalByName($nameToSearch: String!) {
    findMunicipal(municipalname: $nameToSearch) {
      name
      id
    }
  }
`


export const CREATE_VOTING = gql`
mutation createVoting($initiativeid: String, $linkid: String, $sectionid: String, $proposalid: String, $commentid: String, $userid: String, $votedatetime: String!, $voteinfo: String) {
  addVote(
    proposalid: $proposalid,
    commentid: $commentid,
    userid: $userid,
    sectionid: $sectionid,
    linkid: $linkid,
    votedatetime: $votedatetime,
    voteinfo: $voteinfo,
    initiativeid: $initiativeid
  ) {
    proposalid
    commentid
    userid
    sectionid
    linkid
    votedatetime
    voteinfo
    initiativeid
    id
  }
}
`
export const CREATE_USER = gql`
mutation createUser($name: String!, $email: String!, $passwordhash: String!, $address: String, $postnumber:String!, $postoffice: String!, $phone: String, $activated: String, $type: String, $datetime: String) {
  addUser(
    name: $name,
    email: $email ,
    passwordhash: $passwordhash,
    address: $address ,
    postnumber: $postnumber ,
    postoffice: $postoffice ,
    phone: $phone,
    activated: $activated,
    type: $type,
    datetime: $datetime
  ) {
    name
    email
    address
    postnumber
    postoffice
    phone
    activated
    type
    datetime
    id
  }
}
`
export const CREATE_INITIATIVE = gql`
mutation createInitiative($organid: String, $initiativetext: String!, $initiativedatetime: String!, $initiativeinfo: String, $initiativeaccepted: String!, $active: String) {
  addInitiative(
    organid: $organid,
    initiativetext: $initiativetext
    initiativedatetime: $initiativedatetime
    initiativeinfo: $initiativeinfo
    initiativeaccepted: $initiativeaccepted
    active: $active
  ) {
    organid
    initiativetext
    initiativedatetime
    initiativeinfo
    initiativeaccepted
    active
    id
  }
}
`

export const CREATE_ORGAN = gql`
  mutation createOrgan($organname: String!, $organshort: String!, $organmunicipality: String!) {
    addOrgan(
      organname: $organname,
      organshort: $organshort,
      organmunicipality: $organmunicipality
    ) {
      organname
      organshort
      organmunicipality
      id
    }
  }
`

export const CREATE_COMMENT = gql`
  mutation createComment($commenttext: String!, $commentdatetime: String!, $sectionid: String!) {
    addComment(
      commenttext: $commenttext,
      commentdatetime: $commentdatetime,
      sectionid: $sectionid
    ) {
      commenttext
      commentdatetime
      sectionid
      id
    }
  }
`
export const CREATE_LINK = gql`
  mutation createLink($sectionid: String!, $linktext: String!, $linkdatetime: String!, $initiativeid:String, $linktype: String, $linkref: String!, $proposalid: String, $commentid: String) {
    addLink(
      linktext: $linktext
      linkdatetime: $linkdatetime
      commentid: $commentid
      sectionid: $sectionid
      initiativeid: $initiativeid
      proposalid: $proposalid
      linktype: $linktype
      linkref: $linkref
    ) {
      linktext
      linkdatetime
      commentid
      sectionid
      initiativeid
      proposalid
      linktype
      linkref
      id
    }
  }
`

export const CREATE_SECTION = gql`
  mutation createSection($caseid: String, $preparer: String!, $casetext: String!, $proposalforadecision: String!, $x: String, $y: String, $z: String, $address: String, $postnumber: String, $postoffice: String, $country: String, $attachments: String, $sectionmunicipality: String, $agendaid: String) {
    addSection(
      caseid: $caseid
      preparer: $preparer
      casetext: $casetext 
      proposalforadecision: $proposalforadecision
      x: $x
      y: $y
      z: $z
      address: $address
      postnumber: $postnumber
      postoffice: $postoffice
      country: $country
      attachments: $attachments
      sectionmunicipality: $sectionmunicipality
      agendaid: $agendaid
    ) {
      caseid
      preparer
      casetext
      proposalforadecision
      x
      y
      z
      address
      postnumber
      postoffice
      country
      attachments
      sectionmunicipality
      agendaid
      id
    }
  }
`
export const CREATE_MEETING = gql`
  mutation createMeeting($meetingtext: String!, $meetingdatetime: String!, $organid: String!, $meetingmunicipality: String! ) {
    addMeeting(
      meetingtext: $meetingtext,
      meetingdatetime: $meetingdatetime,
      organid: $organid
      meetingmunicipality: $meetingmunicipality
    ) {
      meetingtext
      meetingdatetime
      organid
      meetingmunicipality
      id
    }
  }

`

export const CREATE_PROPOSAL = gql`
  mutation createProposal($proposaltext: String!, $proposaldatetime: String!, $sectionid: String) {
    addProposal(
      proposaltext: $proposaltext,
      proposaldatetime: $proposaldatetime,
      sectionid: $sectionid
    ) {
      proposaltext
      proposaldatetime
      sectionid
      id
    }
  }

`
export const CREATE_PERSON = gql`
  mutation createPerson($name: String!, $street: String!, $city: String!, $phone: String) {
    addPerson(
      name: $name,
      street: $street,
      city: $city,
      phone: $phone
    ) {
      name
      phone
      id
      street
      city
    }
  }
`
export const ALL_PERSONS = gql`
  query {
    allPersons  {
      name
      phone
      id
    }
  }
`
export const ALL_COMMENTS = gql`
  query {
    allComments  {
      commenttext
      commentdatetime
      sectionid
      id
    }
  }
`


export const ALL_PROPOSALS = gql`
  query {
    allProposals  {
      proposaltext
      proposaldatetime
      sectionid
      id
    }
  }
`

export const EDIT_MEETING = gql`
  mutation editMeeting($meetingdatetime: String!, $meetingtext: String!) {
    editMeeting(meetingdatetime: $meetingdatetime, meetingtext: $meetingtext)  {
      meetingdatetime
      meetingtext
      meetingmunicipality
      id
    }
  }
`
export const EDIT_USER = gql`
mutation editUser($name: String!, $email: String!, $passwordhash: String!, $address: String, $postnumber:String, $postoffice: String!, $phone: String, $activated: String, $type: String) {
  editUser(
    name: $name,
    email: $email ,
    passwordhash: $passwordhash,
    address: $address ,
    postnumber: $postnumber ,
    postoffice: $postoffice ,
    phone: $phone,
    activated: $activated,
    type: $type
  ) {
    name
    email
    address
    postnumber
    postoffice
    phone
    activated
    type
    id
  }
}
`
export const EDIT_VOTE = gql`
  mutation editVote($proposalid: String,$sectionid: String, $commentid: String, $userid: String, $votedatetime: String!, $voteinfo: String, $initiativeid: String) {
    editVote(proposalid: $proposalid,sectionid: $sectionid, commentid: $commentid, userid: $userid, votedatetime: $votedatetime, voteinfo: $voteinfo, initiativeid: $initiativeid)  {
      proposalid
      commentid
      sectionid
      userid
      initiativeid
      votedatetime
      voteinfo
      id
    }
  }
`

export const EDIT_INITIATIVE = gql`
mutation editInitiative($organid: String, $initiativetext: String, $initiativedatetime: String,$initiativeinfo: String, $initiativeaccepted: String!, $active: String) {
  editInitiative(
    organid: $organid,
    initiativetext: $initiativetext
    initiativedatetime: $initiativedatetime
    initiativeinfo: $initiativeinfo
    initiativeaccepted: $initiativeaccepted
    active: $active
  ) 
}
`


export const EDIT_SECTION = gql`
  mutation editSection($caseid: String, $preparer: String!, $casetext: String!, $proposalforadecision: String!, $x: String, $y: String, $z: String, $address: String, $postnumber: String, $postoffice: String, $country: String, $attachments: String, $sectionmunicipality: String, $agendaid: String) {
    editSection(caseid: $caseid, preparer: $preparer, casetext: $casetext, proposalforadecision: $proposalforadecision, x: $x, y: $y, z: $z, address: $address, postnumber: $postnumber, postoffice: $postoffice, country: $country, attachments: $attachments, sectionmunicipality: $sectionmunicipality, agendaid: $agendaid)  {
      caseid
      preparer
      casetext
      proposalforadecision
      x
      y
      z
      address
      postnumber
      postoffice
      country
      attachments
      sectionmunicipality
      agendaid
      id
    }
  }
`
export const LOGIN = gql`
  mutation login($email: String!, $passwordhash: String!) {
    login(email: $email, passwordhash: $passwordhash)  {
      value
    }
  }
`

export const ORGAN_ADDED = gql`
  subscription {
    organAdded {
      ...OrganDetails
    }
  }
  ${ORGAN_DETAILS}
`
export const LINK_ADDED = gql`
  subscription {
    linkAdded {
      ...LinkDetails
    }
  }
  ${LINK_DETAILS}
`

export const COMMENT_ADDED = gql`
  subscription {
    commentAdded {
      ...CommentDetails
    }
  }
  ${COMMENT_DETAILS}
`
export const VOTE_ADDED = gql`
  subscription {
    voteAdded {
      ...VoteDetails
    }
  }
  ${VOTING_DETAILS}
`

export const INITIATIVE_ADDED = gql`
  subscription {
    initiativeAdded {
      ...InitiativeDetails
    }
  }
  ${INITIATIVE_DETAILS}
`

export const MEETING_ADDED = gql`
  subscription {
    meetingAdded {
      ...MeetingDetails
    }
  }
  ${MEETING_DETAILS}
`
export const USER_ADDED = gql`
  subscription {
    userAdded {
      ...UserDetails
    }
  }
  ${USER_DETAILS}
`
export const PROPOSAL_ADDED = gql`
  subscription {
    proposalAdded {
      ...ProposalDetails
    }
  }
  ${PROPOSAL_DETAILS}
`
export const SECTION_ADDED = gql`
  subscription {
    sectionAdded {
      ...SectionDetails
    }
  }
  ${SECTION_DETAILS}
`