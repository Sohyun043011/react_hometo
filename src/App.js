import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import {Routes, Route, Link} from 'react-router-dom'
import LiveBanner from './LiveBanner';
import ListContainer from './ListContainer';
import styled from "styled-components";


function App() {

  const Main = styled.div`
    display:flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items : center;
    height: 100vh;
    text-align: center;
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
        <div className="UserBar">
          <Link className='Link' to="/login">로그인</Link>
          <Link className='Link' to="/join">회원가입</Link>
        </div>
      </div>
      <Main>
          {/* 스토리처럼 Live 배너*/}
        <LiveBanner></LiveBanner>
        <ListContainer></ListContainer>
      </Main>
      <div className="Footer">
        Footer 자리
      </div>
    </div>
  );
}


export default App;
