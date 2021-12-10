import TypeIt from "typeit-react";

const TypeItContent = () => {
    return (
        <div className="content">
            <TypeIt
                getBeforeInit={(instance) => {
                    instance.type("Hi! This is Jun Kang.").pause(1200).delete(9, {
                        speed: 200
                    }).type("my resume.").pause(1200).delete(7, {
                        speed: 200
                    }).type("portfolio.").pause(1200).delete(13, {
                        speed: 200
                    }).type("Jun Kang.").go();

                    return instance;
                }}
            />;
        </div>
    )
}

export default TypeItContent
