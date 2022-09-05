import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import {Routes, Route, Link} from 'react-router-dom'
import LiveBanner from './LiveBanner';
import styled from "styled-components";


function App() {

  const Main = styled.div`
    margin-top : 5vh;
    display:flex;
    width : 100vw;
    height: 100vh;
    text-align: center;
    @media screen and (max-width: 768px) {
      display:block;
    }
  `

  const LeftBanner = styled.div`
    width : 60vw;
    margin-left : 10vw;
    background-color: blanchedalmond;
    @media screen and (max-width: 768px) {
      width : 100vw;
      margin : 0;
      height:100vh;
    }
  `

  const RightBanner = styled.div`
    width:40vw;
    margin-right:10vw;
    background-color : royalblue;
    @media screen and (max-width: 768px) {
      display:none;
    }
  `


  return (
    <div className="App">
      <div className="Header">
        <div className="logo">
          HomeToGether
        </div>
        <div className="Navbar">
          <Link className="Link" to="/">홈</Link>
          <Link className="Link" to="/challenge">Challenge</Link>
          <Link className="Link" to="/live">Live</Link>
          <Link className="Link" to="/routine">루틴만들기</Link>
          <Link className="Link" to="/">게시판</Link>
        </div>
        <div className="User">
          User님
        </div>
      </div>
      <Main>
        <LeftBanner>
          {/* 스토리처럼 Live 배너*/}
          <LiveBanner></LiveBanner>
        </LeftBanner>
        <RightBanner>
        </RightBanner>
      </Main>
    </div>
  );
}


export default App;
