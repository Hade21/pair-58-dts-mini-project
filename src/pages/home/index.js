import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setComingSoon,
  setMostPopular,
  setSeries,
} from "../../app/moviesReducer/moviesSlices";
import { Footer, Header, Carousel, ListMovies } from "../../components";
import { api } from "../../config/api/api";

const Home = () => {
  const dispatch = useDispatch();
  const mostPopular = useSelector((state) => state.movies.mostPopular);
  const series = useSelector((state) => state.movies.series);
  const comingSoon = useSelector((state) => state.movies.comingSoon);
  console.log(series);

  useEffect(() => {
    async function fetchData() {
      try {
        const movieData = await api.get("/MostPopularMovies/k_9ftbt39h");
        const seriesData = await api.get("/MostPopularTVs/k_9ftbt39h");
        const comingSoonData = await api.get("/ComingSoon/k_9ftbt39h");
        if (movieData) {
          console.log(movieData);
          dispatch(setMostPopular(movieData.data.items.slice(0, 10)));
        }
        if (seriesData) {
          dispatch(setSeries(movieData.data.items.slice(0, 15)));
        }
        if (seriesData) {
          dispatch(setComingSoon(comingSoonData.data.items.slice(0, 15)));
        }
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, []);

  return (
    <main className="bg-hitam">
      <Header />
      <Carousel data={mostPopular} />
      <div className="list pl-14 flex flex-col gap-11 mt-11 mb-8">
        {console.log(series)}
        <ListMovies
          width="max-w-[285px]"
          height="max-h-[160px]"
          subtitle="Series Terpopuler"
          data={series}
        />
        <ListMovies
          width="max-w-[285px]"
          height="max-h-[160px]"
          subtitle="Coming Soon"
          data={comingSoon}
        />
      </div>
      <Footer />
    </main>
  );
};

export default Home;
