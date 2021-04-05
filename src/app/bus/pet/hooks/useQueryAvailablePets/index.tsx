//Core
import {useQuery} from '@apollo/client';
import { loader } from 'graphql.macro';

//Queries
const queryAvailablePets = loader('./gql/useQueryAvailablePets.graphql');

export const useQueryAvailablePets = () => {
  return useQuery(queryAvailablePets);
}
