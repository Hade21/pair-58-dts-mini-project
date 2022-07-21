import React from "react";
import { useParams } from "react-router-dom";

//components
import { Header, Footer } from "../../components";

const DetailMovie = () => {
  let params = useParams();
  console.log(params);
  return (
    <>
      <Header />
      <main></main>
      <Footer />
    </>
  );
};

export default DetailMovie;
