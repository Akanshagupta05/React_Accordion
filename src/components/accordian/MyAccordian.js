import React, {useState} from 'react'
 
const MyAccordian = ({question,answer}) => {
    const [show, setShow] = useState(true);
    return (
       /* <>
            <div className="main-heading">
                <p onClick={() => setShow(!show)}> { show? "➖" : "➕"} </p>
                <h3>{question}</h3>
                   
            </div>
            { show &&  <p className="answers"> {answer} </p> }
         
        </>*/

        <>
            <div className="main-heading">
            <p onClick={() => setShow(!show)}> { show? "➖" : "➕"} </p>
                <h3>{question}</h3>
                   
            </div>
            {
                show && <p className='answers'>{answer} </p> 
            }
              
         
        </>
    )
}

export default MyAccordian