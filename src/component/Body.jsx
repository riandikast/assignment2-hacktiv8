import React from 'react';
import Currency from './Currency';

function body(){
      function link(){return <a href='https://currencyfreaks.com'> <u>https://currencyfreaks.com</u></a>}
      return (
            <>  
              <div className='block h-auto  bg-github-darker-blue flex space-x-20'>
                <div className='h-96 mb-96 mt-60 w-0'></div>

                        <div className=' space-x-4 text-white mt-8'>
                              <div className='ml-16'>

                                    <div className='flex whitespace-nowrap'>
                                          <th className=' ml-2 mr-1'>Currency</th >  
                                          <th className='ml-16 '>We Buy</th >
                                          <th className='ml-24 mr-8'>Exchange Rate</th >
                                          <th className='ml-16'>We Sell</th >
                                    </div>
            
                                    <div className=' mt-4'>                               
                                    <Currency></Currency>
                              </div>

                              </div>
                        
                              <div className='text-white whitespace-nowrap mt-20'>Rates are based from 1 USD</div>
                              <div className='text-white whitespace-nowrap'>This Application uses API from {link()}</div>

                        </div>

                            
                          
    
                    </div>
             
  
  
     
            </>
        )
}

export default  body