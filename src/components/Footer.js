import React from 'react';
import styled from 'styled-components';

const imgURL = 'https://www.themoviedb.org/assets/2/v4/logos/408x161-powered-by-rectangle-green-bb4301c10ddc749b4e79463811a68afebeae66ef43d17bcfd8ff0e60ded7ce99.png'
const Footer = styled.div`
    padding: 20px;
    background:rgba(8,28,36,1);
`

export default () => (
    <Footer>
        <img src={imgURL} alt='TMDb' height='50'/>
    </Footer>
)