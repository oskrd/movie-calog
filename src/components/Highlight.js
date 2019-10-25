import React from 'react';
import styled from 'styled-components'

const Begin = styled.div`
    background : rgba(55,71,79,1);
    color: white;
    font-family: 'Roboto', sans-serif;
`

export default ({movie}) => (
    <Begin>
        {movie.title}
    </Begin>
)