const apiKey = 'a426542b'

export const API = (params) => {
  const url = `https://www.omdbapi.com/?apikey=${apiKey}&r=json&s=${params}`
  
  return url;
}

export const API_DETAILS = (id) => {
  const url = `https://www.omdbapi.com/?apikey=${apiKey}&plot=fullr=json&i=${id}`
  
  return url;
}