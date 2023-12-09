import styled from "styled-components";


export const Container = styled.div`

    h1 {
    margin: 3rem 0;
}

.details {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 70px;
}

.info { 
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    max-width: 50%;
    margin-left: 3rem;
}

img {
    width: 300px;
    border-radius: 1rem;
}

span {
    
    line-height: 200%;
    font-weight: bold;
    font-size: 120%;
    margin-bottom: 1rem;
}
 .release {
    opacity: 0.5;
 }


 button {
    background-color: #6654da;
    border: none;
    cursor: progress;
    border-radius: 1rem;
    color: white;
    padding: 0.8rem 2rem;
    margin-top: 1rem;
    font-size: 16px;
    transition: all 0.3s
 }

    button:hover {
        background-color: #5848c2;
    }


    .trailer {
        margin-top: 20px;
        text-align: center;
        padding: 10px;
    }
`

