import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';
const url2 = 'https://api.covidtracking.com/v1/us/daily.json';

export const fetchData = async (country) => {
    let changeableUrl = url;

    if(country) {
        changeableUrl = `${url}/countries/${country}`
    }


    try {
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(changeableUrl);
        
        return {confirmed, recovered, deaths, lastUpdate };

    } catch (error) {
        console.log(error)
    }
}

export const fetchDailyData = async () => {
    try {
        const { data } = await axios.get(url2);
        // console.log(data);

        const modifiedData = data.map((dailyData) => ({
            positive: dailyData.positive,
            death: dailyData.death,
            date: dailyData.date,
        }));

        return modifiedData
    } catch(error) {

    }
}

export const fetchCountries = async () => {
 try {
    const { data: { countries }} = await axios.get(`${url}/countries`);
    // console.log(response);
    return countries.map((country) => country.name)
 } catch (error) {
     console.log(error);
 }

}