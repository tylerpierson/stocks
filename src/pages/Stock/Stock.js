import {useState, useEffect} from "react"
import {useParams} from "react-router-dom"

export default function Stock (props) {
  // Our api key from coinapi.io  
  // Grabbing the Currency symbol from the URL Params
  const params = useParams()
  const symbol = params.symbol.toUpperCase()
  // Using the other two variables to create our URL
  const url = `/api/stocks/${symbol}`;

  //state to hold the coin data
  const [stock, setStock] = useState([])

  //function to fetch coin data
  const getStock = async () => {
    try{
        const response = await fetch(url);
        const data = await response.json();
        setStock(data);
    }catch(error){
        console.error(error)
    }   
  };

  // useEffect to run getCoin when component mounts
  useEffect(() => {
    getStock()
  }, [])

  // loaded function for when data is fetched
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

  // Function for when data doesn't exist
  const loading = () => {
    return <h1>Loading...</h1>
  };

  // if coin has data, run the loaded function, otherwise, run loading
  return stock ? loaded() : loading();
};