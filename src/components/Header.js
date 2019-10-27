import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    position:fixed;
    width: 100%;
    height: 75px;
    background:rgba(0,0,0,0.5);
    color: white;
    >h3{
        margin-left:20px;
    }
`

export default () => (
    <Container>
        <h3>Movie-Catalog</h3>
    </Container>
)