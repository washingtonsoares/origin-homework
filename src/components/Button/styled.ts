import styled from 'styled-components';

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  outline: none;
  cursor: pointer;
  width: 320px;
  border-radius: 32px;
  padding: 18px 0;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
`;
