import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setInTheaters,
  setMostPopular,
  setSeries,
  setTopTen,
} from "../../app/moviesReducer/moviesSlices";
import {
  Footer,
  Header,
  Carousel,
  ListMovies,
  TopTenList,
} from "../../components";
import { api } from "../../config/api/api";

const Home = () => {
  const dispatch = useDispatch();
  const mostPopular = useSelector((state) => state.movies.mostPopular);
  const series = useSelector((state) => state.movies.series);
  const inTheaters = useSelector((state) => state.movies.inTheaters);
  const topTen = useSelector((state) => state.movies.topTen);

  useEffect(() => {
    async function fetchData() {
      try {
        const movieData = await api.get("/MostPopularMovies/k_9ftbt39h");
        const seriesData = await api.get("/MostPopularTVs/k_9ftbt39h");
        const inTheatersData = await api.get("/InTheaters/k_9ftbt39h");
        const topTenData = await api.get("/Top250Movies/k_9ftbt39h");

        if (movieData) {
          dispatch(setMostPopular(movieData.data.items.slice(0, 10)));
        }
        if (seriesData) {
          dispatch(setSeries(movieData.data.items.slice(0, 15)));
        }
        if (inTheatersData) {
          dispatch(setInTheaters(inTheatersData.data.items.slice(0, 15)));
        }
        if (topTenData) {
          dispatch(setTopTen(topTenData.data.items.slice(0, 10)));
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
        <ListMovies
          width="max-w-[285px]"
          height="max-h-[160px]"
          subtitle="Series Terpopuler"
          data={series}
        />
        <TopTenList data={topTen} subtitle="Top Ten List" />
        <ListMovies
          width="max-w-[285px]"
          height="max-h-[160px]"
          subtitle="In Theaters"
          data={inTheaters}
        />
      </div>
      <Footer />
    </main>
  );
};

export default Home;
