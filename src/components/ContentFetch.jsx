import { useState, useEffect } from 'react';

const ContentFetch = (props) => {
    const APIKEY = "6a4617d6"
    const URL = `https://www.omdbapi.com/?apikey=${APIKEY}&s=${props.film}`
    const [arrFilms, setArrFilms] = useState([]);

    useEffect(() => {
        const getFetch = async () => {
            try {
                const response = await fetch(URL);
                if (!response.ok) {
                    throw new Error("Errore nella fetch");
                }
                const data = await response.json();
                if (data.Search) {
                    setArrFilms(data.Search); // Imposta lo stato con i film ottenuti
                } else {
                    console.log("Nessun risultato trovato");
                }
            } catch (err) {
                console.error("Errore:", err);
            }
        };

        getFetch();
    }, [URL]); // Esegui l'effetto solo quando cambia la URL

    if (arrFilms.length === 0) {
        return <p>Caricamento...</p>; // Mostra un messaggio durante il caricamento
    }

    return (
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4">
            <div className="col mb-2 text-center px-1">
                <img className="img-fluid" src={arrFilms[0].Poster} alt="movie picture" />
            </div>
            <div className="col mb-2 text-center px-1">
                <img className="img-fluid" src={arrFilms[1].Poster} alt="movie picture" />
            </div>
            <div className="col mb-2 text-center px-1">
                <img className="img-fluid" src={arrFilms[2].Poster} alt="movie picture" />
            </div>
            <div className="col mb-2 text-center px-1">
                <img className="img-fluid" src={arrFilms[3].Poster} alt="movie picture" />
            </div>
            <div className="col mb-2 text-center px-1">
                <img className="img-fluid" src={arrFilms[4].Poster} alt="movie picture" />
            </div>
            <div className="col mb-2 text-center px-1">
                <img className="img-fluid" src={arrFilms[5].Poster} alt="movie picture" />
            </div>
        </div>
    )
}

export default ContentFetch