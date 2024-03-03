import React from 'react'
import './ContactUs.css'

const ContactUs = () => {
  return (
    <div className='main'>
        <div className='heading'>
        <h1 align="center">Contact Us</h1>
        <h5 align="center">Any question or remarks? Just write us a message!</h5>
        </div>
        <div className='box'>
            <div className="left">
                <div className="leftTop">
                <h2>Contact Information</h2>
                <h5>Say something to start a live chat!</h5>
                <div className="leftMid">
                    <div className="contact">
                    <span class="material-symbols-outlined">call</span>     <p>+91 9988776655</p>                  </div>
                    <div className="email">
                    <span class="material-symbols-outlined">mail</span>                        <p>culturIndia@gmail.com</p>
                    </div>
                    <div className="address">
                    <span class="material-symbols-outlined">home</span>                        <p>Delhi,India</p>
                    </div>
                </div>
                <div className="leftBottom">
                <i class="ri-instagram-line insta"></i>
                <i class="ri-twitter-x-line twitter"></i>
                <i class="ri-whatsapp-line wp"></i>

                </div>
            </div>
            </div>
            <div className="right">
                <table border="black">
                    <form action="">
                        <tr>
                            <td>
                                <label htmlFor="">First Name</label>
                            </td>
                            <td>
                                <label htmlFor="">Last name Name</label>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input type="text" />
                            </td>
                            <td>
                                <input type="text" />
                            </td>
                        </tr>
                    </form>
                </table>
                </div> 
            </div>
        </div>
  )
}

export default ContactUs