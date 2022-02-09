import axios from "axios";
const URL =
  "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";

// const options = {
//   params: {
//     bl_latitude: '11.847676',
//     tr_latitude: '12.838442',
//     bl_longitude: '109.095887',
//     tr_longitude: '109.149359',
//   },
//   headers: {
//     "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
//     "x-rapidapi-key": [process.env.REACT_APP_RAPID_API_TRAVEL_API_KEY]
//   }
// }

// export const getPlacesData = async () => {
//   try {
//     const { data: { data } } = await axios.get(URL, options);

//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// };
export const getPlacesData = async (sw, ne) => {
  try {
    const {
      data: { data },
    } = await axios.get(URL, {
      params: {
        bl_latitude: sw?.lat,
        tr_latitude: ne?.lat,
        bl_longitude: sw?.lng,
        tr_longitude: ne?.lng,
      },
      headers: {
        "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
        "x-rapidapi-key": [process.env.REACT_APP_RAPID_API_TRAVEL_API_KEY],
      },
    });

    return data;
  } catch (error) {
    console.log(error);
  }
};
