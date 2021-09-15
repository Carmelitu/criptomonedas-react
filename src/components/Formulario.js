import React, {useEffect, useState} from 'react';
import styled from '@emotion/styled';
import Axios from 'axios';

import useMoneda from '../hooks/useMoneda';
import useCriptomoneda from '../hooks/useCriptomoneda';
import Error from './Error';

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


const Formulario = ({setMoneda, setCripto}) => {

    const [listadoCripto, setCriptomonedas] = useState([]);

    const monedas = [
        {codigo: 'USD', nombre: 'Dolar Estadounidense'},
        {codigo: 'ARS', nombre: 'Peso Argentino'},
        {codigo: 'EUR', nombre: 'Euro'},
        {codigo: 'GBP', nombre: 'Libra Esterlina'}
    ]

    // Custom Hooks
    const [moneda, SelectMonedas] = useMoneda('Elige tu moneda', '', monedas);
    const [criptomoneda, SelectCripto] = useCriptomoneda('Elige tu criptomoneda', '', listadoCripto);
    const [error, setError] = useState(false);

    // Llamado a la API
    useEffect(() => {
        const consultarAPI = async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';

            const res = await Axios.get(url);
            setCriptomonedas(res.data.Data);
        }
        consultarAPI();
    }, [] );

    const cotizarMoneda = e => {
        e.preventDefault();

        // Validar campos
        if (moneda === '' || criptomoneda === ''){
            setError(true);
            return;
        }

        setError(false);
        setMoneda(moneda);
        setCripto(criptomoneda);


    }

    return ( 
        <form
            onSubmit={cotizarMoneda}
        >
            {error ? <Error mensaje="Todos los campos son obligatorios" /> : null}
            <SelectMonedas />
            <SelectCripto />
            <Boton
                type='submit'
                value='Calcular'
            />

        </form>
     );
}
 
export default Formulario;