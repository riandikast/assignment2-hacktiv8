import  { useState, useEffect } from 'react'
import axios from 'axios'

const BASE_URL = 'https://api.currencyfreaks.com/latest?apikey=a4a7dcca3a7d4a2b8bda772106369ec5&symbols=CAD,IDR,JPY,CHF,EUR,GBP'

function ApiService()  {
    const [data, setData] = useState([])
    
    useEffect(() => {
        const getCurrency = async () => {
            try {
                const res = await axios.get(BASE_URL)
                setData(res.data)
            } catch (error) { }
        }
        getCurrency()
    }, [])

    return { data }
}

export default ApiService