import { useQueryProfile } from './hooks/useQueryProfile';
import { QueryResult } from './query-result';

export const Profile = () => {
  const { loading, error, profile: {id, name} } = useQueryProfile({ variables: { id: 'C-1' } });

  return (
    <QueryResult
      loading={loading}
      error={error}>
      <span>ID: {id}</span>
      <br/>
      <span>Name: {name}</span>
    </QueryResult>
  )
}
