<<<<<<< HEAD
function Details() {
    return (
        <div>
            <h1>Detalhes</h1>
=======
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { APIKEY } from "../config/key";
import { Titulo } from "./Style";




function Details() {
    const img_path = 'https://image.tmdb.org/t/p/w500/';

    const {id} = useParams();
    console.log(id);

    const [movie, setMovie] = useState([]);

    useEffect(() => {
        fetch(`
            https://api.themoviedb.org/3/movie/${id}?api_key=${APIKEY}&language=pt-BR&page=1`)
            .then(response => response.json())
            .then(data => {
                console.log(data);

                const movie = {
                    id,
                    title: data.title,
                    overview: data.overview,
                    realeseDate: data.realese_date,
                    poster_path: `${img_path}${data.poster_path}`
                }
                 setMovie(movie)
            })
    }, [id])

    return (
        <div>
            <Titulo>{movie.title}</Titulo>
            <span> Sinopse: {movie.overview}</span>
            <span>Data de lançamento: {movie.realeseDate}</span>
            <img src={`${img_path}${movie.poster_path}`} alt={movie.title} />
            <button>Retornar ao Catálogo</button>
>>>>>>> parent of 140eca9 (estilização)
        </div>
    )
}
export default Details;