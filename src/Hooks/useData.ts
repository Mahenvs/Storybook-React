import { useEffect, useReducer } from "react";
import { initialState, reducer } from "../store/appStore";

export const useData = () => {
  const [apiData, setApiData] = useReducer(reducer, initialState);

  const fetchData = async () => {
    setApiData({ type: "FETCH_START" });
    try {
      const response = await fetch("https://api.github.com");
      const result = await response.json();
      setApiData({ type: "FETCH_SUCCESS", payload: result });
      console.log("34");
    } catch (error: unknown) {
      setApiData({ type: "FETCH_ERROR", payload: error });
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return apiData;
};
