import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

// const options = {
//   method: 'GET',
//   headers: {
//     'X-RapidAPI-Key': '2f6f581b26msh62189312f511da9p137602jsn2bca03d5e6a5',
//     'X-RapidAPI-Host': 'spotify23.p.rapidapi.com',
//   },
// };

// fetch('https://spotify23.p.rapidapi.com/genre_view/?id=0JQ5DAqbMKFEC4WFtoNRpw',
//   options)
//   .then((response) => response.json())
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err));

export const spotifyApi = createApi({
  reducerPath: 'spotifyApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://spotify23.p.rapidapi.com',
    prepareHeaders: (headers)=> {
      headers.set('X-RapidAPI-Key', '2f6f581b26msh62189312f511da9p137602jsn2bca03d5e6a5');
      headers.set('X-RapidAPI-Host', 'spotify23.p.rapidapi.com');
      return headers; 
    }
  }), 
  endpoints: (builder) => ({
    getTopCharts: builder.query({query: (genre)=> 'genre_view/?id=0JQ5DAqbMKFEC4WFtoNRpw'})
  })
});

export const {useGetTopChartsQuery} = spotifyApi;