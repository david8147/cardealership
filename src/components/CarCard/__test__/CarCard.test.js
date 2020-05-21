import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import CarCard from '../CarCard'
import {render} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom'


test('Check if bolded and renders text values correctly - Car_id: 59d2698ce2e7eeeb4f109001', ()=>{
    let data = {
        hasHeatedSeats: true,
        hasLowMiles: true,
        hasNavigation: true,
        hasPowerWindows: true,
        hasSunroof: true,
        isFourWheelDrive: false,
        color: "Red",
        id: "59d2698ce2e7eeeb4f109001",
        make: "Toyota",
        mileage: 5800,
        price: 19248,
        year: 2014
    };
    const { getByTestId } = render(<CarCard
        key = {0}
        data = {data}
        colorBold = 'bold'
        mileageBold = 'bold'
        heatedSeatsBold ='bold'
        hasNavigationBold = 'bold'
        hasPowerWindowsBold = 'bold'
        hasSunRoofBold ='bold'
        isFourWheelDriveBold = 'normal'
    />);
    expect(getByTestId("pMake")).toHaveStyle(`margin:0`);
    expect(getByTestId("pMake")).toHaveTextContent('Make: Toyota');

    expect(getByTestId("pColor")).toHaveStyle(`margin:0; font-weight: bold;`);
    expect(getByTestId("pColor")).toHaveTextContent('Color: Red');

    expect(getByTestId("pPrice")).toHaveStyle(`margin:0`);
    expect(getByTestId("pPrice")).toHaveTextContent('Price: $19248');

    expect(getByTestId("pYear")).toHaveStyle(`margin:0`);
    expect(getByTestId("pYear")).toHaveTextContent('Year: 2014');

    expect(getByTestId("pMileage")).toHaveStyle(`margin:0; font-weight: bold;`);
    expect(getByTestId("pMileage")).toHaveTextContent('Mileage: 5800');

    expect(getByTestId("pLowMiles")).toHaveStyle(`margin:0; font-weight: bold;`);
    expect(getByTestId("pLowMiles")).toHaveTextContent('Has Low Miles: true');

    expect(getByTestId("pHeatedSeats")).toHaveStyle(`margin:0; font-weight: bold;`);
    expect(getByTestId("pHeatedSeats")).toHaveTextContent('Has Heated Seats: true');

    expect(getByTestId("pNavigation")).toHaveStyle(`margin:0; font-weight: bold;`);
    expect(getByTestId("pNavigation")).toHaveTextContent('Has Navigation: true');

    expect(getByTestId("pPowerWindows")).toHaveStyle(`margin:0; font-weight: bold;`);
    expect(getByTestId("pPowerWindows")).toHaveTextContent('Has Power Windows: true');

    expect(getByTestId("pSunRoof")).toHaveStyle(`margin:0; font-weight: bold;`);
    expect(getByTestId("pSunRoof")).toHaveTextContent('Has Sunroof: true');

    expect(getByTestId("pFourWheelDrive")).toHaveStyle(`margin:0; font-weight: normal;`);
    expect(getByTestId("pFourWheelDrive")).toHaveTextContent('Is Four Wheel Drive: false');
})


test('Check if bolded and renders text values correctly - Car_id: 59d2698c2eaefb1268b69ee5', ()=>{
    let data = {
        hasHeatedSeats: false,
        hasLowMiles: true,
        hasNavigation: true,
        hasPowerWindows: false,
        hasSunroof: false,
        isFourWheelDrive: true,
        color: "Gray",
        id: "59d2698c2eaefb1268b69ee5",
        make: "Chevy",
        mileage: 2000,
        price: 16106,
        year: 2016
    };
    const { getByTestId } = render(<CarCard
        key = {0}
        data = {data}
        colorBold = 'bold'
        mileageBold = 'bold'
        heatedSeatsBold ='normal'
        hasNavigationBold = 'bold'
        hasPowerWindowsBold = 'normal'
        hasSunRoofBold ='normal'
        isFourWheelDriveBold = 'bold'
    />);
    expect(getByTestId("pMake")).toHaveStyle(`margin:0`);
    expect(getByTestId("pMake")).toHaveTextContent('Make: Chevy');

    expect(getByTestId("pColor")).toHaveStyle(`margin:0; font-weight: bold;`);
    expect(getByTestId("pColor")).toHaveTextContent('Color: Gray');

    expect(getByTestId("pPrice")).toHaveStyle(`margin:0`);
    expect(getByTestId("pPrice")).toHaveTextContent('Price: $16106');

    expect(getByTestId("pYear")).toHaveStyle(`margin:0`);
    expect(getByTestId("pYear")).toHaveTextContent('Year: 2016');

    expect(getByTestId("pMileage")).toHaveStyle(`margin:0; font-weight: bold;`);
    expect(getByTestId("pMileage")).toHaveTextContent('Mileage: 2000');

    expect(getByTestId("pLowMiles")).toHaveStyle(`margin:0; font-weight: bold;`);
    expect(getByTestId("pLowMiles")).toHaveTextContent('Has Low Miles: true');

    expect(getByTestId("pHeatedSeats")).toHaveStyle(`margin:0; font-weight: normal;`);
    expect(getByTestId("pHeatedSeats")).toHaveTextContent('Has Heated Seats: false');

    expect(getByTestId("pNavigation")).toHaveStyle(`margin:0; font-weight: bold;`);
    expect(getByTestId("pNavigation")).toHaveTextContent('Has Navigation: true');

    expect(getByTestId("pPowerWindows")).toHaveStyle(`margin:0; font-weight: normal;`);
    expect(getByTestId("pPowerWindows")).toHaveTextContent('Has Power Windows: false');

    expect(getByTestId("pSunRoof")).toHaveStyle(`margin:0; font-weight: normal;`);
    expect(getByTestId("pSunRoof")).toHaveTextContent('Has Sunroof: false');

    expect(getByTestId("pFourWheelDrive")).toHaveStyle(`margin:0; font-weight: bold;`);
    expect(getByTestId("pFourWheelDrive")).toHaveTextContent('Is Four Wheel Drive: true');
})

test('Check if bolded and renders text values correctly - Car_id: 59d2698c05889e0b23959106', ()=>{
    let data = {
        hasHeatedSeats: true,
        hasLowMiles: false,
        hasNavigation: false,
        hasPowerWindows: true,
        hasSunroof: true,
        isFourWheelDrive: true,
        color: "Silver",
        id: "59d2698c05889e0b23959106",
        make: "Toyota",
        mileage: 15000,
        price: 18696,
        year: 2012
    };
    const { getByTestId } = render(<CarCard
        key = {0}
        data = {data}
        colorBold = 'bold'
        mileageBold = 'bold'
        heatedSeatsBold ='bold'
        hasNavigationBold = 'normal'
        hasPowerWindowsBold = 'bold'
        hasSunRoofBold ='bold'
        isFourWheelDriveBold = 'bold'
    />);
    expect(getByTestId("pMake")).toHaveStyle(`margin:0`);
    expect(getByTestId("pMake")).toHaveTextContent('Make: Toyota');

    expect(getByTestId("pColor")).toHaveStyle(`margin:0; font-weight: bold;`);
    expect(getByTestId("pColor")).toHaveTextContent('Color: Silver');

    expect(getByTestId("pPrice")).toHaveStyle(`margin:0`);
    expect(getByTestId("pPrice")).toHaveTextContent('Price: $18696');

    expect(getByTestId("pYear")).toHaveStyle(`margin:0`);
    expect(getByTestId("pYear")).toHaveTextContent('Year: 2012');

    expect(getByTestId("pMileage")).toHaveStyle(`margin:0; font-weight: bold;`);
    expect(getByTestId("pMileage")).toHaveTextContent('Mileage: 15000');

    expect(getByTestId("pLowMiles")).toHaveStyle(`margin:0; font-weight: bold;`);
    expect(getByTestId("pLowMiles")).toHaveTextContent('Has Low Miles: false');

    expect(getByTestId("pHeatedSeats")).toHaveStyle(`margin:0; font-weight: bold;`);
    expect(getByTestId("pHeatedSeats")).toHaveTextContent('Has Heated Seats: true');

    expect(getByTestId("pNavigation")).toHaveStyle(`margin:0; font-weight: normal;`);
    expect(getByTestId("pNavigation")).toHaveTextContent('Has Navigation: false');

    expect(getByTestId("pPowerWindows")).toHaveStyle(`margin:0; font-weight: bold;`);
    expect(getByTestId("pPowerWindows")).toHaveTextContent('Has Power Windows: true');

    expect(getByTestId("pSunRoof")).toHaveStyle(`margin:0; font-weight: bold;`);
    expect(getByTestId("pSunRoof")).toHaveTextContent('Has Sunroof: true');

    expect(getByTestId("pFourWheelDrive")).toHaveStyle(`margin:0; font-weight: bold;`);
    expect(getByTestId("pFourWheelDrive")).toHaveTextContent('Is Four Wheel Drive: true');
})

test('Check if bolded and renders text values correctly - Car_id: 59d2698c6f1dc2cbec89c413', ()=>{
    let data = {
        hasHeatedSeats: false,
        hasLowMiles: false,
        hasNavigation: true,
        hasPowerWindows: true,
        hasSunroof: true,
        isFourWheelDrive: false,
        color: "Black",
        id: "59d2698c6f1dc2cbec89c413",
        make: "Mercedes",
        mileage: 45000,
        price: 18390,
        year: 2016
    };
    const { getByTestId } = render(<CarCard
        key = {0}
        data = {data}
        colorBold = 'bold'
        mileageBold = 'bold'
        heatedSeatsBold ='normal'
        hasNavigationBold = 'bold'
        hasPowerWindowsBold = 'bold'
        hasSunRoofBold ='bold'
        isFourWheelDriveBold = 'normal'
    />);
    expect(getByTestId("pMake")).toHaveStyle(`margin:0`);
    expect(getByTestId("pMake")).toHaveTextContent('Make: Mercedes');

    expect(getByTestId("pColor")).toHaveStyle(`margin:0; font-weight: bold;`);
    expect(getByTestId("pColor")).toHaveTextContent('Color: Black');

    expect(getByTestId("pPrice")).toHaveStyle(`margin:0`);
    expect(getByTestId("pPrice")).toHaveTextContent('Price: $18390');

    expect(getByTestId("pYear")).toHaveStyle(`margin:0`);
    expect(getByTestId("pYear")).toHaveTextContent('Year: 2016');

    expect(getByTestId("pMileage")).toHaveStyle(`margin:0; font-weight: bold;`);
    expect(getByTestId("pMileage")).toHaveTextContent('Mileage: 45000');

    expect(getByTestId("pLowMiles")).toHaveStyle(`margin:0; font-weight: bold;`);
    expect(getByTestId("pLowMiles")).toHaveTextContent('Has Low Miles: false');

    expect(getByTestId("pHeatedSeats")).toHaveStyle(`margin:0; font-weight: normal;`);
    expect(getByTestId("pHeatedSeats")).toHaveTextContent('Has Heated Seats: false');

    expect(getByTestId("pNavigation")).toHaveStyle(`margin:0; font-weight: bold;`);
    expect(getByTestId("pNavigation")).toHaveTextContent('Has Navigation: true');

    expect(getByTestId("pPowerWindows")).toHaveStyle(`margin:0; font-weight: bold;`);
    expect(getByTestId("pPowerWindows")).toHaveTextContent('Has Power Windows: true');

    expect(getByTestId("pSunRoof")).toHaveStyle(`margin:0; font-weight: bold;`);
    expect(getByTestId("pSunRoof")).toHaveTextContent('Has Sunroof: true');

    expect(getByTestId("pFourWheelDrive")).toHaveStyle(`margin:0; font-weight: normal;`);
    expect(getByTestId("pFourWheelDrive")).toHaveTextContent('Is Four Wheel Drive: false');
})


test('Check if bolded and renders text values correctly - Car_id: 59d2698c340f2728382c0a73', ()=>{
    let data = {
        hasHeatedSeats: true,
        hasLowMiles: true,
        hasNavigation: false,
        hasPowerWindows: true,
        hasSunroof: true,
        isFourWheelDrive: false,
        color: "White",
        id: "59d2698c340f2728382c0a73",
        make: "Toyota",
        mileage: 5300,
        price: 15895,
        year: 2015
    };
    const { getByTestId } = render(<CarCard
        key = {0}
        data = {data}
        colorBold = 'bold'
        mileageBold = 'bold'
        heatedSeatsBold ='bold'
        hasNavigationBold = 'normal'
        hasPowerWindowsBold = 'bold'
        hasSunRoofBold ='bold'
        isFourWheelDriveBold = 'normal'
    />);
    expect(getByTestId("pMake")).toHaveStyle(`margin:0`);
    expect(getByTestId("pMake")).toHaveTextContent('Make: Toyota');

    expect(getByTestId("pColor")).toHaveStyle(`margin:0; font-weight: bold;`);
    expect(getByTestId("pColor")).toHaveTextContent('Color: White');

    expect(getByTestId("pPrice")).toHaveStyle(`margin:0`);
    expect(getByTestId("pPrice")).toHaveTextContent('Price: $15895');

    expect(getByTestId("pYear")).toHaveStyle(`margin:0`);
    expect(getByTestId("pYear")).toHaveTextContent('Year: 2015');

    expect(getByTestId("pMileage")).toHaveStyle(`margin:0; font-weight: bold;`);
    expect(getByTestId("pMileage")).toHaveTextContent('Mileage: 5300');

    expect(getByTestId("pLowMiles")).toHaveStyle(`margin:0; font-weight: bold;`);
    expect(getByTestId("pLowMiles")).toHaveTextContent('Has Low Miles: true');

    expect(getByTestId("pHeatedSeats")).toHaveStyle(`margin:0; font-weight: bold;`);
    expect(getByTestId("pHeatedSeats")).toHaveTextContent('Has Heated Seats: true');

    expect(getByTestId("pNavigation")).toHaveStyle(`margin:0; font-weight: normal;`);
    expect(getByTestId("pNavigation")).toHaveTextContent('Has Navigation: false');

    expect(getByTestId("pPowerWindows")).toHaveStyle(`margin:0; font-weight: bold;`);
    expect(getByTestId("pPowerWindows")).toHaveTextContent('Has Power Windows: true');

    expect(getByTestId("pSunRoof")).toHaveStyle(`margin:0; font-weight: bold;`);
    expect(getByTestId("pSunRoof")).toHaveTextContent('Has Sunroof: true');

    expect(getByTestId("pFourWheelDrive")).toHaveStyle(`margin:0; font-weight: normal;`);
    expect(getByTestId("pFourWheelDrive")).toHaveTextContent('Is Four Wheel Drive: false');
})



test('Check if bolded and renders text values correctly - Car_id: 59d2698cba9b82c2347cd13a', ()=>{
    let data = {
        hasHeatedSeats: true,
        hasLowMiles: false,
        hasNavigation: true,
        hasPowerWindows: false,
        hasSunroof: false,
        isFourWheelDrive: true,
        color: "Gray",
        id: "59d2698cba9b82c2347cd13a",
        make: "Ford",
        mileage: 14000,
        price: 19710,
        year: 2014
    };
    const { getByTestId } = render(<CarCard
        key = {0}
        data = {data}
        colorBold = 'bold'
        mileageBold = 'bold'
        heatedSeatsBold ='bold'
        hasNavigationBold = 'bold'
        hasPowerWindowsBold = 'normal'
        hasSunRoofBold ='normal'
        isFourWheelDriveBold = 'bold'
    />);
    expect(getByTestId("pMake")).toHaveStyle(`margin:0`);
    expect(getByTestId("pMake")).toHaveTextContent('Make: Ford');

    expect(getByTestId("pColor")).toHaveStyle(`margin:0; font-weight: bold;`);
    expect(getByTestId("pColor")).toHaveTextContent('Color: Gray');

    expect(getByTestId("pPrice")).toHaveStyle(`margin:0`);
    expect(getByTestId("pPrice")).toHaveTextContent('Price: $19710');

    expect(getByTestId("pYear")).toHaveStyle(`margin:0`);
    expect(getByTestId("pYear")).toHaveTextContent('Year: 2014');

    expect(getByTestId("pMileage")).toHaveStyle(`margin:0; font-weight: bold;`);
    expect(getByTestId("pMileage")).toHaveTextContent('Mileage: 14000');

    expect(getByTestId("pLowMiles")).toHaveStyle(`margin:0; font-weight: bold;`);
    expect(getByTestId("pLowMiles")).toHaveTextContent('Has Low Miles: false');

    expect(getByTestId("pHeatedSeats")).toHaveStyle(`margin:0; font-weight: bold;`);
    expect(getByTestId("pHeatedSeats")).toHaveTextContent('Has Heated Seats: true');

    expect(getByTestId("pNavigation")).toHaveStyle(`margin:0; font-weight: bold;`);
    expect(getByTestId("pNavigation")).toHaveTextContent('Has Navigation: true');

    expect(getByTestId("pPowerWindows")).toHaveStyle(`margin:0; font-weight: normal;`);
    expect(getByTestId("pPowerWindows")).toHaveTextContent('Has Power Windows: false');

    expect(getByTestId("pSunRoof")).toHaveStyle(`margin:0; font-weight: normal;`);
    expect(getByTestId("pSunRoof")).toHaveTextContent('Has Sunroof: false');

    expect(getByTestId("pFourWheelDrive")).toHaveStyle(`margin:0; font-weight: bold;`);
    expect(getByTestId("pFourWheelDrive")).toHaveTextContent('Is Four Wheel Drive: true');
})




describe('Snapshot tests', ()=>{
    let data = {
        color: "Red",
        hasHeatedSeats: false,
        hasLowMiles: true,
        hasNavigation: true,
        hasPowerWindows: false,
        hasSunroof: false,
        id: "zOF7ihIs9TAacXaadp73",
        isFourWheelDrive: false,
        make: "Toyota",
        mileage: 5800,
        price: 19248,
        year: 2014
    };
    it('match snapshot', ()=>{
        let tree = renderer.create(<CarCard key = {0}
                                            data = {data}
                                            colorBold = {true}
                                            mileageBold = {true}
                                            heatedSeatsBold = {false}
                                            hasNavigationBold = {true}
                                            hasPowerWindowsBold = {false}
                                            hasSunRoofBold = {false}
                                            isFourWheelDriveBold = {false}/>).toJSON();
        expect(tree).toMatchSnapshot();
    })

})
