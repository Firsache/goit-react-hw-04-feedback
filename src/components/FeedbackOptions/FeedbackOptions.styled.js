import styled from 'styled-components';
import { colorPicker } from 'components/helpers/colorPicker';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  padding-top: 20px;
`;

export const Button = styled.button`
  width: 120px;
  padding: 10px 5px;
  border-radius: 5px;
  background-color: ${colorPicker};

  text-transform: uppercase;
  font-size: 16px;
  letter-spacing: 1.2px;
  color: #ffffff;
  transition: box-shadow 200ms ease-in, transform 200ms ease-in;

  &:hover {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    transform: scale(1.05);
  }
`;
