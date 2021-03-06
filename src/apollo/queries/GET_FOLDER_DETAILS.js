import gql from 'graphql-tag';

const GET_FOLDER_DETAILS = gql`
  query GetFolderContents($id: ID) {
    getFolderFromId(id: $id) {
      ... on Folder {
        id
        name
        klass
        entryType
        cloudFilesCount
        subfoldersCount
        domUuid
      }
      ... on CloudFile {
        id
        name
        klass
        entryType
        domUuid
        asset
        url
        infoUrl
        contentType
        releasePos
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