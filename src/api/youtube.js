import axios from 'axios'

const KEY='AIzaSyAhG0CFVSdjTcL9EWk3PjcZoZ1fu6rOPLQ'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet', 
        maxResults: 5, 
        key: KEY,
    }
})