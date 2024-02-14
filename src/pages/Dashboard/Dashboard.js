import {useState, useEffect} from "react"
import {useParams} from "react-router-dom"
import { Link } from "react-router-dom";


export default function Dashboard (props) {
  
    const [stocks, setStocks] = useState([])
    
    // Save stocks array
    async function getStocks() {
        try {            
            const response = await fetch('/api/stocks')
            const data = await response.json()
            setStocks(data)
        } catch(error) {
            console.error(error)
        }   
    }
    
    useEffect(() => {
        getStocks()
    }, [])

    const loaded = () => {
        return (           
            <div className="stocks">
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Symbol</th>
                            <th>Last Price</th>
                            <th>Change</th>
                            <th>High</th>
                            <th>Low</th> 
                            <th>Open</th>
                        </tr>
                    </thead>
                    <tbody>
                        {stocks.map((stock, index) => { 
                            const { name, symbol, lastPrice, change, high, low, open } = stock;
                            return (
                                <tr key={index}> 
                                    <td><Link to={`/stocks/${symbol}`}>{name}</Link></td>
                                    <td>{symbol}</td>
                                    <td>{lastPrice}</td>
                                    <td>{change}</td>
                                    <td>{high}</td>
                                    <td>{low}</td> 
                                    <td>{open}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    }

    const loading = () => {
        return <h1>Loading...</h1>
    }

    return stocks ? loaded() : loading()
}