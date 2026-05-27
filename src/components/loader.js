import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const fadeOut = keyframes`
  0% { opacity: 1; }
  100% { opacity: 0; visibility: hidden; }
`;

const StyledLoader = styled.div`
  ${({ theme }) => theme.mixins.flexCenter};
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: var(--dark-navy);
  z-index: 99;
  animation: ${fadeOut} 0.5s ease forwards;
  animation-delay: 1.8s;
`;

const LoaderContainer = styled.div`
  position: relative;
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Square = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border: 3px solid transparent;
  border-top: 3px solid var(--green);
  border-right: 3px solid var(--green);
  animation: ${rotate} 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite;
`;

const InnerSquare = styled.div`
  position: absolute;
  width: 70%;
  height: 70%;
  border: 2px solid var(--lightest-navy);
`;

const Letter = styled.div`
  position: relative;
  z-index: 2;
  color: var(--green);
  font-size: 36px;
  font-weight: bold;
  font-family: var(--font-mono);
  text-align: center;
  line-height: 1;
`;

const Loader = ({ finishLoading }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 10);
    const finishTimeout = setTimeout(() => finishLoading(), 2000);
    return () => {
      clearTimeout(timeout);
      clearTimeout(finishTimeout);
    };
  }, [finishLoading]);

  return (
    <StyledLoader className="loader" isMounted={isMounted}>
      <Helmet bodyAttributes={{ class: `hidden` }} />
      <LoaderContainer>
        <Square />
        <InnerSquare />
        <Letter>M</Letter>
      </LoaderContainer>
    </StyledLoader>
  );
};

Loader.propTypes = {
  finishLoading: PropTypes.func.isRequired,
};

export default Loader;