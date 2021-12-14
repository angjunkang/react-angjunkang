import PickupLines from "./PickupLines"
import Weather from "./Weather"

const Projects = () => {
    return (
        <div id="projects-div">
            <div className="container-wrapper">
                <div id="projects-div-header" className="text-uppercase"> Featured Projects </div>
                <PickupLines />
                <Weather />
            </div>
        </div>
    )
}

export default Projects
