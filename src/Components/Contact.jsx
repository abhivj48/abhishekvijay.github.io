import sayHello from '../Img/sayhello.gif'
import { Form,Button } from 'react-bootstrap'
import './Contact.css'


export default function ContactUs() {
    return (
        <>
            <div className="sayHelloToMe">
                <img src={sayHello} alt="hello" className="imgHello" />
                <div className="contactForm">
                    <form action="https://formsubmit.co/27a1977ca8a4c8199d609873dfbf5e7d" method="POST">
                        
                <Form.Floating className="mb-3 floatForm">
                <Form.Control
                    
                    id="floatingNameCustom"
                    className="floatForm"
                    type="text"
                    placeholder="Name"
                />
                    <label htmlFor="floatingNameCustom">Full Name</label>
                </Form.Floating>
                <Form.Floating >
                    <Form.Control
                    
                        id="floatingEmailCustom"
                        className="floatForm"
                        type="email"
                        placeholder="Email"
                    />
                    <label htmlFor="floatingEmailCustom">Email</label>
                </Form.Floating>

                <textarea className="textArea" placeholder="Hello Abhishek">
                </textarea>
                <input type="hidden" name="_captcha" value="false"/>
                <div className="btnForm">
                    <Button type="submit">Submit</Button>
                </div>
                </form>
                </div>
            </div>
        </>
    )
}