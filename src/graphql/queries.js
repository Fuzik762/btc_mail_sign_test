import gql from 'graphql-tag'

export const LOGIN_QUERY = gql`
  query AuthLogin($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      status
      errors {
        code
        message
      }
      token
    }
  }
`

export const GET_STAFF = gql`
  query GetStaff($searchString: String, $offset: Int, $limit: Int,$statusFilter: [String], $orderBy: StaffOrderByInput) {
    getStaff(searchString: $searchString, offset: $offset, limit: $limit, statusFilter: $statusFilter, orderBy: $orderBy) {
      status
      errors {
        code
        message
      }
      totalCount
      staff {
        id
        name
        company
        position
        nameEng
        companyEng
        positionEng
        email
        phone
        status
        vacationEndDate
        url
        template {
          id
          name
          htmlCode
        }
      }
    }
  }
`
export const GET_EMPLOYEE = gql`
  query GetEmployee($id: Int!) {
    getEmployee(id: $id) {
      status
      errors {
        code
        message
      }
      employee {
        id
        name
        company
        position
        nameEng
        companyEng
        positionEng
        email
        phone
        status
        vacationEndDate
        url
        template {
          id
          name
          htmlCode
        }
      }
    }
  }
`

export const GET_TEMPLATES = gql`
  query GetTemplates($limit: Int, $offset: Int) {
    getTemplates(limit: $limit, offset: $offset) {
      status
      errors {
        code
        message
      }
      templates {
        id
        name
        htmlCode
      }
      totalCount
    }
  }
`