import { useEffect, useState } from "react";
import movieDB from "../api/movieDB";
import { MovieFull } from "../interfaces/movieInterface";
import { CreditsResponse } from "../interfaces/creditsInterface";
import { Cast } from "../interfaces/creditsInterface";

interface MoviDetails {
    isLoading: boolean;
    movieFull?: MovieFull
    cast: Cast[];
}


export const useMovieDetails = ( movieId: number ) => {
  
    const [ state, setState ] = useState<MoviDetails>({
        isLoading: true,
        movieFull: undefined,
        cast: []
    });

    const getMovieDetails = async( ) => {

        const movieDetailsPromise = movieDB.get<MovieFull>(`/${movieId}`);
        const castPromise = movieDB.get<CreditsResponse>(`/${movieId}/credits`);
      
        const [ movieDetailsResponse, castPromiseResponse] = await Promise.all([ //Desestructuro desde movieDetailsPromise y castPromise
            movieDetailsPromise,
            castPromise
        ])

        setState({
            isLoading: false,
            movieFull: movieDetailsResponse.data,
            cast: castPromiseResponse.data.cast
        })
      
    }

    useEffect(() => {
        getMovieDetails()
    }, [])

    return {
       ...state
    }

}
