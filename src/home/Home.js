import { Container } from "./Style";
import { MovieList } from "./Style";
import { Movie } from "./Style";
import { APIKEY } from "../config/key";
import { useState, useEffect } from "react";

const Home = () => {

    const [movies, setMovies] = useState([])

    useEffect(() => {
            fetch(`https://api.themoviedb.org/3/movie/popular?api_key=2ca898872acc8214d15saa40e33600aa0&language=en-US&page=1`)
    },[])
    

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
        <Container>
            <h2>
                Catálogo
            </h2>
            <MovieList>

                {
                    movies.map(movie => {
                        return (
                            <Movie>
                                <a href="https://www.google.com">
                                    <img src={movie.image_url} alt={movie.title} />
                                </a>
                                <span>{movie.title}</span>
                            </Movie>
                        )
                    })
                }
            </MovieList>
        </Container>
    )
}

export default Home;