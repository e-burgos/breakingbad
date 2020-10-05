import React, {useState, useEffect} from 'react';
import Frase from './components/Frase';
import styled from '@emotion/styled';

const Button = styled.button`
  background: -webkit-linear-gradient(top left, #007d35 0%, #007d35 40%, #0f574e 100%);
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  padding: 1rem 3rem;
  margin-top: 3rem;
  font-size: 2rem;
  border: 2px solid black;
  transition: background-size .8s ease;

  :hover{
    cursor: pointer;
    background-size: 400px;
  }
`;

const Contenedor = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
`;

const Footer = styled.footer`
    bottom: 0;
    position: fixed;
    padding: 1rem;
    color: white;
    font-weight: lighter;
    font-family: system-ui;
`;

function App() {

  //State de frase
  const [frase, guardarFrase ] = useState({}); 

  //Funcion para consumir API
  const consultarAPI = async () => {
    const api = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
    const frase = await api.json();
    guardarFrase(frase[0]);
  }

  //Cargar un frase automaticamente al inicio con useEffect
  useEffect( () => {
    consultarAPI()
  }, []); // gracias a esta dependencia vacia [], la funcion consultarAPI de carga una vez


  return (
    <Contenedor>
      <Frase
      frase={frase}
      />
      <Button
      onClick={consultarAPI}
      >
        Obtener Frase
      </Button>
      <Footer>
        Ejemplo consumo de API - Desarrollado por Esteban Burgos
      </Footer>
    </Contenedor>
  );
}

export default App;
