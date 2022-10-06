const API_KEY = '9edd96879ccce885d78b4b1b376eee7b';
const API_BASE = 'https://api.themoviedb.org/3';

/*
- originais da Netflix
- recomendados (trending)
- em alta (top rated)
- acao 
- comedia
- terror
- romance
- documentario
- populares
*/

const basicFetch = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json;
}

export default{

    getHomeList: async () => {
        return [
            {
                slug: 'originals',
                title: 'Originais da Netflix',
                items: await basicFetch(`/discover/tv?with_network=213?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'trending',
                title: 'Recomendados para Você',
                items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'toprated',
                title: 'Em alta',
                items: await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'action',
                title: 'ação',
                items: await basicFetch(`/discover/movie?with_genres=28?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'commedy',
                title: 'comédia',
                items: await basicFetch(`/discover/movie?with_genres=35?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'horror',
                title: 'Terror',
                items: await basicFetch(`/discover/movie?with_genres=27?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'romance',
                title: 'Romance',
                items: await basicFetch(`/discover/movie?with_genres=10749?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'documentary',
                title: 'documentários',
                items: await basicFetch(`/discover/movie?with_genres=99?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'popular',
                title: 'Populares',
                items: await basicFetch(`/movie/popular?language=pt-BR&api_key=${API_KEY}`)
            }
        ]
    },

    getMovieInfo: async (movieID, type) => {
        let info = {}
        
        if(movieID){
            switch(type){
                case 'movie':
                    info = await basicFetch(`/movie/${movieID}?language=pt-BR&api_key=${API_KEY}`)
                break;
                case 'tv':
                    info = await basicFetch(`/tv/${movieID}?language=pt-BR&api_key=${API_KEY}`)
                break;
                default:
                    info = null
                break;
            }
        }

        return info;
    }

}