import React from 'react';
import styled from 'styled-components';
import TitleSection from './TitleSection';
import Actor from './Actor';

const Container = styled.div`
    display: flex;
    overflow:scroll;
`

export default ({cast}) => {
    if(cast) {
        return (
            <div>
                <TitleSection>Cast:</TitleSection>
                <Container>
                {
                        cast.map(actor => (
                            <Actor key={actor.cast_id} actor={actor}/>
                        ))
                    }
                </Container>
            </div>
        );
    } else {
        return (
            <div>
                Cargando
            </div>
        );
    }
}