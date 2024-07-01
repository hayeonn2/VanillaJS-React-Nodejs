import {useEffect} from "react";
import axios from "axios";

function App(){
  const getApi = async () => {
    axios.get("/api").then((res) => console.log(res.data));
  }

  useEffect(() => {
    getApi();
  }, []);

  return <div>이건 프론트 페이지!!</div>
};

export default App;