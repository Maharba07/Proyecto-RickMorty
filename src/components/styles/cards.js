import styled from 'styled-components';

export const DivPersonajes = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 2rem;
    
    
    @media (max-width:768px ) {
        background-color: RGBA( 75, 0, 130, 1 );
        margin-top: .1rem;
        display: flex;
        flex-wrap:wrap;
        
    }

`
export const Nombres = styled.h2`
    border:2px solid black;
    position: absolute;
    background-color: rgba(14, 113, 81, .7);
    top:138px;
    right:37.5px;
    font-size: 20px;

@media (max-width:768px ) {
 
        
    }
    
`