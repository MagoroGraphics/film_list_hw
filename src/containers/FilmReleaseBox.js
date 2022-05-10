import React, {useState} from "react";
import FilmList from "../components/FilmList";
import UpcomingReleases from "../components/UpcomingReleases";

const FilmReleaseBox = () => {
    const [film, setFilm] = useState(  
        [{id:1,
        filmUrl: <a href="https://www.imdb.com/title/tt4633694/">Spiderman: Into the spiderverse</a>},
        {id:2,
        filmUrl: <a href="https://www.imdb.com/title/tt5989218/?ref_=fn_al_tt_1">Life itself</a>},
        {id:3,
        filmUrl: <a href="https://www.imdb.com/title/tt2328900/?ref_=nv_sr_srsg_0">Mary Queen of Scots</a>},
        {id:4,
        filmUrl: <a href="https://www.imdb.com/title/tt3513498/?ref_=nv_sr_srsg_0">The lego movie 2</a>},
        {id:5,
        filmUrl: <a href="https://www.imdb.com/title/tt4154664/?ref_=nv_sr_srsg_0">Captain Marvel</a>}
    ])
    
    return(
        <>
        <FilmList film={film} id="filmlist"></FilmList>
        <UpcomingReleases/>
        </>
    )
}

export default FilmReleaseBox