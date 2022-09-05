import {useState, useEffect} from "react";
import './App.css';
function LiveBanner(){
    return(
        <div className="LiveContainer">
            <StateCircle>
            </StateCircle>
        </div>
    );
}

function StateCircle(){
    // 스토리처럼 원모양 프로필, 이름 담기
    return(
        <div className="StateCircle">
        </div>
    );

}

export default LiveBanner;