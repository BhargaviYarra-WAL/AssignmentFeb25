import { useState, useEffect } from "react";
import axios from "axios";
const Boredapi= ()=>{
    let [act, setAct] = useState(["default"])
    useEffect(()=>{
        axios.get("https://www.boredapi.com/api/activity").then((res)=>{
            setAct(res.data)
        })
    })
    return(
        <div className="Activity">
            <h2>Activities</h2>
            <p><strong>ACTIVITY:{act.activity}</strong></p>
            <p><strong>TYPE:{act.type}</strong></p>
            <p><strong>PARTICIPANTS:{act.participants}</strong></p>
            <p><strong>PRICE:{act.price}</strong></p>
            <p><strong>LINK:{act.link}</strong></p>
            <p><strong>KEY:{act.key}</strong></p>
            <p><strong>ACCESSABILITY:{act.accessibility}</strong></p>
        </div>
    )
}

export default Boredapi;