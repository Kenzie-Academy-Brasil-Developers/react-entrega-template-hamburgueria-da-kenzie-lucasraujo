import styled from "styled-components";

export const StyledCard = styled.div`
  border: 2px solid var(--gray-50);
  border-radius: 0.5rem;
  display: flex;
  padding: 1rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--gray-0);

  width: 30%;
  max-height: 19rem;

  .divContent {
    height: 50%; 
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
  }

  button {
    background-color: var(--Color-primary);
    padding: 0.65rem 1.25rem;
    border: none;
    outline: none;
    border-radius: 0.5rem;
  }

  button:hover {
    background-color: var(--Color-primary-50);
  }

  img {
    width: 90%;
    height: 50%;
  }

  @media (max-width: 768px) {
    min-width: 15rem;
  }
`;
