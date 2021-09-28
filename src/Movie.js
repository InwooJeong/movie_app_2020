import React from "react";
import PropTypes from "prop-types";
import './Movie.css';

function Movie({id,title,year,summary,poster}){
    return(
      <div class="movie">
        <img src={poster} alt={title} title={title}/>
        <div class="movie_data">
            <h3 class="movie__title">{title}</h3>
            <h5 class="movie__year">{year}</h5>
            <p class="movie__summary">{summary}</p>
        </div>
      </div>  
    );
}

Movie.propTypes = {
    year: PropTypes.number.isRequired, 
    title: PropTypes.string.isRequired, 
    summary: PropTypes.string.isRequired, 
    poster: PropTypes.string.isRequired,
};

export default Movie;