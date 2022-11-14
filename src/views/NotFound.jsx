import { Link } from 'react-router-dom'

const NotFound = ()=> {
    return (
        <div className="notfound">
           <h2>Ooops! </h2>
           <p>Algo salio mal, la pagina que buscas no existe.</p>
           <img src="https://media.tenor.com/bSLB5jGlV7EAAAAC/gasp-shock.gif" alt="psyduck not found" />
            <span>404!</span>
            <Link to="/"><button className='btn-backindex'>Volver al home</button></Link>
            
            
           
        </div>
    )
}

export default NotFound