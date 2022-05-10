import React from "react";
import Film from "./Film";

const FilmList = ({film}) => {
    const filmNodes = film.map(film => {
        return (
          <Film  key={film.id} film={film.filmUrl}/>
        );
      }) 
      return(
        <ul>
          {filmNodes}
        </ul>
      )
    }


export default FilmList