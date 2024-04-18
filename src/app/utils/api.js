import axios from "axios";

const params={
    headers :{
        Authorization:"bearer " + process.env.NEXT_APP_STRIPE_APP_KEY,

    },
}

export const fetchDataFromApi = async (url) => {
    try {
        
        const { data } = await axios.get(
            process.env.NEXT_PUBLIC_API_URL + url ,
        );
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
};