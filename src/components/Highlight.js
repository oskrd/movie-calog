import React from 'react';
import styled from 'styled-components'

const urlBase = 'https://image.tmdb.org/t/p/'
const imgSize = 'w780'

const Begin = styled.div`
    background: url(${props => urlBase + imgSize + props.movie.backdrop_path}) no-repeat;
    background-size: cover;
    height: 600px;
    color: white;
    font-size: 22px;
    font-family: 'Roboto', sans-serif;
`

const MovieInfo = styled.div`
    position: relative;
    color:rgba(205,220,57,1);
`

const MovieInfoContent = styled.div`
    position: absolute;
    top: 150px;
    left:50px;
    background: rgba(38,50,56,0.5);
    padding: 10px;
`

const MovieInfoTitle = styled.h1`
    color:rgba(255,179,0,1);
    font-family: 'Rock Salt', cursive;
`

const MovieInfoOverview = styled.p`
    font-size:14px;
    max-width:350px;
`

const AverageRate = styled.span`
    color:rgba(100,221,23,1);
    font-family: 'Cinzel', serif;
`
const Loading = styled.div`
    text-align: center;
    font-size: 22px;
`

export default ({ movie }) => {
    if (movie) {
        return (
            <Begin movie={movie}>
                <MovieInfo>
                    <MovieInfoContent>
                        <MovieInfoTitle>{movie.title}</MovieInfoTitle>
                        <MovieInfoOverview>{movie.overview}</MovieInfoOverview>
                        <AverageRate>{movie.vote_average}/10</AverageRate>
                    </MovieInfoContent>
                </MovieInfo>
            </Begin>
        );
    } else {
        return(
            <Loading>Loading...</Loading>
        );
    }
}