import React from "react";
import './FeaturedMovie.css'

export default ({item}) => {
    
    let firstDate = new Date(item.first_air_date)
    let genres = []
    for(let i in item.genres){
        genres.push(item.genres[i].name)
    }
    let dateMovie = new Date(item.release_date)

    function abrirModal(){
        const modal = document.getElementById('janela-modal')
        modal.classList.add('abrir')

        modal.addEventListener('click', (e) =>{
            if(e.target.id == 'fechar' || e.target.id == 'janela-modal'){
                modal.classList.remove('abrir')
            }
        })
    }

    const youtubeKey = 'AIzaSyCKdkeIFKZy59qC_FLwcbE0v2I7Vsi1YmE';
    const searchYoutube = 'https://www.googleapis.com/youtube/v3/search'

    function Video(){
        
    }

    
    return(
        <section className="featured" style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path}), linear-gradient(#eb01a5, #d13531)`
        }}>
            <div className="featured--vertical">
                <div className="featured--horizontal">
                    <div className="featured--name" >
                        {item.name ?? item.original_title}
                    </div>
                    <div className="featured--info">
                        <div className="featured--points">{item.vote_average} pontos</div>
                        <div className="featured--year">lançamento: {firstDate == 'Invalid Date' ? dateMovie.getFullYear() : firstDate.getFullYear()}</div>
                        <div className="featured--seasons">{item.number_of_seasons} {item.number_of_seasons > 0 ? 'temporada' : ' '}{item.number_of_seasons > 0 && item.number_of_seasons !== 1 ? 's ' : ' '}</div>
                    </div>
                    <div className="featured--description">
                        <p>{item.overview}</p>
                    </div>
                    <div className="featured--buttons">
                        <a className="featured--watchbutton" href={'#janela-modal'} onClick={abrirModal}> ▷ Assistir</a> <br />
                        <a className="featured--mylistbutton" href={`/list/add/${item.id}`}> + minha lista</a>
                    </div>
                    <div className="featured--genres"><strong>Gêneros: {genres.join(', ')}</strong></div>
                </div>
            </div>
            <div className="janela-modal" id="janela-modal">
                <div className="modal">
                    <button className="fechar" id="fechar">X</button>
                    <h1>{item.name ?? item.original_title}</h1>
                    {`http://www.youtube.com/embed/id`}
                </div>
            </div>
        </section>
    )
}

