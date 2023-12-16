import { Container } from "./Style";
import { MovieList } from "./Style";
import { Movie } from "./Style";
import { APIKEY } from "../config/key";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


const Home = () => {
    const img_path = 'https://image.tmdb.org/t/p/w500/';

    const [movies, setMovies] = useState([])

    useEffect(() => {
        fetch(`
            https://api.themoviedb.org/3/movie/popular?api_key=${APIKEY}&language=pt-BR&page=1`)
            .then(response => response.json())
            .then(data => {
                console.log(data.results);
                setMovies(data.results)
            })
    }, [])


    // const movies = [
    //     {
    //         title: "Supernatural",
    //         image_url: "https://img.elo7.com.br/product/zoom/1D05C86/poster-supernatural-tamanho-90x-0-cm-lo008-geek.jpg"
    //     },

    //     {
    //         title: "Supernatural 2",
    //         image_url: "https://img.elo7.com.br/product/zoom/1D05C86/poster-supernatural-tamanho-90x-0-cm-lo008-geek.jpg"
    //     },

    //     {
    //         title: "Supernatural 3",
    //         image_url: "https://img.elo7.com.br/product/zoom/1D05C86/poster-supernatural-tamanho-90x-0-cm-lo008-geek.jpg"
    //     }
    // ]


    return (
        <div>
            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://s2-techtudo.glbimg.com/dcGfaHcvvjRT3YTs6irVkDLJJAk=/0x0:1200x675/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/5/E/K2G5RAR1G2RkYqLxfRyQ/capa11.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://s2-techtudo.glbimg.com/dcGfaHcvvjRT3YTs6irVkDLJJAk=/0x0:1200x675/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/5/E/K2G5RAR1G2RkYqLxfRyQ/capa11.jpg" className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://s2-techtudo.glbimg.com/dcGfaHcvvjRT3YTs6irVkDLJJAk=/0x0:1200x675/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/5/E/K2G5RAR1G2RkYqLxfRyQ/capa11.jpg" className="d-block w-100" alt="..."/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>


            <Container>
                <h2>
                    Catálogo
                </h2>
                <MovieList>

                    {
                        movies.map(movie => {
                            return (
                                <Movie key={movie.id}>
                                    <Link to={`/details/${movie.id}`}>
                                        <img src={`${img_path}${movie.poster_path}`} alt={movie.title} />
                                    </Link>
                                    <span>{movie.title}</span>
                                </Movie>
                            )
                        })
                    }
                </MovieList>
            </Container>
        </div>
    )
}

export default Home;