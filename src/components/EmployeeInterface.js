import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const EmployeeInterface = () => {
    const [ computer , setComputer ] = useState(''); 
    let navigate = useNavigate();
    const handleSubmit = e => {
        e.preventDefault()
        navigate(`/employee-computer?computer=${computer}`)
    }

  return (
    <div>
        <div>
            <div className="">
                <Link to='/public-screen'>Pantalla publica</Link>
                <Link to='/create-ticket'>Crear Tickets</Link>
            </div>
        </div>
        <div>
            <form onSubmit={handleSubmit}>
                <input name="computer" type="number" className="form-control" placeholder="Escritorio" autoFocus required onChange={e => setComputer(e.target.value)}/>
                <button>
                    Ingresar
                </button>
            </form>
        </div>
        <div>
           { alert }
        </div>
    </div>
)
}

export default EmployeeInterface;