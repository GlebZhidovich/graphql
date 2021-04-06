import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { loader } from 'graphql.macro';

// Mutations
const mutationLogin = loader('./gql/mutationLogin.graphql');

export const useLogin = () => {
  const [login, { data }] = useMutation(mutationLogin);
  const [values, setValues] = useState({
    account: {
      username: '',
      password: ''
    }
  });

  const handleChange = (event) => {
    setValues((prevValues) => ({
      account: {
        ...prevValues.account,
        [event.target.name]: event.target.value,
      }
    }))
  }

  const logIn = () => {
    const { account } = values;

    login({
      variables: {
        ...account
      }
    })
  }

  return {
    logIn,
    handleChange,
    token: data?.logIn.token
  }
}
