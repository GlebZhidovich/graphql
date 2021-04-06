import { loader } from 'graphql.macro';
import { useMutation } from '@apollo/client';
import { useState, useEffect } from 'react';

// Mutations
const mCheckIn = loader('./gql/mCheckIn.graphql');

export const useCheckIn = () => {
  const [checkIn, {data, error}] = useMutation(mCheckIn);
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
    checkIn({
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
