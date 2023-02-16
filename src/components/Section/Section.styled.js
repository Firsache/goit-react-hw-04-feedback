import styled from 'styled-components';

export const Wrapper = styled.section`
  padding: 40px 40px 30px 40px;
  padding-bottom: 30px;
  text-align: center;
  background-color: #ffffff;

  &:last-of-type {
    padding: 30px 40px 40px 40px;
  }
  &:nth-child(even) {
    background-color: #f5f4fa;
  }
`;

export const Title = styled.h2`
  font-weight: 600;
  font-size: 30px;
  letter-spacing: 1.2px;
  color: #808080;
`;
