import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import ResponsesTable from "../../Components/ResponsesTable/ResponsesTable";
import { useEffect, useState } from "react";
import { clearResponses, getSurveyResponses } from "../../Redux/Actions";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function AdminDetail() {
  const { surveyId } = useParams();
  const dispatch = useDispatch()
  const [responses,setResponses] = useState([])

    useEffect(() => {
        dispatch(getSurveyResponses(surveyId)).then((data)=>{setResponses(data.payload)});
        return () => {
            dispatch(clearResponses());//al desmontar limpio el estado
          };
      }, [dispatch,getSurveyResponses,setResponses]);

  return (
    <div>
      <Header></Header>
      <ResponsesTable responses={responses}></ResponsesTable>
      <Footer></Footer>
    </div>
  );
}

export default AdminDetail;