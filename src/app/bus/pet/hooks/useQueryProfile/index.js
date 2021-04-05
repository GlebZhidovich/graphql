//Core
import { useQuery } from '@apollo/client';
import { loader } from 'graphql.macro';

//Queries
const queryProfile = loader('./gql/queryPetById.graphql');

export const useQueryProfile = (obj) => {
  const { loading, error, data } = useQuery(queryProfile, obj);
  console.log(data)
  return {
    loading,
    error,
    profile: data?.petById
  }
}
