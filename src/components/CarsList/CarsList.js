import React, {Component} from 'react';
import 'react-rangeslider/lib/index.css'
import  './CarsList.css'
import CarCard from '../CarCard/CarCard';
import {carsData} from '../../carsData';

class CarsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            carsList: [],

            mileageBold:'normal',
            sunRoofBold:'normal',
            fourWheelDriveBold:'normal',
            powerWindowsBold:'normal',
            navigationBold:'normal',
            heatedSeatsBold:'normal',
            colorBold:'normal',

            selectedColor: '',
            selectedMileage: '',
        };
    }
    componentDidMount(){
        this.setState({carsList:carsData()})
    }
    componentWillReceiveProps(nextProps, nextState) {
        this.setState({
            mileageBold:'normal',
            sunRoofBold:'normal',
            fourWheelDriveBold:'normal',
            powerWindowsBold:'normal',
            navigationBold:'normal',
            heatedSeatsBold:'normal',
            colorBold:'normal'
        });
        let carsList = carsData();
        if(nextProps.filterAndValue)
            this.andOperation(carsList, nextProps);
        else
            this.orOperation(carsList, nextProps);
    }
    orOperation = (carsList, nextProps) => {
        let filterList = [];
        for (let filter in nextProps) {
            if (filter === 'hasSunroof' || filter === 'isFourWheelDrive' || filter === 'hasPowerWindows' || filter === 'hasNavigation' || filter === 'hasHeatedSeats'){
                if(nextProps[filter])
                    filterList.push(filter);
            }
            if (filter === 'mileage' && nextProps[filter] !== 0)
                filterList.push(filter);
            if (filter === 'color' && nextProps[filter] !== '')
                filterList.push(filter);
        }
        if (filterList.length === 0)
            this.setState({carsList: carsList});
        else {
            let selectedColor = '';
            let selectedMileage = '';
            let resList = carsList.filter((car) => {
                for (let i = 0; i < filterList.length; i++) {
                    if (filterList[i] === 'hasSunroof' || filterList[i] === 'isFourWheelDrive' || filterList[i] === 'hasHeatedSeats' || filterList[i] === 'hasNavigation' || filterList[i] === 'hasPowerWindows') {
                        if (car[filterList[i]])
                            return true;
                    }
                    if (filterList[i] === 'color') {
                        selectedColor = nextProps[filterList[i]];
                        if (nextProps[filterList[i]] === car['color'])
                            return true;
                    }
                    if (filterList[i] === 'mileage') {
                        selectedMileage = nextProps[filterList[i]];
                        if (car['mileage'] <= nextProps[filterList[i]])
                            return true;
                    }
                }
            });

            let map = {};
            map['color'] = 'colorBold';
            map['mileage'] = 'mileageBold';
            map['hasSunroof'] = 'sunRoofBold';
            map['isFourWheelDrive'] = 'fourWheelDriveBold';
            map['hasPowerWindows'] = 'powerWindowsBold';
            map['hasNavigation'] = 'navigationBold';
            map['hasHeatedSeats'] = 'heatedSeatsBold';

            for (let i = 0; i < filterList.length; i++) {
                this.setState({[map[filterList[i]]]: 'bold'})
            }
            this.setState({
                carsList: resList,
                selectedColor: selectedColor,
                selectedMileage: selectedMileage
            });
        }
    };

    andOperation = (carsList, nextProps) =>{
        let fulfilledProperty = {};
        let selectedColor = '';
        let selectedMileage = '';
        let sunRoofFiltered = carsList.filter(car =>{
            if(nextProps.hasSunroof === true){
                fulfilledProperty['hasSunroof'] = 'bold';
                return car.hasSunroof === nextProps.hasSunroof;
            }
            return true;
        });
        let colorFiltered = sunRoofFiltered.filter(car =>{
            if(nextProps.color==='')
                return true;
            if(car.color === nextProps.color){
                selectedColor = nextProps['color'];
                fulfilledProperty['color'] = 'bold';
            }
            fulfilledProperty['color'] = 'bold';
            return car.color === nextProps.color;
        });
        let fourWheelDriveFiltered = colorFiltered.filter(car =>{
            if(nextProps.isFourWheelDrive === true){
                fulfilledProperty['isFourWheelDrive'] = 'bold';
                return car.isFourWheelDrive === nextProps.isFourWheelDrive;
            }
            return true;
        });
        let powerWindowsFiltered = fourWheelDriveFiltered.filter(car =>{
            if(nextProps.hasPowerWindows === true){
                fulfilledProperty['hasPowerWindows'] = 'bold';
                return car.hasPowerWindows === nextProps.hasPowerWindows;
            }
            return true;
        });
        let navigationFiltered = powerWindowsFiltered.filter(car =>{
            if(nextProps.hasNavigation === true){
                fulfilledProperty['hasNavigation'] = 'bold';
                return car.hasNavigation === nextProps.hasNavigation;
            }
            return true;
        });
        let heatedSeatsFiltered = navigationFiltered.filter(car =>{
            if(nextProps.hasHeatedSeats === true){
                fulfilledProperty['hasHeatedSeats'] = 'bold';
                return car.hasHeatedSeats === nextProps.hasHeatedSeats;
            }
            return true;
        });
        let mileageFiltered = heatedSeatsFiltered.filter(car =>{
            if(nextProps.mileage === 0){
                fulfilledProperty['mileage'] = 'normal';
                return true;
            }else{
                if(car.mileage <= nextProps.mileage){
                    selectedMileage = nextProps.mileage;
                    fulfilledProperty['mileage'] = 'bold';
                }
            }
            return car.mileage <= nextProps.mileage;
        });

        this.setState({
            carsList:mileageFiltered,
            colorBold:fulfilledProperty['color'] === undefined? 'normal': fulfilledProperty['color'],
            sunRoofBold:fulfilledProperty['hasSunroof'] === undefined? 'normal': fulfilledProperty['hasSunroof'],
            fourWheelDriveBold:fulfilledProperty['isFourWheelDrive'] === undefined? 'normal': fulfilledProperty['isFourWheelDrive'],
            powerWindowsBold:fulfilledProperty['hasPowerWindows'] === undefined? 'normal': fulfilledProperty['hasPowerWindows'],
            navigationBold:fulfilledProperty['hasNavigation'] === undefined? 'normal': fulfilledProperty['hasNavigation'],
            heatedSeatsBold:fulfilledProperty['hasHeatedSeats'] === undefined? 'normal': fulfilledProperty['hasHeatedSeats'],
            mileageBold:fulfilledProperty['mileage'] === undefined? 'normal': fulfilledProperty['mileage'],
            selectedColor:selectedColor,
            selectedMileage:selectedMileage
        });
    };

    getCars = (carsList) =>{
        return carsList.map((data, index)=>(
            <CarCard
                key = {index}
                data = {data}
                colorBold = {data.color === this.state.selectedColor? this.state.colorBold: 'normal'}
                mileageBold = {data.mileage < this.state.selectedMileage? this.state.mileageBold: 'normal'}
                heatedSeatsBold = {data.hasHeatedSeats === true? this.state.heatedSeatsBold: 'normal'}
                hasNavigationBold = {data.hasNavigation === true? this.state.navigationBold: 'normal'}
                hasPowerWindowsBold = {data.hasPowerWindows === true? this.state.powerWindowsBold: 'normal'}
                hasSunRoofBold = {data.hasSunroof === true? this.state.sunRoofBold: 'normal'}
                isFourWheelDriveBold = {data.isFourWheelDrive === true? this.state.fourWheelDriveBold: 'normal'}
            />
        ))
    };
    render(){
        return(
            <div className = "carsContainer">
                {this.getCars(this.state.carsList)}
            </div>
        )
    }
}

export default CarsList;
