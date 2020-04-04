import axios from 'axios'
export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization:'Client-ID vLMoNKqYDMZryk96XrtgiG2Ne7_a-jtyrlkZCmpB0LQ'
    }
})