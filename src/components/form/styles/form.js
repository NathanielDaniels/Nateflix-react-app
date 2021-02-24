import styled from 'styled-components';
import { Link as ReachRouterLink } from 'react-router-dom';

export const Container = styled.section`
  width: 500px;
  margin: 0 auto;
  background: rgba(0,0,0,.5);
  padding: 20px;
  border-radius: 10px;
`;

export const Base = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h2`
  color: red;
  text-align: center;
`;

export const Text = styled.p`
  color: #fff;
`;

export const TextSmall = styled.h4``;

export const Link = styled(ReachRouterLink)``;

export const Input = styled.input`
  margin: 10px 0;
  padding: 5px;
`;

export const Error = styled.div``;

export const Submit = styled.button``;