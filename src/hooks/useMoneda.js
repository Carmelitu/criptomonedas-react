import React, {Fragment, useState} from 'react';

const useMoneda = (label, monedaInicial, opciones) => {

    // State del custom hook
    const [state, setState] = useState(monedaInicial);

    const Seleccionar = () => (
        <Fragment>
            <label>{label}</label>
            <select>
                <option value=''>-- Seleccione --</option>
                {opciones.map(opcion => (
                    <option key={opcion.codigo} value={opcion.codigo}>{opcion.nombre}</option>
                ))}
            </select>
        </Fragment>
    );

    // Retornar State y funcion que modifica el state
    return [state, Seleccionar, setState];
}

export default useMoneda;