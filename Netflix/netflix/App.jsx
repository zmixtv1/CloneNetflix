import { useState } from 'react'
import { useEffect } from 'react'
import './src/App.css'
import Tmdb from './src/Tmdb'
import MovieRow from './src/components/MovierRow/MovieRow'
import FeaturedMovie from './src/components/FeaturedMovie/FeaturedMovie'
import Header from './src/components/Header/Header'
import Entrada from './src/components/logoEntrada/Entrada'


function App() {

  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState([])
  const [blackHeader, setBlackHeader] = useState(false)
  const [id , setID] = useState()

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
      
      setFeaturedData(chosenInfo)

     
    }

    loadAll();
  }, [])

  useEffect(()=>{
    const principalFilme = async () =>{
      if(id){
        
        let filme = await Tmdb.getMovieInfo(id.id, id.category)
        setFeaturedData(filme)
      }
    }
    principalFilme()
  }, [id])

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
  }, [])

  useEffect(()=>{
    console.log(id)
  }, [id])
  

  return (
    <div className='page'>

      

      <Header black={blackHeader}/>

      {featuredData && 
        <FeaturedMovie item={featuredData} />
      }
      
      <section className='lists'>
        {movieList.map((item, key)=>(
          <MovieRow key={key} title={item.title} items={item.items} onClick={setID}/>
        ))}
      </section>
      <footer>
        Feito pelo Rodrigo Alaor, Vitoria Almeida e Giulia Grance<br />
        Direitos de imagem para Netflix <br />
        Dados pegos do site Themoviedb.org
      </footer>

      {movieList.length <= 0 &&
        <div className='loading'>
          <img src="https://media.wired.com/photos/592744d3f3e2356fd800bf00/master/w_2560%2Cc_limit/Netflix_LoadTime.gif" width={'100%'} alt="Carregando" />
        </div>  
      }
      
      <Entrada />
      
      

    </div>
  )
}

export default App
