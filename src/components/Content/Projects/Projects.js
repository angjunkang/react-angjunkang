import PickupLines from "./PickupLines"
import Weather from "./Weather"
import Skylab from "./Skylab"
import PeerPrep from "./PeerPrep"

const Projects = () => {
    return (
        <div id="projects-div">
            <div className="container-wrapper">
                <div id="projects-div-header" className="text-uppercase"> Featured Projects </div>
                <PickupLines />
                <Weather />
                <Skylab />
                <PeerPrep />
            </div>
        </div>
    )
}

export default Projects
