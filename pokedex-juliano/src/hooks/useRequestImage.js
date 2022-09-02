import { useEffect, useState } from "react";
import axios from "axios";

const useRequestImage = (initialState, url) => {
  const [data, setData] = useState(initialState);

  const getData = () => {
    axios
      .get(url)
      .then((res) => {
        setData(
          res.data.sprites.versions["generation-v"]["black-white"].animated
            .front_default
        );
      })
      .catch((err) => alert(err.response.data.message));
  };

  useEffect(() => {
    getData();
  }, []);

  return data;
};

export default useRequestImage;
