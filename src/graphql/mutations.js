import gql from 'graphql-tag'

export const CREATE_EMPLOYEE = gql`
  mutation CreateEmployee(
    $name: String!
    $company: String
    $position: String
    $nameEng: String
    $companyEng: String
    $positionEng: String
    $email: String
    $phone: String
    $status: String
    $vacationEndDate: Date
    $templateId: Int
    ) {
    createEmployee(
      name: $name
      company: $ company
      position: $position
      nameEng: $nameEng
      companyEng: $companyEng
      positionEng: $positionEng
      email: $email
      phone: $phone
      status: $status
      vacationEndDate: $vacationEndDate
      templateId: $templateId
      ) {
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

export const UPDATE_EMPLOYEE = gql`
  mutation UpdateEmployee(
    $id: Int!
    $name: String!
    $company: String
    $position: String
    $nameEng: String
    $companyEng: String
    $positionEng: String
    $email: String
    $phone: String
    $status: String
    $vacationEndDate: Date
    $templateId: Int
    ) {
    updateEmployee(
      id: $id
      name: $name
      company: $ company
      position: $position
      nameEng: $nameEng
      companyEng: $companyEng
      positionEng: $positionEng
      email: $email
      phone: $phone
      status: $status
      vacationEndDate: $vacationEndDate
      templateId: $templateId
      ) {
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