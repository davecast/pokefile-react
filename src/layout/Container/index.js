import React from 'react';

import { ContainerContent } from './styled';

const Container = ({ children}) => {
  return (
    <ContainerContent>
      {children}
    </ContainerContent>
  );
}
 
export default Container;