import React, {useState} from 'react'
import { questions } from "./api";
 
import './accordian.css';
import MyAccordian from './MyAccordian';

const Accordian = () => {
    const [data, setData] = useState(questions);
    return (
        <>
             
        
           < section className="main-div">
                <h1>React Interview Questions </h1>
                {
                data.map((curElem) => {
                    return <MyAccordian key={curElem.id} {...curElem} />
                    //here the spread operator is use to pass the the properties of the questions api
                })        
                }
                 </section>       
        
               
        </>
       /* <>
            <h1>{questions}</h1><section className="main-div">
                <h1>React Interview Questions </h1>  </section> key={curElem.id} {...curElem}
        </>*/
    )
}

export default Accordian