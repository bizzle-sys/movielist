import React from 'react'
import axios from 'axios'

export const fetchMovies = async (str) => {
    // fetch('https://www.omdbapi.com/?apikey=4e59ca0a&t=avatar')
    // .then((res) => res.json())
    // .then((data) => console.log(data))
    // .catch((error)=> console.log(error))

    const {data} = await axios.get('https://www.omdbapi.com/?apikey=4e59ca0a&t=' + str)
    return(
        data
    )
}
