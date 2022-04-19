import React from "react";
import axios from "axios";

const fetchStatus = Object.freeze({
  IDLE: "idle",
  INPROGRESS: "in-progress",
  DONE: "done",
});

const useFetch = (options) => {
  const [data, setData] = React.useState(null);
  const [status, setStatus] = React.useState(fetchStatus.IDLE);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    setStatus(fetchStatus.INPROGRESS);

    axios
      .request(options)
      .then((response) => setData(response.data.data))
      .catch((error) => setError(error))
      .finally(() => setStatus(fetchStatus.DONE));
  }, [options]);

  return { data, status, error };
};

export default useFetch;
