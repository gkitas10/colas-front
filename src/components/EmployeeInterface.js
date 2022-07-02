import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import styles from '../styles/EmployeeInterface.module.css';
import { useTranslation } from 'react-i18next';

const EmployeeInterface = () => {
    const { t, i18n }= useTranslation();
    const [ language, setLanguage ] = useState('');
    const [ computer , setComputer ] = useState(''); 
    let navigate = useNavigate();

    const handleChange = e => {
        setLanguage(e.target.value);
        i18n.changeLanguage(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault()
        navigate(`/employee-computer?computer=${computer}`)
    }

  return (
    <div className={styles.main}>
        <div className={styles.cont}>
            <select onChange={handleChange} className={styles.select}>
                <option>Language</option>
                <option value='en'>English</option>
                <option value='es'>Español</option>
            </select>
            <div className={styles.title}>
                { t("employeeinterface.title")}
            </div>
            <div className={styles.links_row}>
                <div className={styles.links_cont}>
                    <Link to='/public-screen' className={styles.link}>{ t("employeeinterface.publicscreen")}</Link>
                    <Link to='/create-ticket' className={styles.link+ ' ' + styles.link_gray}>{ t("employeeinterface.createticketsscreen")}</Link>
                </div>
            </div>
            <div className={styles.form_cont}>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <input name="computer" type="number" className={styles.input_num} placeholder={ t("employeeinterface.placeholder")} onChange={e => setComputer(e.target.value)}/>
                    <button className={styles.btn}>
                    { t("employeeinterface.logonbtn")}
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