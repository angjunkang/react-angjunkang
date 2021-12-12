import PickupLinesImage1 from '../../../images/pickuplines-1.png'
import PickupLinesImage2 from '../../../images/pickuplines-2.png'

const PickupLines = () => {
    return (
        <div className="projects-container">
            <div className="projects-text">
                <h3 className="projects-header">Pickup Lines</h3>
                <p className="projects-description">An IOS app with access to pickup lines on your fingertips done using SwiftUI! Get access to a bunch of pickup lines with a single tap.</p>
                <h5 className="projects-badge">Swift</h5>
                <div className="projects-button button">Find out more</div>
            </div>
            <div className='projects-image'>
                <img className='image' alt="Pickup Lines Screenshot 1" src={PickupLinesImage1} />
                <img className='image' alt="Pickup Lines Screenshot 2" src={PickupLinesImage2} />
            </div>
        </div>
    )
}

export default PickupLines
