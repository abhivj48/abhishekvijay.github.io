import educationImg from '../Img/education.gif';
import './Education.css'


export default function Education(){
    return(
        <>
        <div className="education">
            <div className="gifOfEdu">
                <img className="gifOfEduReal" src={educationImg} alt="Education" />
            </div>
        <div className="text">
            <h1 className="headForEdu">2012</h1>
            <p className="paraOfEdu">In this year i completed my 10th grade from <a className="aLink" href="http://jvpschool.com/home.aspx" target="_blank" rel="noreferrer"> JVP International School</a>.</p>
            <hr className="lineForEdu" />
            <h1 className="headForEdu">2015</h1>
            <p className="paraOfEdu">In 2015 I completed My 12th Grade from <a className="aLink" href="https://vidhyant.com/schools/1189510/Saint-George-Academy-Senior-Secondary-School-Pratap-Nagar"  rel="noreferrer" target="_blank"> Saint Gorge Acadmy</a>.</p>
            <hr className="lineForEdu" />

            <h1 className="headForEdu">2020</h1>
            <p className="paraOfEdu">In This year I Completed Computer Scince Engineering from <a className="aLink" href="http://www.kautilya.net" target="_blank" rel="noreferrer">Kautilya Institute of Technology & Engineering Jaipur</a>.</p>
        </div>
        </div>

           </>
    )
}