import React, { useEffect, useState, Component } from "react";
import './FeaturedMovie.css';
import Tmdb from '../Tmdb';
import MovieRow from './MovieRow';

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
        <div>
            aaa
        </div>
    )
}