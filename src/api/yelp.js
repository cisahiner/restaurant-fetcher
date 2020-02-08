import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer Zk7bt9yQhfpnPq-210qZWndr0OTPL-j5-p9CYNmLBMaza_OKXSln9ETf6a5qS2nvT4KMABiYjZbjx-nZki0GQa0zDUx_8SUsoDVgcIgN9yzt-abrFmpMNFJkCowkXnYx'
    }

});
