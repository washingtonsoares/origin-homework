import styled from 'styled-components';

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.brandColorPrimary};
  color: ${({ theme }) => theme.colors.neutralWhite};
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

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryHover};
  }

  &:focus {
    box-shadow: rgb(27 49 168 / 50%) 0px 8px 16px 0px;
    background-color: ${({ theme }) => theme.colors.primaryHover};
  }
`;
