import './contant.css';
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
// import { motion } from "motion/react" 
const Contant = () => {
    return (
        <section className='content-us' id='content'>
            <h1>
                <span className='icon-envelope'></span>
                <span className='tilte'>Contact Us</span>
            </h1>
            <p className='sub-title'>Contact us for more information and Git notified when i publish something new</p>


            <div className="flex">
                <form action="https://api.web3forms.com/submit" method="POST" >
                    <div className='flex'>
                        <input type="hidden" name="access_key" value="9c892b62-e33b-420d-83f3-d93173678d38"></input>
                    <label htmlFor="email">Email Address</label>
                    <input required type="email" name=' ' id='email' placeholder='Email'/>
                    </div>

                    <div className='flex' style={{marginTop:"24px"}} >
                    <label  htmlFor="textarea">Your Message</label>
                    <textarea name=" " id="textarea" placeholder='Message'></textarea>
                    </div>
                    <button className='submit'>Submit</button>
                    
                </form>
{/* public/animation/Done.json */}
                <div className="animation" >
                        <DotLottieReact src="./animation/Email.json"
                        style={{height:"350px"}}
                        autoplay muted loop controls />
                        
                        </div>
            
            </div>

        </section>
    );
};
export default Contant; 