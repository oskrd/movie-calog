import React from 'react';
import styled from 'styled-components';

const urlBase = 'https://image.tmdb.org/t/p/';
const imgSize = 'w185';

const Container = styled.div`
    border: 2px solid gold;
    margin: 2px;
`

const Name = styled.span`
    background: rgba(0,0,0,0.5);
    color: white;
`

export default ({ actor }) => {
    return (
        <Container>
            <img src={actor.profile_path ? urlBase + imgSize + actor.profile_path : 'https://dummyimage.com/185x278/949494/fff.jpg&text=no+image'} alt='' />
            <Name>{actor.name}</Name>
        </Container>
    );
}
