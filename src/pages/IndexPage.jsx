import React, { useContext } from 'react';
import { Box, styled, keyframes, Heading, Link, Paragraph, Image } from 'reakit';
import { Context } from '../components';
import logo from '../static/images/logo.svg';

export default props => {
  // context is the global state
  const context = useContext(Context);

  return (
    <Box textAlign="center">
      <Title use="h1">
        <Logo src={logo} alt="logo" />
        <Paragraph>Welcome to {context.state.title}!</Paragraph>
        <Link href="https://reactjs.org" target="_blank" rel="noopener noreferrer" color="#61dafb">
          Learn React
        </Link>
      </Title>
    </Box>
  );
};

// Styled Components, Media Queries, and Animations

const LogoSpin = keyframes`
from {
  transform: rotate(0deg);
}
to {
  transform: rotate(360deg);
}
`;

const Logo = styled(Image)`
  animation: ${LogoSpin} infinite 20s linear;
  height: 40vmin;
  pointer-events: none;
`;

const Title = styled(Heading)`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin) !important;
  color: white;
  font-weight: unset;
  margin: unset;
`;
