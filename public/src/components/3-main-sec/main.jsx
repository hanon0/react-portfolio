import { useState } from 'react';
import  './main.css';
import { AnimatePresence, motion } from "motion/react"
const myProjects =[
    {projectTitle: "GSAP" , catagory:"javaScrept" , imgPath:"./can-animation.png" , linkPath: "https://hanon0.github.io/can-animation/" , textDes: "A dynamic landing page built using JavaScript and GSAP to practice creating smooth and complex web animations."},
    {projectTitle: "dash-board" , catagory:"html-css" , imgPath:"./dash-bord.png" , textDes: "A dark-themed dashboard interface designed entirely with CSS to practice advanced layout techniques and UI structuring." },
    {projectTitle: "css" , catagory:"html-css" , imgPath:"./Screenshot 2026-06-19 063005.png", linkPath:"https://hanon0.github.io/css_test/#", textDes: "A front-end training project utilizing pure CSS to style and structure a responsive landing page for a student activity." }
];
const Main =() => {
    const[currentActive , setcurrentActive] = useState("all");
    const[array , setarray] = useState(myProjects) ;
    return (
        <main className='flex' id='main-section'>
        <section className=' flex left-section'>
            {/* first */}
            <button onClick={() => {
                setcurrentActive("all")
                setarray(myProjects) 
            }}  className={currentActive==="all" ? "Active" : null} >
                All Projects</button>

               {/* second */}
            <button onClick={() => {
                setcurrentActive("css");
                const newarr = myProjects.filter((item) => {
                return item.catagory==="html-css"
                })
                setarray(newarr);
            }} className={currentActive==="css" ? "Active": null}>
                HTML && CSS</button> 

                {/* third */}
            <button onClick={()=> {
                setcurrentActive("js")
                const newarray =myProjects.filter((item) =>{
                    return  item.catagory==="javaScrept"
                    
                })
                setarray(newarray);
                
            }} className={currentActive==="js" ? "Active" : null}>
                JavaScript</button>

                {/* fourth */}
            <button onClick={() => {
                setcurrentActive("react")
                const newarr = myProjects.filter((item) =>{
                return item.catagory===" "
                })
                setarray([]);
            }} className={currentActive==="react" ? "Active" : null}>
                React</button>


                {/* fifth */}
            <button onClick={() => {
                setcurrentActive("node")
                const newarr = myProjects.filter((item) =>{
                return item.catagory===" "
                })
                setarray([]);
            }} className={currentActive ==="node" ? "Active" : null}>
                Node & Express</button>
        </section>
        


        <section className= ' flex right-section'>
        <AnimatePresence>
        {array.map((item , index) => {
            return(
                <motion.article 
                layout
                initial={{transform:"scale(0)"}}
                animate={{transform:"scale(1)"}}
                exit={{transform:"scale(0)"}}
                transition={{type:"spring" , damping:18 , stiffness:50}}
                
                key={index}>
                <div 
                className='card'>
                <img src={item.imgPath} alt="img" />
                <div className="titles">
                    <h1 className='title-1'>{item.projectTitle}</h1>
                    <p className='sub-title'>{item.textDes}</p>
                        </div>
                    <div className="icons flex">
                        <div className='icon1 flex'>
                        <a className='icon-link' href='https://hanon0.github.io/can-animation/' target='_blank'></a>
                        <a className='icon-github' href='https://github.com/hanon0/can-animation.git' target='_blank'></a>
                        </div>

                        <a href={item.linkPath} className='link flex' target='_blank'>
                        <span>more</span>
                        <span style={{alignSelf:"end"}} className='icon-arrow-right'></span>
                        </a>
                    </div>
                </div>
            </motion.article>
            )
        })}

        </AnimatePresence>

        </section>
        </main>
    );
};
export default Main;