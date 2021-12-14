import { useState, useEffect } from "react";

const Progress = ({ isMainPage }) => {
    const [progress, setProgress] = useState(0);
    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        const position = window.pageYOffset;
        setScroll(position);

        let progressBarHandler = () => {
            setProgress((document.body.scrollTop || document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight) * 100);
        }
        window.addEventListener("scroll", progressBarHandler);
        return () => window.removeEventListener("scroll", progressBarHandler);
    }, []);

    useEffect(() => {
        const position = window.pageYOffset;
        setScroll(position);

        window.addEventListener("scroll", () => {
            if (isMainPage) {
                setScroll(window.scrollY > 10);
            } else {
                setScroll(window.scrollY > 285);
            }
        });
        // eslint-disable-next-line
    }, []);

    if (isMainPage || scroll) {
        return (
            <div className="header">
                <div style={{ width: progress + "%" }} className="progress-bar" id="myBar" />
            </div>
        )
    } else {
        return (
            <div className="header" style={{ display: "none" }}>
                <div style={{ width: progress + "%" }} className="progress-bar" id="myBar" />
            </div>
        )
    }
}

export default Progress
