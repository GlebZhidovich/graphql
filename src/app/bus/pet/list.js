import { useQueryAllPets } from './hooks/useQueryAllPets';
import { QueryResult } from './query-result';

export const List = () => {
  const { loading, error, pets } = useQueryAllPets();

  if (loading) return <p>Loading...</p>
  if (error) return <p>{error.message}</p>

  return (
    <QueryResult
      error={error}
      loading={loading}>
      {
        pets.map(({ id, name, weight }) => (
          <span key={id}>
          <span>Name: {name}</span>
          <br />
          <span>Weight: {weight}</span>
          <br />
        </span>
        ))
      }
    </QueryResult>
  )
}
