import { gql } from 'apollo-angular';

const GET_MOVIES = gql`
  query {
    movies {
      id
      name
      time
      rating
    }
  }
`;

export { GET_MOVIES };
