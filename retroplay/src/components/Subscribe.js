import React from "react";
import './style.css';
import logo from "./img/logo.png";
import tv from "./img/tv.png";
import video from "./img/video-tv.m4v";
import mobile from "./img/mobile-0819.jpg";
import boxshot from "./img/boxshot.png";
import download from "./img/download-icon.gif";
import kids from "./img/kids.png";
import { Link } from "react-router-dom";


    export default () => {

    return(
    <div className="body">
        <div className="container">
            <nav>
                <div className="logo">
                    <a href="/" title="Pagina Inicial"><img alt="Logo" src={logo}/></a>
                </div>
                <Link to="/Create" >
                    <div className="banner-footer">
                        <button>Cadastrar</button>
                    </div>
                </Link>
            </nav>
        </div>
    <section className="sessao-1">
        <div className="container-sessao">
            <div className="sessao-1-descricao">
                <h1>Aprecia Sua TV.</h1>
                <h3>
                    Assista em SmartTVs, Playstation, Xbox, Chromecast, Apple TV, jogadores Blu-ray e muito mais.
                </h3>
            </div>
            <div className="sessao-1-img">
                <video autoplay muted loop src={video}></video>
                <img src={tv} alt="Assista em tv Android" title="Assista em tv Android"/>
            </div>
        </div>
    </section>
    <section className="sessao-2">
        <div className="container-sessao">
            <div className="sessao-2-img">
                <img src={mobile} alt="assista em Qualquer Lugar" title="assista em Qualquer Lugar"/>
                <div className="sessao-2-img-footer">
                    <img src={boxshot} alt="Coisas Estranhas" title="Coisas Estranhas"/>
                    <div className="sessao-2-img-footer-content">
                        <p>Coisas Estranhas</p>
                        <p>Baixando...</p>
                    </div>
                    <img src={download} alt="Baixar e assista em qualque lugar"/>
                </div>
            </div>
            <div className="sessao-2-descricao">
                <h1>Baixe seus shows para assistir offline.</h1>
                <h3>Salve seus favoritos e sempre tenha algo para assistir.</h3>
            </div>
        </div>
    </section>
    <section className="sessao-3 sessao-2">
        <div className="container-sessao">
            <div className="sessao-3-descricao">
                <h1>Assista em Qualquer Lugar.</h1>
                <p>
                    Filmes ilimatados e programas de TV em seu telefone, tablet, laptop e TV.
                </p>
            </div>
        </div>
    </section>
    <section className="sessao-4">
        <div className="container-sessao-4">
            <div className="sessao-4-img w50">
                <img src={kids} alt="Para as suas Crianças" title="Para as suas Crianças"/>
            </div>
            <div className="sessao-4-descricao w50">
                <h1>Criar perfis para crianças.</h1>
                <h3>
                    Envie Kits em aventura com os seus caracteres favoritos em um espaço feito apenas para eles livres
                    com a sua associação.
                </h3>
            </div>
            <div className="clear"></div>
        </div>
    </section>
    <section className="sessao-5 mt-10">
        <div className="container">
            <div className="box-sessao-5">
                <h1>Cadastre-se agora</h1>
                <div className="sessao-5-email">
                    <div className="container">
                        <div className="email">
                            <p>Pronto para assistir? Digite seu e-mail para criar ou reiniciar sua associação.</p>
                            <Link to="/Create" >
                            <div className="banner-footer">
                                <button>Cadastrar</button>
                            </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
</div>
);}
