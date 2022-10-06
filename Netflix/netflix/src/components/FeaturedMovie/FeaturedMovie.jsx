import React from "react";
import './FeaturedMovie.css'

export default ({item}) => {
    
    let firstDate = new Date(item.first_air_date)
    let genres = []
    for(let i in item.genres){
        genres.push(item.genres[i].name)
    }
    
    return(
        <section className="featured" style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path}), linear-gradient(#eb01a5, #d13531)`
        }}>
            <div className="featured--vertical">
                <div className="featured--horizontal">
                    <div className="featured--name">
                        {item.original_name}
                    </div>
                    <div className="featured--info">
                        <div className="featured--points">{item.vote_average} pontos</div>
                        <div className="featured--year">lançamento: {firstDate.getFullYear()}</div>
                        <div className="featured--seasons">{item.number_of_seasons} temporada{item.number_of_seasons !== 1 ? 's' : ' '}</div>
                    </div>
                    <div className="featured--description">
                        <p>{item.overview}</p>
                    </div>
                    <div className="featured--buttons">
                        <a className="featured--watchbutton" href={`/watch/${item.id}`}> ▷ Assistir</a> <br />
                        <a className="featured--mylistbutton" href={`/list/add/${item.id}`}> + minha lista</a>
                    </div>
                    <div className="featured--genres"><strong>Gêneros: {genres.join(', ')}</strong></div>
                </div>
            </div>
        </section>
    )
}

