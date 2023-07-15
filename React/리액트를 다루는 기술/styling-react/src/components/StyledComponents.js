import styled from 'styled-components';

const Box = styled.div`
  background-color: ${props => props.color || 'blue'};
  padding: 1rem;
  display: flex;
`;

const Button = styled.button`
  background-color: white;
  color: black;
  border-radius: 4px;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  font-size: 1rem;
  font-weight: 600;

  &:hover {
    background: rgba(255, 255, 255, 0.8);
  }
`;
