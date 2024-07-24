


import React,{useState} from "react";
const FormH = ()=>{

    const [active, setActive]=useState<number|null>(null);
    const handleClick =(index:number)=>{
        setActive(index);
    }
 

    return <div>
        {
            [0,1,2].map((num,index)=>(  
                <button
                    key={index}
                    style={{
                        backgroundColor: active===index? 'lightblue':'white',
                        fontSize:'50px'
                    }}
                    onClick ={()=>handleClick(index)}
                >
                {num}
                </button>
            ))
        }

    </div>
}
export default FormH;
