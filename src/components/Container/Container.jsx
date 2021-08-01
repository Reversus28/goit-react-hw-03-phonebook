import React from 'react';
import { Wrapper } from './Container.style';

function Container({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

export default Container;
