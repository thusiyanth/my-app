import React  from "react";
import { useState } from "react";
import './Style.css';

//heading part
const  Thred=()=>{
    return(
        <thead>
              <tr>                
                <th >First</th>
                <th >Last</th>
                <th >Handle</th>
              </tr>
            </thead>
    );
}

//body part
const Tbody =(props)=>{
    const {appData}=props;   
   const rowData=appData.map(
    (data,index)=>{
        return(
        <td>
            <div key={index}> </div>
            <div>{data.First}</div>
            <div>{data.Last}</div>
            <div>{data.Handle}</div>
        </td>

        )
    }
   )
   
   return(
    <tbody>
        {rowData}        
    </tbody> 
    ) 
}
//





//form part 
const Form = ()=>{
    
    const status={
        first:"",
        last:"",
    }
    
  
  

    return(

        <form >
            <div>
                <label for="fname">First name:</label>
                <input type="text" id="fname" name="fname" ></input>
            </div>
            <div>
                <label for="lname">Last name:</label>
                <input type="text" id="lname" name="lname" ></input>
            </div>
            <div>                
                <input type="submit" value="Submit"></input>
            </div>
        </form>

    )
}


//class for implement function components
class TableComponent extends React.Component{

    render(){
        const {appData}=this.props;       

        return (
            <table >
                <div>
                    <Thred/>          
                   <Tbody appData={appData}/>
                </div>
                <div>
                <Form/>  
                </div>
             </table>
          
        );
    }
}
export default TableComponent;