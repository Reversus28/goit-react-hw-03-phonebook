import styled from '@emotion/styled';

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

export { Label, Input };
