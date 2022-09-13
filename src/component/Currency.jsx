import React from 'react'
import ApiService from './network/apiService'

function currency() {
      const { data } = ApiService()

      function buy (key){ return (parseFloat(data.rates[key]) + data.rates[key] / 100 * 5).toFixed(6)}
      function exchange (key){ return parseFloat(data.rates[key]).toFixed(6)}
      function sell (key){return (parseFloat(data.rates[key]) - data.rates[key] / 100 * 5).toFixed(6)}

      return (
          <>
                  <div className='text-white ml-4 '>
                        
                        {data.rates && Object.keys(data.rates).map((key, index) => (
                        
                        <tr className="bg-github-blue-b " key={index}>
                              
                              <td className=" px-1 "> {key} </td>
    
                              <td className="px-16"> {buy(key)} </td>
                            
                              <td className="px-4">{exchange(key)} </td>
         
                              <td className="px-16" > {sell(key)} </td>
   
                            
                        </tr>

                        ))}
       
                  </div>

          </>
      )
  }
  
  export default currency