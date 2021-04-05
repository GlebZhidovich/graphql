export const QueryResult = ({loading, error, children}) => {

  if (loading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>{error.message}</p>
  }

  return <p>
    {
      children
    }
  </p>
}
