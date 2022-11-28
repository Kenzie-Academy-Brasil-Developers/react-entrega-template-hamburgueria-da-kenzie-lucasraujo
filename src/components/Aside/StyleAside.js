import styled from "styled-components";


export const StyledAside = styled.aside`

min-width: 35%;


.headerAside{
    border-radius: 0.5rem 0.5rem 0 0;
    padding:1.5rem;
    background-color:var(--Color-primary);
}

.divTotal{
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;

}

.buttonRemoveAll{
    width: 100%;
    padding: 20px;
    margin-top: 2rem;
    border: none ;
    outline: none;
    background-color: var(--gray-20);
    color:var(--gray-50);
    border-radius: 0.25rem;
    font-size: 1rem;
    font-weight: 600;

}



.buttonRemoveAll:hover{
    background-color: var(--gray-50);
    color:var(--gray-20);

}


@media(max-width:768px){
     width: 100%;
        
        
    }

`