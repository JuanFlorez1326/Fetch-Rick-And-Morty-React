import React from "react";
import './Footer.css'
import facebook from '../../../Images/Facebook.png'
import linkedin from '../../../Images/Linkedin.png'
import twitter from '../../../Images/Twitter.png'
import dribbble from '../../../Images/Dribbble.png'

export const FooterUI = () =>
{
    return (
        <footer className="fetchFooter">
            <div className="divFooter">
                <h3>Juan Pablo Patiño &copy; 2021. All Right Reserved</h3>
            </div>
            <div className="redes">
                    <a href="https://www.facebook.com" target="_blank"  rel="noreferrer"><img src={facebook} alt="Facebook"/></a>
                    <a href="https://co.linkedin.com" target="_blank" rel="noreferrer"><img src={linkedin} alt="LinkedIn"/></a>
                    <a href="https://twitter.com/?lang=es" target="_blank" rel="noreferrer" ><img src={twitter} alt="Twitter"/></a>
                    <a href="https://dribbble.com" target="_blank"  rel="noreferrer"><img src={dribbble} alt="Dribbble"/></a>
                </div>
        </footer>
    )
}