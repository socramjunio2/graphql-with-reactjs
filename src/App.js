import React from 'react';
import { ApolloProvider } from "@apollo/client";
import client from './services/index'
import './App.less';
import Student from './_Pages';

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Student />
    </ApolloProvider>
  );
}

export default App;