// import logo from './logo.svg';
import './App.css';
import Testimonio from './componentes/Testimonio';
import {datosTestimonios} from './componentes/datosTestimonios';

function App() {
  return (
    <div className="App">
      <div className="contenedor-principal">      
        <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
        {datosTestimonios.map((testimonio, index) => (
        <Testimonio key={index} {...testimonio} />
      ))}
      </div>
    </div>
  );
}

export default App;
