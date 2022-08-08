import styled from "styled-components";

export const Input = styled.input`
  margin-right: 1rem;
  padding: 1rem;
  height: 2.5rem;
  align-self: center;
  border: none;
  color: #000;
  font-family: Montserrat, sans-serif;
  border-radius: 5px;
  outline: none;
  background: none;
  box-shadow: 0px 0px 7px #ccc;
  &::placeholder {
    color: #e6e3e3;
  }
`;

export const StyledButton = styled.button`
  color: #000;
  font-family: "Montserrat", sans-serif;
  background-color: #e6e3e3;
  border: none;
  border-radius: 4px;
  font-size: 0.9rem;
  padding: 5px;
  width: max-content;
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

export const SubTasks = styled.div`
  border: 1px solid #e6e3e3;
  width: 50%;
  margin: auto;
  padding: 0.7rem;
  border-radius: 7px;
  transition: box-shadow 0.2s ease-in-out;
  &:hover{
    box-shadow: 0px 0px 7px #ccc;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Btn = styled.button`
  border: none;
  background: none;
`;
