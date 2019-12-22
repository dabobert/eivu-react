import gql from 'graphql-tag';

const GET_FOLDER_DETAILS = gql`
  query GetFolderContents($id: ID) {
    getFolderFromId(id: $id) {
      ... on Folder {
        __typename
        id
        name
        klass
        entryType
        domUuid
      }
      ... on CloudFile {
        __typename
        id
        name
        klass
        entryType
        domUuid
        asset
        url
        infoUrl
        contentType
        year
        release {
          id
          name
        }
        artists {
          name
          klass
        }
      }
    }
  }
`;


export default GET_FOLDER_DETAILS;