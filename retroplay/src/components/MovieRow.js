import React, {useState} from 'react';
import './MovieRow.css';
import { Link} from 'react-router-dom';
import Tmdb from '../Tmdb';

export default ({title, items }) => {
    const [scrollX, setScrollX] = useState(0 );
    const [SelectedId, setSelectedId] = useState(); 
    // const ref = useRef(null);
    const handLeftArrow = () => {
        let x = scrollX + Math.round(window.innerWidth / 2);
        if(x > 0){
            x = 0;
        }
        setScrollX(x);
    }
    const handRightArrow = () => {
        let x = scrollX - Math.round(window.innerWidth / 2);
        let listW = items.results.length * 150;
        if((window.innerWidth - listW) > x){
            x = (window.innerWidth - listW) - 60;
        }
        setScrollX(x);
    }


    const featured = event => {
        let SelectedId = event.currentTarget.id;
        
        let list = Tmdb.getMoviebyId(SelectedId);
        setSelectedId(list);
           
    }
    return (
        <div className="movieRow">
            <h2>{title}</h2>
            <div className="movieRow--left" onClick={handLeftArrow}>
                <span style={{fontSize:50}}>〈</span>
            </div>
            <div className="movieRow--right">
            <span style={{fontSize:50}} onClick={handRightArrow}> 〉</span>
            </div>
            <div className="movieRow--listarea">
                <div className="movieRow--list" style={{
                    marginLeft: scrollX,
                    width: items.results.length * 150
                }}>
                    {items.results.length > 0 && items.results.map((item, key) => (
                        <Link to="/featured" id={SelectedId}>
                        <div key={key} id={item.id} onClick={featured} className="movieRow--item" >
                            <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}  alt={item.original_title} />
                        </div>
                        </Link>
                    ))}
                </div>
                
            </div>
            
        </div>
    );
}