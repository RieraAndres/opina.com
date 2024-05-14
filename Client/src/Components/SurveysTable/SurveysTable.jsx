import React from "react";
import { NavLink } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { changeSurveyStatus } from "../../Redux/Actions";
import styles from "./SurveysTable.module.css";

function SurveysTable({surveys,changeLocalStatus}) {
    const dispatch = useDispatch();

    const handleUpdateStatus = (id) => {
        // Actualiza el estado local de las encuestas
        dispatch(changeSurveyStatus(id)); //cambio en la base de datos
        changeLocalStatus(id) //cambio en el estado local
    };

    return (
        <div className={styles.tableContainer}>
            <p className={styles.title}>ESTAS SON TUS ENCUESTAS</p>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th className={styles.celda}>ID</th>
                        <th className={styles.celda}>Título</th>
                        <th className={styles.celda}>Estado</th>
                        <th className={styles.celda}>Respuestas</th>
                        <th className={styles.celda}>Cambiar Estado</th>
                        <th className={styles.celda}>Detalle</th>
                    </tr>
                </thead>
                <tbody>
                    {surveys.map(survey => (
                        <tr key={survey.id}>
                            <td className={styles.celda}>{survey.id}</td>
                            <td className={styles.celda}>{survey.title}</td>
                            <td className={styles.celda}>{survey.status ? "Activa" : "Inactiva"}</td>
                            <td className={styles.celda}>{survey.responseCount}</td>
                            <td className={styles.celda}><button className={styles.button} onClick={() => handleUpdateStatus(survey.id)}>Cambiar</button></td>
                            <td className={styles.celda}><NavLink to={`/admin/${survey.id}`}><button className={styles.button}>Ver</button></NavLink></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default SurveysTable;
