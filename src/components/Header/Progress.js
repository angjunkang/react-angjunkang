import { useState, useEffect } from "react";

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }
  
function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  
    useEffect(() => {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    return windowDimensions;
  }

const Progress = ({ isMainPage }) => {
    const [progress, setProgress] = useState(0);
    const [scroll, setScroll] = useState(false);
    const { width } = useWindowDimensions();

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
            if (isMainPage || width < 905) {
                setScroll(window.scrollY > 10);
            } else {
                setScroll(window.scrollY > 285);
            }
        });
        return () => {
            setScroll({});
        };
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
