import {useEffect, useState} from 'react';
import './header.css';
const Header = ({oncvClick}) => {
    const[showmodel, setShowmodel] = useState(false);
    const[them , setThem] = useState(localStorage.getItem("currentMode")?? "light");
    useEffect(()=>{
        if(them ==="dark"){
        document.body.classList.remove("dark")
        document.body.classList.add("light")
        }
        else {
            document.body.classList.remove("light")
            document.body.classList.add("dark")
        }
    } , [them] );
    return (
        <header className="flex">
            <button onClick={() => {
                setShowmodel(true)

            }} className="icon-menu flex" />
            
            <div/ >
            <nav>
                <ul className="flex">
                    <li><a href="#">About</a></li>
                    <li><a href="#main-section">Projects</a></li>
                    <li><a href="#certificate">certificates</a></li>
                    <li><a href="#cv-button" onClick={oncvClick}>CV</a></li>
                    <li><a href="#content">Contact</a></li>
                </ul>
            </nav>


            <button onClick={ () => {
                //send value to local storage
                    localStorage.setItem ("currentMode" ,them ==="light"? "dark" :"light")
                //get value from local storage
                    setThem(localStorage.getItem("currentMode"))
            }} className="icon-m flex"  >
                { them==="light" ? (<span className="icon-moon-o" > </span>)
                :(<span className='icon-brightness-up' ></span>)}
                </button>



{ showmodel && (
    
            <div className="fixed">
                    <ul className="model">
                        <li className="close-btn">
                            <button className="icon-close1" onClick={() => {
                                setShowmodel(false)
                                }}/>
                        </li>
                        <li className="first-child"><a href="#">About</a></li>
                        <li><a href="#main-section">Projects</a></li>
                        <li><a href="#certificate">certificates</a></li>
                        <li><a href="#cv-button" onClick={oncvClick}>CV</a></li>
                        <li><a href="#content">Contact</a></li>
                    </ul>
            </div>
)}
        </header>
    );
};

export default Header;