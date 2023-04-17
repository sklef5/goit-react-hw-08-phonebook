import styled from 'styled-components';

export const FormStyled = styled.form`
  width: 450px;
  background-color: #fff;
  margin-left: auto;
  margin-right: auto;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  padding: 15px;
`;

export const Input = styled.input`
  width: 260px;
  padding: 12px 18px;
  margin-bottom: 16px;
  border-radius: 4px;
  margin-left:auto;
  margin-right:auto;
  &:hover {
    border-color: green;
  }
`;
export const Label = styled.label`
  width: 100%;
  margin-bottom: 8px;
  font-weight: 500;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  flex-direction: column;

  align-items: center;
`;
