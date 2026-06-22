import './hero.css';
// import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { motion} from "motion/react";
import {useState, useEffect} from 'react';


    const Hero = ({cvTrigger}) => {
    const [isGlowing, setIsGlowing] = useState(false);

    useEffect(() => {
    if (cvTrigger > 0) {
      setIsGlowing(true); // شغل الأنيميشن
      // اطفيه بعد 1.5 ثانية عشان يكون جاهز للمرة الجاية
    const timeout = setTimeout(() => {
        setIsGlowing(false);
        }, 1500); 

        return () => clearTimeout(timeout);
    }
    }, [cvTrigger]);


    return (
        <section className="hero flex">
            <motion.div className="left-section"
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{duration:2}}
            >
            <div className="parent-avatar">
                <img className='avatar'  src="./photo_2026-06-16_15-20-31.jpg" alt="img" />
                <span className='icon-verified'></span>
            </div>
            <h1 className='title1'> Front-End Developer, Physics & Computer Science Student, Entrepreneur, and Problem Solver</h1>
            <p className='sub-title' id="cv-button">Hana Hossam, Front-End Developer and Physics & Computer Science student from Egypt. I enjoy building modern web applications, solving complex problems, and turning ideas into real-world projects. I'm passionate about technology, innovation, and creating solutions that help people and make a positive impact on society.</p>
            <div className="social-icons">
                <div className="parent-icon flex">
                <a className='icon-x' href='https://x.com/HanaHos3926' target='_blank' ></a>
                <a className='icon-linkedin' href='www.linkedin.com/in/hana-hossam-684871267' target='_blank'></a>
                <a className='icon-facebook2' href='https://www.facebook.com/hana.hossam.56232' target='_blank'></a>
                <a className='icon-github' href='https://github.com/hanon0' target='_blank' ></a>
            
                </div>
                {/* <button 
                className={isGlowing? "glow-effect" :" "}>
            <a className="btn" href="./cv.2.pdf" download="Hana_Hosaam_CV.pdf">
            <i className="fa fa-download"></i>Download CV</a>
            </button> */}

            <a 
        className={`btn ${isGlowing ? "glow-effect" : ""}`} 
        href="./cv.2.pdf" 
        download="Hana_Hosaam_CV.pdf"
        >
    <i className="fa fa-download"></i> Download CV
</a>
            </div>
            </motion.div>
            
            {/* <div className="right-section animation">
                <DotLottieReact src="public/animation/code dark.json"
                // style={{ width:"-200px"}}
                autoplay muted loop controls />
            </div> */}
        </section>
    );
};
export default Hero;