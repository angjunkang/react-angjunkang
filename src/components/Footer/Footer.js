import Linkedin from '../../images/linkedin.png'
import Github from '../../images/github.png'

const Footer = () => {
    return (
        <footer>
            <div className="container-wrapper">
                <div className="footer-div">
                    <a id="contact" href="mailto:irminrics@gmail.com">irminrics@gmail.com</a>
                    <br />
                    <span className="footer-header">I'm down to collaborate and discuss possibilities when I have the time. Let's keep in touch!
                        <br />
                    </span>
                    <div class="Container-flex Container--social u-marginT20">
                        <br />
                        <a className='social-icons' href="https://www.linkedin.com/in/irminrics"> <img src={Linkedin} alt="" /> </a>
                        <a className='social-icons' href="https://github.com/Irminrics"> <img src={Github} alt="" /> </a>
                        <br />
                        <div className="footer-text">
                            <br />Copyright © Jun Kang.
                            <br />Icons courtesy of FlatIcon.
                        </div><p></p>
                    </div>
                </div>
            </div>



        </footer >
    )
}

export default Footer
