export const API = (params) => {
  const apiKey = 'a426542b'
  const url = `http://www.omdbapi.com/?apikey=${apiKey}&r=json&page=1${params}`
  
  return url;
}