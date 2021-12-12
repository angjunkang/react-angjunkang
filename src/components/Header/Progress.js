import { useState, useEffect } from "react";

const Progress = () => {
    const [scroll, setScroll] = useState(0);

    useEffect(() => {
        const position = window.pageYOffset;
        setScroll(position);

        let progressBarHandler = () => {
            setScroll((document.body.scrollTop || document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight) * 100);
        }
        window.addEventListener("scroll", progressBarHandler);
        return () => window.removeEventListener("scroll", progressBarHandler);
    }, []);

    return (
        <div className="header">
            <div style={{ width: scroll + "%" }} className="progress-bar" id="myBar" />
        </div>
    )
}

export default Progress
