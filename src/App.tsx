import { useState } from "react";
import Header from "./components/Header";
import NewsTitle from "./components/NewsTitle";
import useFetch from "./hooks/useFetch";
import Spinner from "./components/Spinner";

const API_BACK: string = import.meta.env.VITE_API_COMERCIO;

const App = () => {
  const [quantity, setQuantity] = useState<number>(5);

  const { notes, loading, error } = useFetch(API_BACK);

  const handleClickMore = () => {
    const totalQuantity = notes?.length;
    if (totalQuantity) {
      if (quantity === 5) {
        setQuantity(totalQuantity);
      } else {
        setQuantity(5);
      }
    }
  };

  return (
    <>
      <Header />
      <main className="container">
        <article className="card">
          <h2 className="card__title">Últimas noticias</h2>
          <ul className="card_news">
            {error ? (
              <i className="bx bx-error-circle">Error</i>
            ) : loading ? (
              <Spinner />
            ) : (
              notes
                ?.slice(0, quantity)
                ?.map((note) => <NewsTitle key={note.id} note={note} />)
            )}
          </ul>
          <button className="button" onClick={handleClickMore}>
            {quantity === 5 ? (
              <span>
                Ver más <i className="bx bxs-chevron-down"></i>
              </span>
            ) : (
              <span>
                Ver menos <i className="bx bxs-chevron-up"></i>
              </span>
            )}
          </button>
        </article>
      </main>
    </>
  );
};

export default App;
