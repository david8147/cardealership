import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import CarCard from '../CarCard'
import {render,cleanup} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom'

afterEach(cleanup);

test('Check if bolded correctly_1', ()=>{
    let data = {
        hasHeatedSeats: true,
        hasLowMiles: true,
        hasNavigation: true,
        hasPowerWindows: true,
        hasSunroof: true,
        isFourWheelDrive: true,
        color: "Red",
        id: "zOF7ihIs9TAacXaadp73",
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
        isFourWheelDriveBold = 'bold'
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

    expect(getByTestId("pFourWheelDrive")).toHaveStyle(`margin:0; font-weight: bold;`);
    expect(getByTestId("pFourWheelDrive")).toHaveTextContent('Is Four Wheel Drive: true');
})


// if hasHeatedSeats: false, heatedSeatsBold has to be normal



test('Check if bolded correctly_2', ()=>{
    let data = {
        hasHeatedSeats: true,
        hasLowMiles: true,
        hasNavigation: true,
        hasPowerWindows: true,
        hasSunroof: true,
        isFourWheelDrive: true,
        color: "Red",
        id: "zOF7ihIs9TAacXaadp73",
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
        isFourWheelDriveBold = 'bold'
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

    expect(getByTestId("pFourWheelDrive")).toHaveStyle(`margin:0; font-weight: bold;`);
    expect(getByTestId("pFourWheelDrive")).toHaveTextContent('Is Four Wheel Drive: true');
})

