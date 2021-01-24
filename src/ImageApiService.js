function fetchImage(tag){
    const MY_KEY = '19192524-a42a2a32afb109ad508e945f7'
    const BASE_URL = 'https://pixabay.com/api'
    return fetch(`${BASE_URL}/?q=${tag}&page=1&key=${MY_KEY}&image_type=photo&orientation=horizontal&per_page=12`)
    .then(response => {
        if(response.ok){
            return response.json();
        }
        return Promise.reject(
            new Error(`Нет такого ${tag}`)
        );
    })
}
const api = {
    fetchImage,
}

export default api;