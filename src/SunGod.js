import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import { useQuery } from '@apollo/react-hooks';
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

export default function Launcher() {
  const { data, loading, error } = useQuery(ROOT);
  if (loading) return <h3>loading</h3>;
  if (error) return <p>ERROR</p>;

  return (

    <ul>
      {data.root &&
        data.root.map(launch => (
          <li>
            <div>{launch.id}</div>
            <div>{launch.name}</div>
          </li>
        ))}
    </ul>

  );
}