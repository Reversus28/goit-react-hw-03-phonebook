import styled from '@emotion/styled';

const Wrapper = styled.div`
  margin: 0 auto;
  margin-bottom: 40px;
  max-width: 400px;
  padding: 40px 40px;
  background-color: white;
  border-radius: 15px;
`;

const Button = styled.button`
  font-weight: 500;
  padding: 10px;
  font-size: 14px;
  color: #ffffff;
  background-color: #a49ab1;
  border-radius: 5px;
  border: none;
  &:hover {
    background-color: #816b9c;
  }
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  font-size: 20px;
  font-weight: 500;
`;

const Input = styled.input`
  margin-top: 15px;
  margin-bottom: 25px;
  padding: 0 5px;
  width: 100%;
  height: 40px;
  font-size: 18px;

  border: 2px solid #62758a;
  border-radius: 5px;
`;

export { Button, Wrapper, Label, Input };
