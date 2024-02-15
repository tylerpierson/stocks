import {useState, useEffect} from "react"
import {useParams} from "react-router-dom"

export default function Stock (props) {
  const params = useParams()
  const symbol = params.symbol
  const url = `/api/stocks/${symbol}`;

  const [stock, setStock] = useState([])

  const getStock = async () => {
    try{
        const response = await fetch(url);
        const data = await response.json();
        setStock(data);
    }catch(error){
        console.error(error)
    }   
  };

  useEffect(() => {
    getStock()
  }, [])
//
  const loaded = () => {
    return (
      <div>
        <h1>
          {stock.name}
        </h1>
        <ul>
            <li>Symbol: {stock.symbol}</li>
            <li>Last Price: {stock.lastPrice}</li>
            <li>Change: {stock.change}</li>
            <li>High: {stock.high}</li>
            <li>Low: {stock.low}</li>
            <li>Open: {stock.open}</li>
        </ul>
      </div>
    )
  }

  const loading = () => {
    return <h1>Loading...</h1>
  };

  return stock ? loaded() : loading();
};