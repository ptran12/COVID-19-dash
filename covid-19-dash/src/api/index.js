import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';
const url2 = 'https://api.covidtracking.com/v1/us/daily.json';

export const fetchData = async () => {
    try {
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(url);
        
        return {confirmed, recovered, deaths, lastUpdate };

    } catch (error) {

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