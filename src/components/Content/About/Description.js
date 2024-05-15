import DisplayPicture from '../../../images/about-me-angjunkang.png'

const Description = () => {
    return (
        <div className={`description-div row fadeIn visible`} >
            <div className="description-header"></div>
            <div className="description-picture col-xl-6 col-lg-12">
                <img src={DisplayPicture} alt="Jun Kang's DP" id="about-me-picture" />
            </div>
            <div className="description-text col-xl-6 col-lg-12">
                <div className='description-text-wrapper'>
                    <p>Greetings! I'm Jun Kang, a final-year Computer Science student at National University of Singapore.
                    </p>
                    <p>My journey into the world of technology began in Singapore, where as a child, I found myself captivated by computer games and television shows centered 
                        around programming and software development. The allure of being a programmer fascinated me, and I often envisioned myself creating groundbreaking games or 
                        software that could potentially change the world. This early fascination set me on a path to Nanyang Polytechnic, where I pursued a 
                        Diploma in Information Technology.</p>
                    <p>Through my educational journey, it became apparent to me that programming is an immensely powerful tool, offering boundless possibilities. 
                        It has the capability to address intricate problems through automated solutions and turn creative ideas into reality. With modern libraries, coding languages, and
                        operating systems developing even as you are reading this, learning in this field is a
                        never-ending journey.</p>
                    <p>This realization solidified my deep passion and interest in the computing field. Today, as I near the completion of my degree, 
                        I am eager to explore new horizons and apply my skills in practical scenarios. I firmly believe in the transformative potential of technology 
                        and its ability to shape a better future.</p>
                    <p>Feel free to contact me if you would like to collaborate or discuss possibilities!</p>
                </div>
            </div>
        </div>
    )
}

export default Description
