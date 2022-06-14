import gql from 'graphql-tag'

export const LOGIN_QUERY = gql`
  query {
    login {
      status
      errors {
        code
        message
      }
    }
  }
`