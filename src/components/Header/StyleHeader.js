import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;

  justify-content: space-between;
  align-items: center;
  padding: 2rem 6rem;

  .headerContent {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  .fakeInput {
    border: 2px solid var(--gray-20);
    padding: 0.5rem;
    width: max-content;
    margin-top: 1rem;
    border-radius: 0.5rem;
  }

  .inputSheach{
     border:none;
     outline:none;
     height: 2rem;
     margin-right: 1rem;

  }

  .buttonSheach{
    background-color: var(--Color-primary);
    padding:0.65rem 1.25rem ;
    border:none;
    outline:none;
    border-radius:0.5rem;


  }

  .buttonSheach:hover{
    background-color: var(--Color-primary-50);
  }

  @media (max-width: 768px) {
    .headerContent {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 100%;

      align-items: center;
    }
  }
`;
