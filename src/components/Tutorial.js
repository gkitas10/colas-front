import React from 'react'
import publicScreenImg from '../assets/tutorial/publicscreen.png';
import generateTicketImg from '../assets/tutorial/generateticket.png';
import employeeInterfaceImg from '../assets/tutorial/employeeinterface.png';
import employeeComputerImg from '../assets/tutorial/employeecomputer.png';
import { useTranslation } from 'react-i18next';
import styles from '../styles/Tutorial.module.css';

const Tutorial = () => {
  const { t } = useTranslation()

  return (
    <div className={styles.main}>
        <div className={styles.step}>{t("tutorial.step1")}</div>
        <img src={publicScreenImg} className={styles.img}/>
        <div className={styles.step}>{t("tutorial.step2")}</div>
        <img src={generateTicketImg} className={styles.img}/>
        <div className={styles.step}>{t("tutorial.step3")}</div>
        <img src={employeeInterfaceImg} className={styles.img + ' ' + styles.border_img}/>
        <div className={styles.step}>{t("tutorial.step4")}</div>
        <img src={employeeComputerImg} className={styles.img}/>
    </div>
  )
}

export default Tutorial