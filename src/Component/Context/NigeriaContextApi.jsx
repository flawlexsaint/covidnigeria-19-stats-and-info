import React, { useEffect, useState, createContext } from "react";
import Axios from "axios";

export const NigeriaContextApi = createContext();

const NigeriaContextProvider = (props) => {
  const [States, setCountries] = useState([]);

  useEffect(() => {
    const fetch_data = async () => {
      const rawData = await Axios.get("https://covidnigeria.herokuapp.com/api");
      const data = await rawData.data.data.states;
      setCountries(data);
    };
    fetch_data();
  }, []);
  return (
    <NigeriaContextApi.Provider value={{ States }}>
      {props.children}
    </NigeriaContextApi.Provider>
  );
};

export default NigeriaContextProvider;
