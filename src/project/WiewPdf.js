import React from "react";
import { useParams} from 'react-router-dom';
import maruza from "./Json/maruza.json";
import taqdimot from "./Json/taqdimot.json";
import amaliy from "./Json/amaliy.json";
const WiewPdf = () => {
    const parm = useParams();
    const url = parm.file.split("&");
    var arr = [];
    if(url[1] == "amaliy"){
        for(var i=0; i<amaliy[0].len;i++){
            arr.push(i+1);
        }
    }else{
        if(url[0]=="maruzaImg")
            for(var i=0; i<maruza[url[1]-1].len;i++){
                arr.push(i+1);
            }
        if(url[0]=="taqdimotImg")
            for(var i=0; i<taqdimot[url[1]-1].len;i++){
                arr.push(i+1);
            }
    }
    return (
        <div className="container border">
            <h1>Salom</h1>
            {
                <>
                    {arr.map((p)=>
                        <img key={p} className="pdf-view" src={require("./"+url[0]+"/" + url[1] + "/" + url[1] +"-"+ p +".jpg")}/>
                    )}
                </>
            }
        </div>
    );
}

export default WiewPdf;

