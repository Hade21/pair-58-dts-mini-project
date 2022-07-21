import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../config/api/api";
import { useSelector } from "react-redux";

//components
import { Header, Footer, ListMovies } from "../../components";

const DetailMovie = () => {
  let params = useParams();
  const [movie, setMovie] = useState({});
  const [youtube, setYoutube] = useState("");
  const mostPopular = useSelector((state) => state.movies.mostPopular);
  const series = useSelector((state) => state.movies.series);

  useEffect(() => {
    const detail = `/Title/k_9ftbt39h/${params}/FullActor,Posters,Ratings,Wikipedia,`;
    const linkTrailer = `/YouTubeTrailer/k_9ftbt39h/${params}`;
    api
      .get(detail)
      .then((res) => {
        setMovie(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
    api.get(linkTrailer).then((res) => {
      setYoutube(res.data.videoUrl);
    });
  });
  return (
    <>
      <Header />
      <main className="bg-hitam">
        <div className="video">
          <iframe
            src={youtube}
            frameborder="0"
            title="Movie Trailer"
            width={window.innerWidth}
          ></iframe>
        </div>
        <div className="description mb-5 font-Inter text-putih p-5">
          <h2 className="font-medium text-s3 text-left">
            {movie.originalTitle}
          </h2>
          <p className="font-light text-s6 text-left">{movie.releaseDate}</p>
          <p className="font-normal text-s4 text-justify mt-4">
            {movie.wikipedia}
          </p>
        </div>
        <ListMovies data={mostPopular} subtitle="Most Popular Movies" />
        <ListMovies data={series} subtitle="Most Popular Series" />
      </main>
      <Footer />
    </>
  );
};

export default DetailMovie;
