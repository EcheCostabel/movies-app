import React, { useEffect, useState} from 'react'
import movieDB from '../api/movieDB'
import { Movie, MovieDBNowPlaying } from '../interfaces/movieInterface'

export const useMovies = () => {

    const [ isLoading, setIsLoading ] = useState(true)
    const [ moviesCine , setMoviesCine ] = useState<Movie[]>([])

    const getMovies = async( ) => {

        const resp = await movieDB.get<MovieDBNowPlaying>('/now_playing');
        setMoviesCine(resp.data.results)

        setIsLoading(false)
       
    }
 
    useEffect(() => {
        //now_playing
       getMovies()
      }, [])


    return {
        moviesCine,
        isLoading
    }

}
