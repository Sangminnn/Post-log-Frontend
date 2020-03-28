import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
`;

const Posting = ({children}) => (
  <Wrapper>
    {children}
  </Wrapper>
);

export default Posting;