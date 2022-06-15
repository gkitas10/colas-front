import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import styles from '../styles/EmployeeInterface.module.css';

const EmployeeInterface = () => {
    const [ computer , setComputer ] = useState(''); 
    let navigate = useNavigate();
    const handleSubmit = e => {
        e.preventDefault()
        navigate(`/employee-computer?computer=${computer}`)
    }

  return (
    <div className={styles.main}>
        <div className={styles.cont}>
            <div className={styles.title}>
                Interfaz de empleado
            </div>
            <div className={styles.links_row}>
                <div className={styles.links_cont}>
                    <Link to='/public-screen' className={styles.link}>Pantalla publica</Link>
                    <Link to='/create-ticket' className={styles.link+ ' ' + styles.link_gray}><a>Crear Tickets</a></Link>
                </div>
            </div>
            <div className={styles.form_cont}>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <input name="computer" type="number" className={styles.input_num} placeholder="Escritorio" onChange={e => setComputer(e.target.value)}/>
                    <button className={styles.btn}>
                        Ingresar
                    </button>
                </form>
            </div>
            <div>
            { alert }
            </div>
        </div>
        
    </div>
)
}

export default EmployeeInterface;