import styled from "styled-components";

export const StyledCarCard = styled.div`

    display: flex;
    align-items: center;

    width: 100%;

    img{
        width: 4rem;
        height: 4rem;
    }

    .divContentAndButton{

       
        display: flex;
        justify-content: space-between;
        width: 100%;

    }

    .divContent{
       
    }

    button{
        padding:2.5px 5px;
        border: none ;
        outline: none;
        background-color: var(--gray-20);
        color:var(--gray-50);
        border-radius: 0.25rem;
    }

    button:hover{
        background-color: var(--gray-50);
        color:var(--gray-20);

    }


`