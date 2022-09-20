import {useState, useEffect} from "react";
import './App.css';
function LiveBanner(){
    

    // 임시로 만든 id
    let [id,id_edit] = useState([
        'miki','mini','moana','rabbit','ariel','hama'
    ]); 
    // 임시로 만든 이미지 url
    let [img_url,url_edit] = useState([
        "/miki.png","/mini.png","/moana.png",
        "/rabbit.png","/ariel.png","/hama.png",
    ]);
  
    useEffect(()=>{

        const canvases = document.querySelectorAll('canvas');
        console.log(canvas)
        for(var i=0;i<canvases.length;i++){
            console.log(canvases[i])
            var canvas = canvases[i]
            
            var myImage = `${img_url[i]}`
            console.log(canvas.width)
            addImage(canvas,myImage)
            
        }



    },[])
    
 
    return(
        <div className="LiveBanner">
            <div className="LiveContainer" >
                {
                    id.map(function(ele,idx){
                        return(
                        <LiveBox key={idx} id={ele} url={img_url[idx]} idx={idx}>
                            {/* 예시로 - 여섯번 LiveBox 출력하기 */}
                        </LiveBox>
                        );
                    })
                }
            </div>
        </div>
    );
}
function addImage(canvas,image){
    var ctx = canvas.getContext('2d');
    var img = new Image;
    img.src = image;
    img.onload = function(){
        ctx.drawImage(img,0,0,canvas.width,canvas.height)
    }
}
function LiveBox(props){
    

    return(
        <button className="LiveBox">
            <StateBox url={props.url} idx={props.idx}></StateBox>
            <NameBox id={props.id}></NameBox>
        </button>
    );
}

// canvas 안에 image 넣기



function StateBox(props){
    // props.url : 이미지 url\
    return(
        <div className="StateBox">
            <canvas className="StateCircle" id={props.idx}>
            </canvas>
            
            {/* <span className="ProfileImg"  width="66px;">
                <img src="/miki.png" width="10px;" style={{objectFit:'cover'}}></img>
            </span> */}
        </div>
    )
}
function NameBox(props){
    return(
        <div className="NameBox">
            {
                props.id
            }
        </div>
    )
}

export default LiveBanner;