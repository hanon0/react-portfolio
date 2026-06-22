import { useEffect, useState } from 'react'
import Header from './components/1-header1/header';
import Hero from './components/2-hero/hero';
import Main from './components/3-main-sec/main';
import Contant from './components/5-contant/contant';
import Footer from './components/6-footer/footer';
import Certi from './components/4-certificat/certi';

function App() {
  const [ showScroll , setshowScroll] = useState(false)
  const [cvClick , setcvClick] =useState(0)
  useEffect(() => {
    window.addEventListener("scroll" , ()=>{
      if(window.scrollY > 200){
      setshowScroll(true)
    }
    else {
      setshowScroll(false);
    }
    })
  
  } ,[])
  return (
    <div className="container" id='up'>
  <Header oncvClick ={() => setcvClick(prev => prev + 1)} />
  <Hero cvTrigger={cvClick} />
  <div className="divder"/>
  <Main />
  <div className='divder' />
  <Certi />
  <div className="divder"/>
  <Contant />
  <div className="divder"/>
  <Footer />

  {showScroll && (
    <a href='#up' style={
      {opacity: showScroll? 1: 0 ,
      transition: "1s"}}>
  <button className='icon-keyboard_arrow_up scroll2top'></button>
  </a>
  )}
    </div>
  )
}

export default App
