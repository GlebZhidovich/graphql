//Hooks
import { useQueryAvailablePets } from './hooks/useQueryAvailablePets';

export const Counter = () => {
  const { loading, error, data } = useQueryAvailablePets();
  console.log(data);
  if (loading) return <p>Loading...</p>
  if (error) return <p>{error.message}</p>

  return (
    <p>Available Pets {data.availablePets}</p>
  )
}
