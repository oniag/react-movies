export const API = (params) => {
  const apiKey = 'a426542b'
  const url = `https://www.omdbapi.com/?apikey=${apiKey}&r=json&page=1&s=${params}`
  
  return url;
}