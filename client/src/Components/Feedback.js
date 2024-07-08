import {useState} from "react"
export default function Feedback(){
    const [formdata,submitformdata] = useState({
        name:"",
        roll:"",
        feedback:""
    })
    const [TableData,SubmitTable] = useState([])
    function HandleChange(e){
        const {name,value} = e.target
        submitformdata({...formdata,[name]:value});

    }
    function HandleSubmit(){
        SubmitTable([...TableData,formdata]);
        submitformdata({
            name:"",
            roll:"",
            feedback:""
        })

    }
    return(
        <div>
            <h1>Feedback form</h1>
            <input name="name" type="text" value={formdata.name} placeholder="name" onChange={HandleChange}/>
            <input name="roll" type="text" value={formdata.roll} placeholder="roll number" onChange={HandleChange}/>
            <input name="feedback" type="text" value={formdata.feedback} placeholder=" your feedback" onChange={HandleChange}/>
            <br/>
            <button onClick={HandleSubmit}>Submit</button>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Roll Number</th>
                        <th>feedback</th>
                                            
                        </tr>
                </thead>
                <tbody>
                    {TableData.map((key,value)=>(
                        <tr>
                            <td>{key.name}</td>
                            <td>{key.roll}</td>
                            <td>{key.feedback}</td>
                        </tr>
                    ))}
                    
                </tbody>
            </table>
        </div>
        
    )
}