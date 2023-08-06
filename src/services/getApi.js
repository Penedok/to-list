
import axios from "axios";

export default async function(){
    try{
        const response = await axios.get('https://quotes-api-e1f7c327b5bb.herokuapp.com/quote');
        return response.data.data
    }catch(error){
        console.log(error);
    }
}