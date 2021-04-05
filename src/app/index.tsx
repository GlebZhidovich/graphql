//Core
import { FC, memo } from 'react';
import { ApolloProvider } from '@apollo/client';

//Components
import { Pet } from './bus/pet';
import { Customer } from './bus/customer';


//Other
import { client } from './init/client';

const App: FC = (props) => {
  return (
    <ApolloProvider client={client}>
      <Customer />
    </ApolloProvider>

  )
}

export default memo(App);
