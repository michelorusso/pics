import axios from 'axios'

const searchImages = async (terms) => {
   const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID 6WmJNzBLgPUaEMdpcOE32U7PPnV7KfanERQn1_o-LfU'
        },
        params: {
            query: terms
        }
    });

    return response.data.results;
}

export default searchImages;