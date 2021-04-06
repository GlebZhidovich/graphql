import { loader } from 'graphql.macro';
import { useMutation } from '@apollo/client';
import { useState, useEffect } from 'react';

// Mutations
const mCheckOut = loader('./gql/mCheckOut.graphql');

export const useCheckOut = () => {
  const [checkOut, {data, error}] = useMutation(mCheckOut);
  const [value, setValue] = useState({
    id: ''
  });

  const handleChange = (event) => {
    console.log(value)
    setValue({
      [event.target.name]: event.target.value
    })
  }

  const handleCheck = () => {
    checkOut({
      variables: {
        ...value
      }
    })
  }

  useEffect(() => {
    console.log(data)
  }, [data]);

  return {
    handleChange,
    handleCheck
  }
}
