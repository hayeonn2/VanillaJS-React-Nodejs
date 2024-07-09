import {useEffect} from "react";
import axios from "axios";
import { useStore } from './zustand/useStore';
import { usePersonStore } from './zustand/usePerson';
import { usePriceStore } from './zustand/usePriceStore';

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

  // 이름 받기
  const firstName = usePersonStore((state) => state.firstName);
  const updateFirstName = usePersonStore((state) => state.updateFirstName);

  // 가격 변경
  const price = usePriceStore((state => state.price));
  const updatePrice = usePriceStore((state) => state.updatePrice);
 
  return(
  <div>
    이건 프론트 페이지!! z
    <div>{bears} around heare!! </div>
    <button onClick={increasePopulation}>up!</button>
    <button onClick={removeAllBears}>reset</button>
    <button onClick={() => updateBears(12)}>updateBears</button>

    <div>
      <label>
        First Name:
        <input
          onChange={(e) => updateFirstName(e.target.value)}
          value={firstName}
        />
      </label>
      <p>Hello, <strong>{firstName}!!!</strong></p>
    </div>

    <div>
      <label>
        price: 
        <input
          onChange={(e) => updatePrice(e.target.value)}
          value={price}
        />
      </label>
      <p>{price}</p>
    </div>
  </div>
  )
};

export default App;