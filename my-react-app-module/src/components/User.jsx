import userList  from'../data/Data';
import { useState } from 'react';

export default function User(){
    const[index,setIndex]=useState(0)
    const[memo,setmemo]=useState(userList[index].name)
    let user=userList[index];
    return(
        <div>
            <button onClick={(
                
            )=>{
            setmemo(userList[index+1].name)
            setIndex(index+1)}}>Next</button>
            <p>{user.name}</p>
            <input value={memo}/>
        </div>
    )
}