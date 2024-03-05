import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import DetailComponent from "../../Components/DetailComponent/DetailComponent";

function Detail() {

  return (
    <div>
        <Header></Header>
        <DetailComponent></DetailComponent>
        <Footer></Footer>
    </div>
  );
}

export default Detail;