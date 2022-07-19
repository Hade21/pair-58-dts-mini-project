import React from "react";
import { Footer, Header, Carousel, ListMovies } from "../../components";

const Home = () => {
  return (
    <main className="bg-hitam">
      <Header />
      <Carousel />
      <div className="list pl-14 flex flex-col gap-11 mt-11 mb-8">
        <ListMovies
          width="max-w-[285px]"
          height="max-h-[160px]"
          subtitle="Popular"
          progressBar={true}
        />
        <ListMovies
          width="max-w-[285px]"
          height="max-h-[160px]"
          subtitle="Irwan, Continue Watching"
          progressBar={true}
        />
        <ListMovies
          width="max-w-[285px]"
          height="max-h-[160px]"
          subtitle="On the agenda"
          progressBar={true}
        />
        <ListMovies
          width="max-w-[285px]"
          height="max-h-[575px]"
          subtitle="Original"
          progressBar={true}
        />
      </div>
      <Footer />
    </main>
  );
};

export default Home;
