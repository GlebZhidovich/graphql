import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { loader } from 'graphql.macro';

// Mutations
const mutationCreateAccount = loader('./gql/mutationCreateAccount.graphql');

export const useCustomer = () => {
  const [addUser, { data }] = useMutation(mutationCreateAccount);
  const [values, setValues] = useState({
    account: {
      name: '',
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

  const save = () => {
    const { account } = values

    addUser({
      variables: {
        account
      }
    })
  }

  return {
    values,
    save,
    handleChange,
    createAccount: data?.createAccount
  }
}
