import { useEffect, useState } from "react";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import SurveysTable from "../../Components/SurveysTable/SurveysTable";
import { getSurveys } from "../../Redux/Actions";
import { useDispatch } from "react-redux";

function Admin() {
    const dispatch = useDispatch()
    const [surveys,setSurveys] = useState([])

    //AL RENRERIZAR CARGO ALLSURVEYS EN ESTADO LOCAL
    useEffect(() => { 
        dispatch(getSurveys()).then((data)=>{setSurveys(data.payload)});
    }, [dispatch,getSurveys]);

    const changeLocalStatus = (id) => {  //cambiara el status en el estado local para que se vea reflejado en el componente
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
  return (
    <div>
        <Header></Header>
        <SurveysTable surveys={surveys} changeLocalStatus={changeLocalStatus}></SurveysTable>
        <Footer></Footer>
    </div>
  );
}

export default Admin;