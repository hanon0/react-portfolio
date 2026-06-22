import './certi.css'
import { useState } from 'react';
// import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;900&display=swap');

const my_certificat =[
        {projectTitle: "AFS" , subTitle:"Global STEM Accelerators program focusing on sustainability and cross-cultural exchange." , imgPath:"./certificats/Afs.jpg" , linkPath: "https://www.linkedin.com/in/hana-hossam-684871267"},
    {projectTitle: "KWK" , subTitle:"A student development initiative aimed at enhancing personal and professional skills." , imgPath:"./certificats/KWK.jpg" },
    {projectTitle: "ECPC 2025" , subTitle:"Participation in the Egyptian Collegiate Programming Contest for competitive programming." , imgPath:"./certificats/ecpc25.jpg", linkPath:"https://www.linkedin.com/in/hana-hossam-684871267" },
    {projectTitle: "Global-Circles" , subTitle:"An intercultural dialogue program connecting youth globally to discuss key issues." , imgPath:"./certificats/global-circel.jpg", linkPath:"https://www.linkedin.com/in/hana-hossam-684871267" },
    {projectTitle: "SAF" , subTitle:"Marketing Committee member in the Students Activities Family at ASU." , imgPath:"./certificats/saf.jpg", linkPath:"https://www.linkedin.com/in/hana-hossam-684871267" },
    {projectTitle: "ECPC 2024" , subTitle:"Solving complex algorithmic challenges in the Egyptian Collegiate Programming Contest." , imgPath:"./certificats/ecpc24.jpg", linkPath:"https://www.linkedin.com/in/hana-hossam-684871267" },
    {projectTitle: "Thenovation Girls" , subTitle:"Global tech competition focused on developing an impactful environmental mobile app." , imgPath:"./certificats/techinovation.jpg", linkPath:"https://www.linkedin.com/in/hana-hossam-684871267" },
    {projectTitle: "AFS 2" , subTitle:"Advanced Certificate on Global Citizenship for Social Impact from AFS." , imgPath:"./certificats/afs2.jpg", linkPath:"https://www.linkedin.com/in/hana-hossam-684871267" },
    {projectTitle: "SIC" , subTitle:"STEM and Entrepreneurship competition focused on developing innovative projects." , imgPath:"./certificats/sic.jpg", linkPath:"https://www.linkedin.com/in/hana-hossam-684871267" },
    {projectTitle: "NUCPA 2026" , subTitle:"Nile University Competitive Programming Arena, a national problem-solving contest" , imgPath:"./certificats/Nucpa2026.jpg", linkPath:"https://www.linkedin.com/in/hana-hossam-684871267" },
    {projectTitle: "Al Astro Club" , subTitle:"A student-led club dedicated to learning and exploring astronomy and space sciences." , imgPath:"./certificats/astro.jpg", linkPath:"https://www.linkedin.com/in/hana-hossam-684871267" },
    {projectTitle: "ACDL-Courseta" , subTitle:"A professional certification course completed online via the Coursera platform." , imgPath:"./certificats/icdl.jpg", linkPath:"https://www.linkedin.com/in/hana-hossam-684871267" },
    {projectTitle: "CW Idea Team" , subTitle:"Member of the Content Writing team focused on creating and developing written content." , imgPath:"./certificats/contant-writing.jpg", linkPath:"https://www.linkedin.com/in/hana-hossam-684871267" },
    {projectTitle: "ARC" , subTitle:"The Arab Reading Challenge, a regional competition fostering a passion for reading." , imgPath:"./certificats/arab-reading.jpg", linkPath:"https://www.linkedin.com/in/hana-hossam-684871267" },

];

const Certi = () =>{
        const[array , setarray] = useState(my_certificat) ;

    return (

        <section className ='certificat' id='certificate'>

        {/* <h1 className='tilte12'>certificates</h1> */}
        <div className="text">
            <span>C</span>
            <span>e</span>
            <span>r</span>
            <span>t</span>
            <span>i</span>
            <span>f</span>
            <span>i</span>
            <span>c</span>
            <span>a</span>
            <span>t</span>
            <span>e</span>
            <span>s</span>
        </div>
        
        <div className='parent flex'>


            <div className="group1 flex">
            {array.map((item, index) => {
            return(
                <article key={index}>
                <div className='card'>
                <img src={item.imgPath} alt="img" />
                <div className="titles">
                    <h1 className='title-1'>{item.projectTitle}</h1>
                    <p className='sub-title'>{item.subTitle}</p>
                        </div>
                    <div className="icons flex">
                        <div className='icon1 flex'>
                        <a className='icon-link' href='https://hanon0.github.io/can-animation/' target='_blank'></a>
                        <a className='icon-linkedin' href='https://www.linkedin.com/in/hana-hossam-684871267' target='_blank'></a>
                        </div> 

                        <a href={item.linkPath} className='link flex' target='_blank'>
                        <span>more</span>
                        <span style={{alignSelf:"end"}} className='icon-arrow-right'></span>
                        </a>
                    </div>
                </div>
            </article>
            )
        })}
        </div>

        <div className='group1 flex' aria-hidden >
            {array.map((item, index) => {
            return(
                <article key={index}>
                <div className='card'>
                <img src={item.imgPath} alt="img" />
                <div className="titles">
                    <h1 className='title-1'>{item.projectTitle}</h1>
                    <p className='sub-title'>{item.subTitle}</p>
                        </div>
                    <div className="icons flex">
                        <div className='icon1 flex'>
                        <a className='icon-link' href='https://hanon0.github.io/can-animation/' target='_blank'></a>
                        <a className='icon-linkedin' href='https://www.linkedin.com/in/hana-hossam-684871267' target='_blank'></a>
                        </div> 

                        <a href={item.linkPath} className='link flex' target='_blank'>
                        <span>more</span>
                        <span style={{alignSelf:"end"}} className='icon-arrow-right'></span>
                        </a>
                    </div>
                </div>
            </article>
            )
        })}
        </div>

        </div>
        
    </section>
    );
};

export default Certi;
