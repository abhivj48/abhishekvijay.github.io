import './Main.css';
import Socials from './Socials';
import Typewriter from 'typewriter-effect';

export default function Main() {
    return (
        <>
            <div className="giff">
                <img src="https://i.postimg.cc/jCYCG9Lj/aboutme.gif" alt="pic" className="theGiff" />
                <span className="logo1">
                    <h1 className="mainLogo">Abhishek <span className="mainLogo1">Vijay</span></h1>
                </span>
                <span className="blinkType">
                    <Typewriter
                        options={{
                            strings: ['Web Designer', 'Web Developer'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                    <Socials /></span>
                <span className="title">
                    <p>(Web Designer & Developer)</p>
                    <Socials />
                </span>


            </div>


        </>
    )
}