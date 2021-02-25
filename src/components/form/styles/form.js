import styled from 'styled-components';
import { Link as ReachRouterLink } from 'react-router-dom';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  ${'' /* min-height: 660px; */}
  min-height: 540px;
  max-width: 450px;
  background-color: rgba(0, 0, 0, 0.75);
  border-radius: 5px;
  padding: 60px 68px 40px;
  margin: 0 auto;
  margin-bottom: 100px;
  position: relative;
`;

export const Base = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 450px;
  width: 100%;
`;

export const Title = styled.h2`
  color: #fff;
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 28px;
`;

export const Text = styled.p`
  color: #737373;
  font-size: 16px;
  font-weight: 500;
`;

export const TextSmall = styled.h4`
  font-size: 13px;
  line-height: normal;
  color: #8c8c8c;
  position: absolute;
  bottom: 20px;
`;

export const Link = styled(ReachRouterLink)`
  color: #fff;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`;

export const Input = styled.input`
  background: #333;
  border-radius: 4px;
  border: 0;
  color: #fff;
  height: 50px;
  line-height: 50px;
  padding: 5px 20px;
  margin-bottom: 20px;
  
  &:last-of-type {
    margin-bottom: 30px;
  }
`;

export const Error = styled.div`
  background: #e87c03;
  border-radius: 4px;
  font-size: 14px;
  margin: 0 0 16px;
  color: white;
  padding: 15px 20px;
`;

export const Submit = styled.button`
  background: #e50914;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 12px;
  padding: 16px;
  border: 0;
  color: white;
  cursor: pointer;
  
  &:disabled {
      opacity: 0.5;
  }
`;