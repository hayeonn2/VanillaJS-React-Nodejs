import {useEffect} from "react";
import axios from "axios";
import { useStore } from './zustand/useStore';

function App(){
  const getApi = async () => {
    axios.get("/api").then((res) => console.log(res.data));
  }

  useEffect(() => {
    getApi();
  }, []);

  const bears = useStore((state) => state.bears);
  const increasePopulation = useStore((state) => state.increasePopulation);
  const removeAllBears = useStore((state) => state.removeAllBears);
  const updateBears = useStore((state) => state.updateBears);

  // 새로운 곰의 수를 업데이트하기
  const handleUpdateBears = () => {
    updateBears(12);
  }

  return(
  <div>
    이건 프론트 페이지!! z
    <div>{bears} around heare!! </div>
    <button onClick={increasePopulation}>up!</button>
    <button onClick={removeAllBears}>reset</button>
    <button onClick={handleUpdateBears}>updateBears</button>
  </div>
  )
};

export default App;