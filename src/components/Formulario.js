import React from 'react';
import styled from '@emotion/styled';

const Boton = styled.input`
    margin-top: 20px;
    font-weight: bold;
    font-size: 20px;
    padding: 10px;
    background-color: #66A2FE;
    border: none;
    width: 100%;
    border-radius: 10px;
    color: #FFF;
    transition: background-color .3s ease;
    text-transform: capitalize;

    &:hover{
        background-color: #326AC0;
        cursor: pointer;
    }
`;


const Formulario = () => {
    return ( 
        <form>
            
            <Boton
                type='submit'
                value='Calcular'
            />

        </form>
     );
}
 
export default Formulario;