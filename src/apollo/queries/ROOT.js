import gql from 'graphql-tag';

const ROOT = gql`
  query root {
    root {
      id
      name
      klass
    }
  }
`;


export default ROOT;