import styled from '@emotion/styled';

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 400px;
  padding: 30px 30px;
  background-color: white;
  border-radius: 15px;
`;
const Title = styled.h2`
  margin-bottom: 20px;
  color: #35234e;
  font-size: 25px;
  font-weight: 700;
  text-transform: uppercase;
`;

const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

const Contact = styled.p`
  text-align: left;
  font-size: 20px;

  &::before {
    content: '';
    display: inline-flex;
    justify-content: center;

    margin-right: 10px;
    width: 15px;
    height: 15px;
    background-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='iso-8859-1'%3F%3E%3C!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E%3Csvg version='1.1' id='Layer_1' fill='%23526194' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 512 512' style='enable-background:new 0 0 512 512;' xml:space='preserve'%3E%3Cg%3E%3Cg%3E%3Cpath d='M256,0c-74.439,0-135,60.561-135,135s60.561,135,135,135s135-60.561,135-135S330.439,0,256,0z'/%3E%3C/g%3E%3C/g%3E%3Cg%3E%3Cg%3E%3Cpath d='M423.966,358.195C387.006,320.667,338.009,300,286,300h-60c-52.008,0-101.006,20.667-137.966,58.195 C51.255,395.539,31,444.833,31,497c0,8.284,6.716,15,15,15h420c8.284,0,15-6.716,15-15 C481,444.833,460.745,395.539,423.966,358.195z'/%3E%3C/g%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3C/svg%3E%0A");
  }
`;
const Button = styled.button`
  margin-left: 15px;
  padding: 10px;
  font-weight: 500;
  font-size: 12px;
  color: #ffffff;
  background-color: #a49ab1;
  border-radius: 5px;
  border: none;
  &:hover {
    background-color: #816b9c;
  }
`;
export { Wrapper, Title, Item, Contact, Button };
