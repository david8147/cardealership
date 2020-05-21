import React from 'react';
import CarsList from '../CarsList'

import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

it("Test CarsList Default Values", () => {
    let wrapper = mount(<CarsList />);
    expect(wrapper.state('mileageBold')).toEqual('normal');
    expect(wrapper.state('sunRoofBold')).toEqual('normal');
    expect(wrapper.state('fourWheelDriveBold')).toEqual('normal');
    expect(wrapper.state('powerWindowsBold')).toEqual('normal');
    expect(wrapper.state('navigationBold')).toEqual('normal');
    expect(wrapper.state('heatedSeatsBold')).toEqual('normal');
    expect(wrapper.state('colorBold')).toEqual('normal');

    expect(wrapper.state('selectedColor')).toEqual('');
    expect(wrapper.state('selectedMileage')).toEqual('');

    expect(wrapper.state('carsList')).toHaveLength(9);

});

it("CarsList AND function test", () => {
    let wrapper = mount(<CarsList/>);
    wrapper.setProps({
            color: 'Black',
            mileage: 50000,
            hasSunroof:false,
            isFourWheelDrive:false,
            hasPowerWindows:false,
            hasNavigation:false,
            hasHeatedSeats:false,
            filterAndValue:true,
    });
    expect(wrapper.state('mileageBold')).toEqual('bold');
    expect(wrapper.state('sunRoofBold')).toEqual('normal');
    expect(wrapper.state('fourWheelDriveBold')).toEqual('normal');
    expect(wrapper.state('powerWindowsBold')).toEqual('normal');
    expect(wrapper.state('navigationBold')).toEqual('normal');
    expect(wrapper.state('heatedSeatsBold')).toEqual('normal');
    expect(wrapper.state('colorBold')).toEqual('bold');

    expect(wrapper.state('selectedColor')).toEqual('Black');
    expect(wrapper.state('selectedMileage')).toEqual(50000);

    expect(wrapper.state('carsList')).toHaveLength(2);

    let carsList = [];
    for(let i = 0; i < wrapper.state('carsList').length; i++){
        carsList.push(wrapper.state('carsList')[i]._id);
    }
    expect(carsList.sort()).toEqual(["59d2698c6f1dc2cbec89c413", "59d2698cd6a3b8f0dd994c9d"].sort());


});




it("CarsList OR function test", () => {
    let wrapper = mount(<CarsList/>);
    wrapper.setProps({
        color: 'Black',
        mileage: 0,
        hasSunroof:false,
        isFourWheelDrive:false,
        hasPowerWindows:false,
        hasNavigation:false,
        hasHeatedSeats:true,
        filterAndValue:false,
    });
    expect(wrapper.state('mileageBold')).toEqual('normal');
    expect(wrapper.state('sunRoofBold')).toEqual('normal');
    expect(wrapper.state('fourWheelDriveBold')).toEqual('normal');
    expect(wrapper.state('powerWindowsBold')).toEqual('normal');
    expect(wrapper.state('navigationBold')).toEqual('normal');
    expect(wrapper.state('heatedSeatsBold')).toEqual('bold');
    expect(wrapper.state('colorBold')).toEqual('bold');
    expect(wrapper.state('selectedColor')).toEqual('Black');
    expect(wrapper.state('selectedMileage')).toEqual('');

    expect(wrapper.state('carsList')).toHaveLength(7);

    let carsList = [];
    for(let i = 0; i < wrapper.state('carsList').length; i++){
        carsList.push(wrapper.state('carsList')[i]._id);
    }
    expect(carsList.sort()).toEqual(["59d2698c6f1dc2cbec89c413", "59d2698cd6a3b8f0dd994c9d", "59d2698c05889e0b23959106", "59d2698c340f2728382c0a73", "59d2698cba9b82c2347cd13a", "59d2698ce2e7eeeb4f109001", "59d2698cda9e8d39476c678a"].sort());

});
