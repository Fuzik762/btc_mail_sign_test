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