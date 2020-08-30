export const API = (params) => {
  const apiKey = ''
  const url = `http://www.omdbapi.com/?apikey=${apiKey}&r=json&page=1&s=${params}`
  
  return url;
}