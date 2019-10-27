import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const urlBase = 'https://image.tmdb.org/t/p/'
const imgSize = 'w154'

const Container = styled.div`
    >ul{
        background:rgba(66,165,245,1);
        padding-left:0;
        overflow:scroll;
        display:flex;
        margin: 0;
        align-items:strech;
    }
`

const MovieItem = styled(Link)`
    list-styled:none;
    display: inline-block;
    background:url(${props=> urlBase+imgSize+props.movie.poster_path}) no-repeat;
    background-size:cover;
    min-width: 200px;
    margin:5px;
    height: 300px;
    font-family: 'Big Shoulders Text', cursive;
    font-size:16px;
    font-weight: bold;
    color:yellow;

    >span{
        display:none;
        background:rgba(38,50,56,0.5);
    }
    &:hover{
        >span{
            display:block;
        }
    }
`

export default ({movies}) => (
    <Container>
        <ul>
        {
            movies.map(movie => (
                <MovieItem key={movie.id} to={`/details/${movie.id}`} movie={movie} >
                    <span> {movie.title} </span>
                </MovieItem>
            ))
        }
        </ul>
    </Container>
)