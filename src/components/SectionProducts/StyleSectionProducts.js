import styled from "styled-components";

export const StyledSection = styled.section`


display: flex;
flex-wrap:wrap;
gap: 1rem;
width: 64%;

margin-bottom: 1rem;


@media(max-width:768px){
        flex-wrap:nowrap;
        overflow-x:scroll;
        width: 99%;
        
    }


`