import React, {Component} from 'react';
import axios from 'axios';
import Highlight from '../components/Highlight';
import Cast from '../components/Cast';

export default class MovieDetails extends Component {
    state = {
        movie: '',
        cast: []
    }
    componentDidMount() {
        const movieId = this.props.match.params.idMovie;
        this.getMovieDetails(movieId);
        this.getCast(movieId);
    }

    getCast = async (movieId) => {
        try {
            const result =  await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=f90ff1daa65420537c600c00b7e593a6`);
            this.setState({
                cast : result.data.cast
            })
        } catch (err) {
            console.log(err);   
        }
    }

    getMovieDetails = async (movieId) => {
        try {
            const result =  await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=f90ff1daa65420537c600c00b7e593a6`);
            this.setState({
                movie : result.data
            })
        } catch (err) {
            console.log(err);   
        }
    }

    render() {
        return(
            <div> 
                <Highlight movie={this.state.movie}></Highlight>
                <Cast cast={this.state.cast}></Cast>
            </div>
        );
    }
}
