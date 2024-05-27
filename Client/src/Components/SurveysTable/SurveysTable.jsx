import React, { useState } from "react";
import { NavLink } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { changeSurveyStatus, deleteSurvey } from "../../Redux/Actions";
import styles from "./SurveysTable.module.css";


function SurveysTable({surveys,changeLocalStatus}) {
    const dispatch = useDispatch();
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [surveyId , setSurveyId] = useState("")

    console.log(surveyId);
    const handleUpdateStatus = (id) => {
        // Actualiza el estado local de las encuestas
        dispatch(changeSurveyStatus(id)); //cambio en la base de datos
        changeLocalStatus(id) //cambio en el estado local
    };

    const handleDelete = (surveyId) => {
        setShowConfirmation(prevShowConfirmation => !prevShowConfirmation);
        setSurveyId(surveyId)
    };

    const handleCancelDelete = () => {
        setShowConfirmation(false);
    };

    const handleConfirmDelete = (e) => {
        e.preventDefault()
        if(surveyId){
            dispatch(deleteSurvey(surveyId))
        }
        setShowConfirmation(false);
        window.location.reload()

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
                            <th className={styles.celda}>Eliminar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {surveys.map(survey => (
                            <tr key={survey.id}>
                                <td className={styles.celda}>{survey.id}</td>
                                <td className={styles.celda}>{survey.title}</td>
                                <td className={styles.celda} style={{color: "red" , fontWeight:"bold"}}>{survey.status ? "Activa" : "Inactiva"}</td>
                                <td className={styles.celda}>{survey.responseCount}</td>
                                <td className={styles.celda}><button className={styles.button} onClick={() => handleUpdateStatus(survey.id)}>Cambiar</button></td>
                                <td className={styles.celda}><NavLink to={`/admin/${survey.id}`}><button className={styles.button}>Ver</button></NavLink></td>
                                <td className={styles.celda}><button className={styles.deleteButton} onClick={() => handleDelete(survey.id)}><svg className={styles.deleteSvgIcon} viewBox="0 0 448 512"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path></svg></button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {showConfirmation && (
                <div className={styles.confirmationOverlay}>
                    <div className={styles.confirmationBox}>
                        <p>¿Estás seguro que deseas eliminar esta encuesta?</p>
                        <div>
                            <button className={styles.button} onClick={handleConfirmDelete}>Eliminar</button>
                            <button className={styles.button} onClick={handleCancelDelete}>Cancelar</button>
                        </div>
                    </div>
                </div>
            )}
            </div>
    );
}

export default SurveysTable;
