import React from 'react';

const MovieList = (props) => {
	return (
		<> 
			{props.movies.map((movie, index) => (
				<div className='movies'> 
					<img className='image-container poster-style' src={movie.Poster === "N/A" ? "https://static.amazon.jobs/teams/53/thumbnails/IMDb_Jobs_Header_Mobile.jpg?1501027253" : movie.Poster} alt={movie.Title}></img>
						<h3 className='movie-title-style'>{movie.Title}</h3>
							<div className='movie-info'>
								<tr className='year-style'>{movie.Year}</tr>
								<tr><button type="button" className="btn btn-outline-secondary">Details</button></tr>
							</div>
				</div>
			))}
		</>
	);
};

export default MovieList;

/*tr tag defines row for movie year and button*/
/*ternary operation to manually locate image when src returns "N/A" string*/