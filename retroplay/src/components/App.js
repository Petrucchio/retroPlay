import React, { useEffect, useState } from 'react';
import './App.css';
import Tmdb from '../Tmdb';
import MovieRow from './MovieRow';
import FeaturedMovie from './FeaturedMovie';
import Header from './Header';

export default () => {

    const [movieList, setMovieList] = useState([]);
    const [featuredData, setFeaturedData] = useState([]);
    const [blackHeader, setBlackHeader] = useState(false);

    useEffect(() => {
        const loadAll = async () => {
            //Pegar a lista total
            let list = await Tmdb.getHomeList();
            setMovieList(list);

            //pegando o Featured
            let originals = list.filter(i => i.slug === 'originals');
            let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
            let chosen = originals[0].items.results[randomChosen];
            let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
            setFeaturedData(chosenInfo);
        }
        loadAll();
    }, []);

    useEffect(() =>{
        const scrollListener = () => {
            if(window.scrollY > 100){
                setBlackHeader(true);
            }else{
                setBlackHeader(false);
            }
        }
        window.addEventListener('scroll', scrollListener);

        return() => {
            window.removeEventListener('scroll', scrollListener);
        }
    }, []);
    return (
        
        <div className="page">

            <Header black={blackHeader} />

            {featuredData &&
            <FeaturedMovie item={featuredData} />
            }
            <section className="lists">
                {movieList.map((item, key) => (
                    <MovieRow key={key} title={item.title} items={item.items} />
                    ) )}
            </section>
            <footer>
                Feito com React e Javascript,
                Direitos de Imagem Netflix,
                Dados coletados de TheMoviedb.org
            </footer>

            {movieList.length <= 0 &&
            <div className="loading">
                <img src="https://i.pinimg.com/originals/f9/0f/76/f90f7689233948005f465d98ead56d44.gif" alt="carregando"></img>
            </div>
            }
        </div>
    );
}