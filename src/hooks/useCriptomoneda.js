import React, {Fragment, useState} from 'react';
import styled from '@emotion/styled';

const Label = styled.label`
    font-family: 'Bebas Neue', cursive;
    color: #FFF;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 2rem;
    margin-top: 2.4rem;
    display: block;
`;

const Select = styled.select`
    width: 100%;
    display: block;
    padding: 1rem;
    -webkit-appearance: none;
    border-radius: 10px;
    border: none;
    font-size: 1rem;
`;

const useCriptomoneda = (label, monedaInicial, opciones) => {

    // State del custom hook
    const [state, setState] = useState(monedaInicial);

    const SelectCripto = () => (
        <Fragment>
            <Label>{label}</Label>
            <Select
                onChange={ e => setState(e.target.value)}
            >
                <option value=''>-- Seleccione --</option>
                {/* {opciones.map(opcion => (
                    <option key={opcion.codigo} value={opcion.codigo}>{opcion.nombre}</option>
                ))} */}
            </Select>
        </Fragment>
    );

    // Retornar State y funcion que modifica el state
    return [state, SelectCripto, setState];
}

export default useCriptomoneda;