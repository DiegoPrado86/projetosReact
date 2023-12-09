import styled from 'styled-components';

export const Container = styled.div`
h2 {
    text-align: center;
    margin: 4rem 0;
}


img {
    width: 180px;
    border-radius: 1rem;
    margin-bottom: 2rem;
    cursor: progress;
}

span {
    font-weight: bold;
<<<<<<< HEAD
    font-size: 120%;
=======
    font-size: 100%;
    text-align: center;
>>>>>>> parent of 140eca9 (estilização)
}

a {
    transition: all 0.3s;

    &:hover {
        transform: scale(1.1);
    }
}

`

export const MovieList = styled.ul`

    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    column-gap: 3rem;
    row-gap: 4rem;

`

export const Movie = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
`