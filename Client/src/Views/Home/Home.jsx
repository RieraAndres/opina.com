import Cards from "../../Components/Cards/Cards";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header"
import { useEffect } from "react";
import { useDispatch , useSelector } from "react-redux";
import { getSurveys } from "../../Redux/Actions";
import OldCards from "../../Components/OldCards/OldCards";


function Home() {
  const dispatch = useDispatch();

  useEffect(() => { 
    dispatch(getSurveys());
}, [dispatch]);

const surveys = useSelector((state) => state.allSurveys.filter(survey => survey.status === true));
const OldSurveys = useSelector((state)=> state.allSurveys.filter(survey => survey.status === false))

  return (
    <div>
      <Header></Header>
      <Cards surveys={surveys}></Cards>
      <OldCards OldSurveys={OldSurveys}></OldCards>
      <Footer></Footer>
    </div>
  );
}

export default Home;