import React, {useState, useEffect} from 'react';
import styled from '@emotion/styled';
import imagen from './cryptomonedas.png';
import Formulario from './components/Formulario';
import Spinner from './components/Spinner'
import Cotizacion from './components/Cotizacion'
import axios from 'axios';


const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  @media (min-width: 992px){
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;

const Imagen = styled.img`
  max-width: 100%;
  margin-top: 5rem;
`;

const Heading = styled.h1`
  font-family: 'Bebas Neue', cursive;
  color: #FFF;
  text-align: left;
  font-weight: 700;
  font-size: 50px;
  margin-bottom: 50px;
  margin-top: 80px;

  &::after{
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66A2FE;
    display: block;
  }
`;


function App() {

  const [moneda, setMoneda] = useState('');
  const [cripto, setCripto] = useState('');
  const [resultado, setResultado] = useState({});
  const [cargando, setCargando] = useState(false);

  useEffect( () => {

      const cotizarCriptomoneda = async () => {
          // evitamos la ejecución la primera vez
          if(moneda === '') return;

          // consultar la api para obtener la cotizacion
          const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cripto}&tsyms=${moneda}`;

          const resultado = await axios.get(url);

          // mostrar el spinner
          setCargando(true);

          // ocultar el spinner y mostrar el resultado
          setTimeout(() => {

            // cambiar el estado de cargando
            setCargando(false);

            // guardar cotizacion
            setResultado(resultado.data.DISPLAY[cripto][moneda] );
          }, 3000);

          
      }
      cotizarCriptomoneda();
  }, [moneda, cripto]);

  // Mostrar spinner o resultado
  const componente = (cargando) ? <Spinner /> :  <Cotizacion  resultado={resultado} />


  return (
    <Contenedor>
      <div>
        <Imagen
          src={imagen}
          alt='imagen cripto'
        />
      </div>
      <div>
        <Heading>Cotiza Criptomonedas al instante</Heading>
        <Formulario
          setMoneda={setMoneda}
          setCripto={setCripto}
        />

        {componente}


      </div>
    </Contenedor>
  );
}

export default App;
