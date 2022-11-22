import React, { useEffect, useState} from "react";
import Tmdb from '../Tmdb';

export default (item) => {
    const [movieList, setMovieList] = useState([]);
    useEffect(() => {
        const loadAll = async () => {
            //Pegar o filme especifico
            let list = await Tmdb.getMoviebyId(item.id);
            setMovieList(list);

        }
        loadAll();
    }, []);
    return (
        <div className="ratio ratio-4x3">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/M4LsLl-kuU8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
        )
}