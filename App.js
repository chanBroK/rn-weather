import React from "react";
import Loading from "./Loading";
import { Alert,Text } from "react-native";
import * as Location from "expo-location";
import axios from "axios";
import Weather from "./Weather";
// export default function App() {
//   return <Loading />;
// }
const API_KEY = "6b1d67e1d5c23b3d065a982d45cca16f";

const App = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [wData, setWData] = React.useState();
  const getWeather = async (latitude, longitude) => {
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    );
    setWData(data);
    setIsLoading(false);
  };
  const getLocation = async () => {
    try {
      await Location.requestForegroundPermissionsAsync();
      const { coords } = await Location.getCurrentPositionAsync();
      getWeather(coords.latitude, coords.longitude);
    } catch (e) {
      console.log(e);
      Alert.alert("Error in getLocation", "Can't get Location");
    }
  };
  React.useEffect(() => {
    getLocation();
  }, []);
  return isLoading ? (
    <Loading />
  ) : (
    <Weather
    temp={Math.round(wData.main.temp)}
    condition={wData.weather[0].main}
    />
  );
};

export default App;
