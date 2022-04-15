import React from 'react';

import {Context} from '../components/Context';
import {Layout} from '../components/Layout';

const Index = () => {
  const value = React.useContext(Context);
  if (typeof value === `undefined`)
    throw new Error(`Missing context`);

  return (
    <div>
      Hello world {value}
    </div>
  );
};

Index.getLayout = ({children}) => {
  return (
    <Layout>
      {children}
    </Layout>
  )
};

export default Index;
