import my from '../Img/me.jpeg';
import './About.css';

export default function AboutMe(){
    return(
        <>
        <div className="me">
            <div className="imgOfAbout">
            <img src={my} alt="Abhishek Vijay" className="imgOfMe" /></div>
            <div className="nameOfAbout">
                <h1 className="name">Abhishek vijay</h1>
                <hr className="line"/>
                <span className="location"><a href="https://www.google.com/maps/place/Jaipur,+Rajasthan/data=!4m2!3m1!1s0x396c4adf4c57e281:0xce1c63a0cf22e09?sa=X&ved=2ahUKEwiF9JXV5qnyAhWCc30KHSamBKwQ8gF6BAgFEAE" className="aForMap"><i class="bi bi-geo-alt"> Jaipur, Rajasthan</i></a></span><br />
                <br />
                <span className="paraOfAbout">1 Year Of React Js Experience</span><br />
                <span className="paraOfAbout">Passionate About Block Chain Technology And Web Development</span><br />
                <span className="paraOfAbout">Github: <a href="https://github.com/abhivj48" target="_blank" className="aAbout">Github.com/Abhivj48</a> </span><br />
                <span className="paraOfAbout">Linkdin: <a href="https://www.linkedin.com/in/abhishek-vijay-566933213/" target="_blank" className="aAbout">Abhishek Vijay</a> </span><br />

            </div>
        </div>
        </>
    )
}