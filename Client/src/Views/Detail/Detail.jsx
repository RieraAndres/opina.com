import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import DetailComponent from "../../Components/DetailComponent/DetailComponent";
import { getDetail } from "../../Redux/Actions";

function Detail() {
  const dispatch = useDispatch()
  const { id } = useParams();

  useEffect(() => { 
    dispatch(getDetail(id));
}, [dispatch]);

const survey = useSelector((state)=>state.detail)

console.log(survey);
  return (
    <div>
        <Header></Header>
        <DetailComponent survey={survey}></DetailComponent>
        <Footer></Footer>
    </div>
  );
}

export default Detail;