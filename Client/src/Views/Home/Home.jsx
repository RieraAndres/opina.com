import Cards from "../../Components/Cards/Cards";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header"
import { useEffect } from "react";
import { useDispatch , useSelector } from "react-redux";
import { getSurveys } from "../../Redux/Actions";


function Home() {
  const dispatch = useDispatch();

  useEffect(() => { 
    dispatch(getSurveys());
}, []);

  const surveys = useSelector((state)=>state.allSurveys)
  return (
    <div>
      <Header></Header>
      <Cards surveys={surveys}></Cards>
      <Footer></Footer>
    </div>
  );
}

export default Home;