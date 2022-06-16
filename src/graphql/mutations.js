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

export const UPDATE_TEMPLATE = gql`
  mutation UpdateTemplate($id: Int!, $name: String, $htmlCode: String) {
    updateTemplate(id: $id, name: $name, htmlCode: $htmlCode) {
      status
      errors {
        code
        message
      }
      template {
        id
        name
        htmlCode
      }
    }
  }
`
export const CREATE_TEMPLATE = gql`
  mutation CreateTemplate($name: String!, $htmlCode: String) {
    createTemplate(name: $name, htmlCode: $htmlCode) {
      status
      errors {
        code
        message
      }
      template {
        id
        name
        htmlCode
      }
    }
  }
`

export const DELETE_TEMPLATE = gql`
  mutation DeleteTemplate($id: Int!) {
    deleteTemplate(id: $id) {
      status
      errors {
        code
        message
      }
    }
  }
`