import React, { useEffect, useState} from 'react'
import movieDB from '../api/movieDB'
import { Movie, MovieDBMoviesResponse } from '../interfaces/movieInterface'

export const useMovies = () => {

    const [ isLoading, setIsLoading ] = useState(true)
    const [ moviesCine , setMoviesCine ] = useState<Movie[]>([])
    const [ moviesPopulars , setMoviesPopulars ] = useState<Movie[]>([])

    const getMovies = async( ) => {

        const respNowPlaying = await movieDB.get<MovieDBMoviesResponse>('/now_playing');
        const respPopular = await movieDB.get<MovieDBMoviesResponse>('/popular');

        await movieDB.get<MovieDBMoviesResponse>('/top_rated');
        await movieDB.get<MovieDBMoviesResponse>('/upcoming');

        setMoviesCine(respNowPlaying.data.results)
        setMoviesPopulars(respPopular.data.results)

        setIsLoading(false)
       
    };
 
    useEffect(() => {
        //now_playing
       getMovies()
      }, [])


    return {
        moviesCine,
        moviesPopulars,
        isLoading,
    }

}
