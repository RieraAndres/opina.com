import { useEffect, useState } from "react";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import SurveysTable from "../../Components/SurveysTable/SurveysTable";
import { getDataBase, getSurveys } from "../../Redux/Actions";
import { useDispatch, useSelector } from "react-redux";
import DataBaseTable from "../../Components/DataBaseTable/DataBaseTable";
import styles from "./Admin.module.css"

function Admin() {
    const dispatch = useDispatch();
    const [surveys, setSurveys] = useState([]);
    const [showSurveys, setShowSurveys] = useState(true);
    const dataBase = useSelector((state) => state.dataBase);

    useEffect(() => { 
        dispatch(getSurveys()).then((data) => { setSurveys(data.payload); });
        dispatch(getDataBase());
    }, [dispatch]);

    const changeLocalStatus = (id) => {  //cambia el status en el estado local para que se vea reflejado en el componente
        const updatedSurveys = surveys.map(survey => {
            if (survey.id === id) {
                return {
                    ...survey,
                    status: !survey.status
                };
            }
            return survey;
        });
        setSurveys(updatedSurveys);
    };

    const toggleView = () => {
        setShowSurveys(prevShowSurveys => !prevShowSurveys);
    };

    return (
        <div>
            <Header />
            {showSurveys ? (
                <SurveysTable surveys={surveys} changeLocalStatus={changeLocalStatus} />
                ) : (
                    <DataBaseTable dataBase={dataBase} />
                    )}
            <button className={styles.Allbutton} onClick={toggleView}><span className={styles.span}>{showSurveys ? "Mostrar Base de Datos" : "Mostrar Encuestas"}</span></button>
            <Footer />
        </div>
    );
}

export default Admin;
