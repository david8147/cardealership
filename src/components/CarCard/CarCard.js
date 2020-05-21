import React, {Component} from 'react';
import './CarCard.css'

class CarCard extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render(){
        return(
            <div data-testid = "carCard" className = "carCard">
                <p data-testid = "pMake" style={{margin:0}}>Make: {this.props.data.make}</p>
                <p data-testid = "pColor" style={{margin:0, fontWeight:this.props.colorBold}}>Color: {this.props.data.color}</p>
                <p data-testid = "pPrice" style={{margin:0}}>Price: ${this.props.data.price}</p>
                <p data-testid = "pYear" style={{margin:0}}>Year: {this.props.data.year}</p>
                <p data-testid = "pMileage" style={{margin:0, fontWeight:this.props.mileageBold}}>Mileage: {this.props.data.mileage}</p>
                <p data-testid = "pLowMiles" style={{margin:0, fontWeight:this.props.mileageBold}}>Has Low Miles: {this.props.data.hasLowMiles.toString()}</p>
                <p data-testid = "pHeatedSeats" style={{margin:0, fontWeight:this.props.heatedSeatsBold}}>Has Heated Seats: {this.props.data.hasHeatedSeats.toString()}</p>
                <p data-testid = "pNavigation" style={{margin:0, fontWeight:this.props.hasNavigationBold}}>Has Navigation: {this.props.data.hasNavigation.toString()}</p>
                <p data-testid = "pPowerWindows" style={{margin:0, fontWeight:this.props.hasPowerWindowsBold}}>Has Power Windows: {this.props.data.hasPowerWindows.toString()}</p>
                <p data-testid = "pSunRoof" style={{margin:0, fontWeight:this.props.hasSunRoofBold}}>Has Sunroof: {this.props.data.hasSunroof.toString()}</p>
                <p data-testid = "pFourWheelDrive" style={{margin:0, fontWeight:this.props.isFourWheelDriveBold}}>Is Four Wheel Drive: {this.props.data.isFourWheelDrive.toString()}</p>
            </div>
        )
    }
}

export default CarCard;
