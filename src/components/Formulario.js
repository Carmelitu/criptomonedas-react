import React from 'react';
import styled from '@emotion/styled';
import useMoneda from '../hooks/useMoneda';

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

    const monedas = [
        {codigo: 'USD', nombre: 'Dolar Estadounidense'},
        {codigo: 'ARS', nombre: 'Peso Argentino'},
        {codigo: 'EUR', nombre: 'Euro'},
        {codigo: 'GBP', nombre: 'Libra Esterlina'}
    ]

    const [moneda, SelectMonedas] = useMoneda('Elige tu moneda', '', monedas);

    return ( 
        <form>
            <SelectMonedas />
            <Boton
                type='submit'
                value='Calcular'
            />

        </form>
     );
}
 
export default Formulario;