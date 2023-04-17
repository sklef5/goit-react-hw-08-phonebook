import styled from 'styled-components';
export const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 480px;
`;

export const List = styled.ul`
  padding-left: 0px;
  padding: 15px;
  background-color: #fff;
`;

export const Contact = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 500px;
  margin-bottom: 8px;
  font-weight: 400;
  font-size: 20px;
`;
export const Button = styled.button`
  width: 120px;
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  background-color: grey;
  color: black;
  font-size: 16px;
  font-weight: 500;
  margin-left: auto;
  margin-right: auto;
  cursor: pointer;
  &:hover {
    background-color: #fff;
    color: black;
    scale: 1.05;
    font-weight: 600;
    box-shadow: 1px 1px 2px black;
  }
`;

export const Block = styled.div`
  margin-right: 30px;
  width: 70%;
`;
export const Img = styled.img`
  border-radius: 50%;
  margin-right: 15px;
  width: 70%;
`;
export const Emptylist = styled.p`
  color: #fff;
  font-size: 20px;
  text-align: center;
`;
