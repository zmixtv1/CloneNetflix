import { useState } from 'react'
import { useEffect } from 'react'
import './src/App.css'
import Tmdb from './src/Tmdb'
import MovieRow from './src/components/MovierRow/MovieRow'
import FeaturedMovie from './src/components/FeaturedMovie/FeaturedMovie'
import Header from './src/components/Header/Header'
import { LocalDining } from '@material-ui/icons'


function App() {

  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState([])
  const [blackHeader, setBlackHeader] = useState(false)
  

  useEffect(()=>{
    const loadAll = async () => {
      //pegando toda a lista
      let list = await Tmdb.getHomeList();
      setMovieList(list);

      // Pegando o Featured

      let originals = list.filter(i=>i.slug === 'originals')

      let randomChosen = Math.floor(Math.random()* (originals[0].items.results.length - 1))
      let chosen = originals[0].items.results[randomChosen]
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv')
      console.log (chosenInfo)
      setFeaturedData(chosenInfo)

      
     
    }

    loadAll();
  }, [])

  useEffect(()=>{
    const scrollListener = ()=>{
      if(window.scrollY > 100){
        setBlackHeader(true)
      }else{
        setBlackHeader(false)
      }
    }
    window.addEventListener('scroll', scrollListener)
    return () => {
      window.removeEventListener('scroll', scrollListener)
    }
  })

  function carregar() {
    document.getElementById("teste").style.display="none";
}
  
  

  return (
    <div className='page'>

      <Header black={blackHeader}/>

      {featuredData && 
        <FeaturedMovie item={featuredData} />
      }
      
      <section className='lists'>
        {movieList.map((item, key)=>(
          <MovieRow key={key} title={item.title} items={item.items}/>
        ))}
      </section>
      <footer>
        Feito pelo Rodrigo Alaor <br />
        Direitos de imagem para Netflix <br />
        Dados pegos do site Themoviedb.org
      </footer>

      {movieList.length <= 0 &&
        <div className='loading'>
          <img src="https://media.wired.com/photos/592744d3f3e2356fd800bf00/master/w_2560%2Cc_limit/Netflix_LoadTime.gif" width={'100%'} alt="Carregando" />
        </div>  
      }
      
      {movieList.length > 0 &&
        <div id="teste" className='entrando'>
          <img src="https://davidsonbranding.com.au/wp-content/uploads/netflix.gif" width={'100%'} onLoad={setTimeout(carregar, 3500)}/>
        </div>
      }
      
      

    </div>
  )
}

export default App
