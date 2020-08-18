import React from 'react';

import { Row } from './styled';

const Grid = ({ children }) => {
  return (
    <Row>
      {children}
    </Row>
  );
}
 
export default Grid;