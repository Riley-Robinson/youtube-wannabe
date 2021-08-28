import axios from 'axios';

const KEY = 'AIzaSyAdSRguL5GW-SiK1y1e4eK3nCDSmqp4OKw' ;

export default axios.create({

    baseURL: 'https://www.googleapis.com/youtube/v3',

    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});

