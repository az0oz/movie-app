import React from "react";
import { IMAGE_BASE_URL, POSTER_SIZE } from "../../../config";
import MovieThumb from "../MovieThumb/MovieThumb";
import { StyledMovieInfo } from "../../styles/StyledMovieInfo";
import NoImage from "../../../assets/no-image.png";

export const MovieInfo = ({
  title,
  plot,
  rating,
  directors,
  actors,
  backdrop,
  poster,
}) => {

  return (
    <StyledMovieInfo backdrop={backdrop}>
      <div className="movieInfo-content">
        <div className="movieInfo-thumb">
          <MovieThumb
            image={
              poster ? `${IMAGE_BASE_URL}${POSTER_SIZE}${poster}` : `${NoImage}`
            }
            clickable={false}
          />
        </div>
        <div className="movieInfo-text">
          <h1>{title}</h1>
          <h3>PLOT</h3>
          <p>{plot}</p>
          <div className="rating">
              <p className="score-text">
                {rating}
              </p>
          </div>
          <div className="rating-director"> 
            {directors.length > 1 ? <h3>DIRECTORS</h3> : <h3>DIRECTOR</h3>}
            {directors.map((dir, index) => {
              return (
                <h2 key={index} className="director">
                  {dir.name}
                </h2>
              );
            })}
          </div>
        </div>
      </div>
    </StyledMovieInfo>
  );
};
