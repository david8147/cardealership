import React from 'react';
import CarsList from '../CarsList'
import renderer from 'react-test-renderer';

import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

it("Test CarsList Default Values - Nothing Checked", () => {
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
    let carsList = [];
    for(let i = 0; i < wrapper.state('carsList').length; i++){
        carsList.push(wrapper.state('carsList')[i]._id);
    }
    expect(carsList.sort()).toEqual(['59d2698c6f1dc2cbec89c413','59d2698cda9e8d39476c678a','59d2698c86ab54cee8acdc7b','59d2698cd6a3b8f0dd994c9d','59d2698ce2e7eeeb4f109001','59d2698cba9b82c2347cd13a','59d2698c340f2728382c0a73','59d2698c05889e0b23959106','59d2698c2eaefb1268b69ee5'].sort());

});
describe('All Selector Values Checked - Both AND, OR', ()=>{
    it("Test CarsList AND - All Selector Values checked", () => {
        let wrapper = mount(<CarsList />);
        wrapper.setProps({
            color: '',
            mileage: 0,
            hasSunroof:true,
            isFourWheelDrive:true,
            hasPowerWindows:true,
            hasNavigation:true,
            hasHeatedSeats:true,
            filterAndValue:true,
        });

        expect(wrapper.state('carsList')).toHaveLength(0);
    });

    it("Test CarsList OR - All Selector Values checked", () => {
        let wrapper = mount(<CarsList />);
        wrapper.setProps({
            color: '',
            mileage: 0,
            hasSunroof:true,
            isFourWheelDrive:true,
            hasPowerWindows:true,
            hasNavigation:true,
            hasHeatedSeats:true,
            filterAndValue:false,
        });

        expect(wrapper.state('carsList')).toHaveLength(8);
        let carsList = [];
        for(let i = 0; i < wrapper.state('carsList').length; i++){
            carsList.push(wrapper.state('carsList')[i]._id);
        }
        expect(carsList.sort()).toEqual(["59d2698c2eaefb1268b69ee5","59d2698c05889e0b23959106","59d2698c6f1dc2cbec89c413","59d2698c340f2728382c0a73","59d2698cba9b82c2347cd13a","59d2698ce2e7eeeb4f109001","59d2698cd6a3b8f0dd994c9d","59d2698cda9e8d39476c678a"].sort());

    });

})


describe('Test AND - Only One Checked', ()=>{
    it("Test CarsList AND - Only hasSunroof checked", () => {
        let wrapper = mount(<CarsList />);
        wrapper.setProps({
            color: '',
            mileage: 0,
            hasSunroof:true,
            isFourWheelDrive:false,
            hasPowerWindows:false,
            hasNavigation:false,
            hasHeatedSeats:false,
            filterAndValue:true,
        });
        expect(wrapper.state('mileageBold')).toEqual('normal');
        expect(wrapper.state('sunRoofBold')).toEqual('bold');
        expect(wrapper.state('fourWheelDriveBold')).toEqual('normal');
        expect(wrapper.state('powerWindowsBold')).toEqual('normal');
        expect(wrapper.state('navigationBold')).toEqual('normal');
        expect(wrapper.state('heatedSeatsBold')).toEqual('normal');
        expect(wrapper.state('colorBold')).toEqual('normal');

        expect(wrapper.state('selectedColor')).toEqual('');
        expect(wrapper.state('selectedMileage')).toEqual('');

        expect(wrapper.state('carsList')).toHaveLength(5);
        let carsList = [];
        for(let i = 0; i < wrapper.state('carsList').length; i++){
            carsList.push(wrapper.state('carsList')[i]._id);
        }
        expect(carsList.sort()).toEqual(["59d2698c05889e0b23959106", "59d2698c6f1dc2cbec89c413", "59d2698c340f2728382c0a73", "59d2698ce2e7eeeb4f109001", "59d2698cd6a3b8f0dd994c9d"].sort());
    });

    it("Test CarsList AND - Only isFourWheelDrive checked", () => {
        let wrapper = mount(<CarsList />);
        wrapper.setProps({
            color: '',
            mileage: 0,
            hasSunroof:false,
            isFourWheelDrive:true,
            hasPowerWindows:false,
            hasNavigation:false,
            hasHeatedSeats:false,
            filterAndValue:true,
        });
        expect(wrapper.state('mileageBold')).toEqual('normal');
        expect(wrapper.state('sunRoofBold')).toEqual('normal');
        expect(wrapper.state('fourWheelDriveBold')).toEqual('bold');
        expect(wrapper.state('powerWindowsBold')).toEqual('normal');
        expect(wrapper.state('navigationBold')).toEqual('normal');
        expect(wrapper.state('heatedSeatsBold')).toEqual('normal');
        expect(wrapper.state('colorBold')).toEqual('normal');

        expect(wrapper.state('selectedColor')).toEqual('');
        expect(wrapper.state('selectedMileage')).toEqual('');

        expect(wrapper.state('carsList')).toHaveLength(3);
        let carsList = [];
        for(let i = 0; i < wrapper.state('carsList').length; i++){
            carsList.push(wrapper.state('carsList')[i]._id);
        }
        expect(carsList.sort()).toEqual(["59d2698c2eaefb1268b69ee5", "59d2698c05889e0b23959106", "59d2698cba9b82c2347cd13a"].sort());
    });

    it("Test CarsList AND - Only hasPowerWindows checked", () => {
        let wrapper = mount(<CarsList />);
        wrapper.setProps({
            color: '',
            mileage: 0,
            hasSunroof:false,
            isFourWheelDrive:false,
            hasPowerWindows:true,
            hasNavigation:false,
            hasHeatedSeats:false,
            filterAndValue:true,
        });
        expect(wrapper.state('mileageBold')).toEqual('normal');
        expect(wrapper.state('sunRoofBold')).toEqual('normal');
        expect(wrapper.state('fourWheelDriveBold')).toEqual('normal');
        expect(wrapper.state('powerWindowsBold')).toEqual('bold');
        expect(wrapper.state('navigationBold')).toEqual('normal');
        expect(wrapper.state('heatedSeatsBold')).toEqual('normal');
        expect(wrapper.state('colorBold')).toEqual('normal');

        expect(wrapper.state('selectedColor')).toEqual('');
        expect(wrapper.state('selectedMileage')).toEqual('');

        expect(wrapper.state('carsList')).toHaveLength(5);
        let carsList = [];
        for(let i = 0; i < wrapper.state('carsList').length; i++){
            carsList.push(wrapper.state('carsList')[i]._id);
        }
        expect(carsList.sort()).toEqual(["59d2698c05889e0b23959106", "59d2698c6f1dc2cbec89c413", "59d2698c340f2728382c0a73", "59d2698ce2e7eeeb4f109001", "59d2698cd6a3b8f0dd994c9d"].sort());
    });


    it("Test CarsList AND - Only hasNavigation checked", () => {
        let wrapper = mount(<CarsList />);
        wrapper.setProps({
            color: '',
            mileage: 0,
            hasSunroof:false,
            isFourWheelDrive:false,
            hasPowerWindows:false,
            hasNavigation:true,
            hasHeatedSeats:false,
            filterAndValue:true,
        });
        expect(wrapper.state('mileageBold')).toEqual('normal');
        expect(wrapper.state('sunRoofBold')).toEqual('normal');
        expect(wrapper.state('fourWheelDriveBold')).toEqual('normal');
        expect(wrapper.state('powerWindowsBold')).toEqual('normal');
        expect(wrapper.state('navigationBold')).toEqual('bold');
        expect(wrapper.state('heatedSeatsBold')).toEqual('normal');
        expect(wrapper.state('colorBold')).toEqual('normal');

        expect(wrapper.state('selectedColor')).toEqual('');
        expect(wrapper.state('selectedMileage')).toEqual('');

        expect(wrapper.state('carsList')).toHaveLength(4);
        let carsList = [];
        for(let i = 0; i < wrapper.state('carsList').length; i++){
            carsList.push(wrapper.state('carsList')[i]._id);
        }
        expect(carsList.sort()).toEqual(["59d2698c2eaefb1268b69ee5", "59d2698c6f1dc2cbec89c413", "59d2698cba9b82c2347cd13a", "59d2698ce2e7eeeb4f109001"].sort());
    });

    it("Test CarsList AND - Only hasHeatedSeats checked", () => {
        let wrapper = mount(<CarsList />);
        wrapper.setProps({
            color: '',
            mileage: 0,
            hasSunroof:false,
            isFourWheelDrive:false,
            hasPowerWindows:false,
            hasNavigation:false,
            hasHeatedSeats:true,
            filterAndValue:true,
        });
        expect(wrapper.state('mileageBold')).toEqual('normal');
        expect(wrapper.state('sunRoofBold')).toEqual('normal');
        expect(wrapper.state('fourWheelDriveBold')).toEqual('normal');
        expect(wrapper.state('powerWindowsBold')).toEqual('normal');
        expect(wrapper.state('navigationBold')).toEqual('normal');
        expect(wrapper.state('heatedSeatsBold')).toEqual('bold');
        expect(wrapper.state('colorBold')).toEqual('normal');

        expect(wrapper.state('selectedColor')).toEqual('');
        expect(wrapper.state('selectedMileage')).toEqual('');

        expect(wrapper.state('carsList')).toHaveLength(5);
        let carsList = [];
        for(let i = 0; i < wrapper.state('carsList').length; i++){
            carsList.push(wrapper.state('carsList')[i]._id);
        }
        expect(carsList.sort()).toEqual(["59d2698c05889e0b23959106", "59d2698c340f2728382c0a73", "59d2698cba9b82c2347cd13a", "59d2698ce2e7eeeb4f109001", "59d2698cda9e8d39476c678a"].sort());
    });

})

describe('Test AND - Only One Color Input', ()=> {
    it("Test CarsList AND - Only Color - Black checked", () => {
        let wrapper = mount(<CarsList />);
        wrapper.setProps({
            color: 'Black',
            mileage: 0,
            hasSunroof:false,
            isFourWheelDrive:false,
            hasPowerWindows:false,
            hasNavigation:false,
            hasHeatedSeats:false,
            filterAndValue:true,
        });
        expect(wrapper.state('mileageBold')).toEqual('normal');
        expect(wrapper.state('sunRoofBold')).toEqual('normal');
        expect(wrapper.state('fourWheelDriveBold')).toEqual('normal');
        expect(wrapper.state('powerWindowsBold')).toEqual('normal');
        expect(wrapper.state('navigationBold')).toEqual('normal');
        expect(wrapper.state('heatedSeatsBold')).toEqual('normal');
        expect(wrapper.state('colorBold')).toEqual('bold');

        expect(wrapper.state('selectedColor')).toEqual('Black');
        expect(wrapper.state('selectedMileage')).toEqual('');

        expect(wrapper.state('carsList')).toHaveLength(2);
        let carsList = [];
        for(let i = 0; i < wrapper.state('carsList').length; i++){
            carsList.push(wrapper.state('carsList')[i]._id);
        }
        expect(carsList.sort()).toEqual(["59d2698c6f1dc2cbec89c413", "59d2698cd6a3b8f0dd994c9d"].sort());
    });


    it("Test CarsList AND - Only Color - Silver checked", () => {
        let wrapper = mount(<CarsList />);
        wrapper.setProps({
            color: 'Silver',
            mileage: 0,
            hasSunroof:false,
            isFourWheelDrive:false,
            hasPowerWindows:false,
            hasNavigation:false,
            hasHeatedSeats:false,
            filterAndValue:true,
        });
        expect(wrapper.state('mileageBold')).toEqual('normal');
        expect(wrapper.state('sunRoofBold')).toEqual('normal');
        expect(wrapper.state('fourWheelDriveBold')).toEqual('normal');
        expect(wrapper.state('powerWindowsBold')).toEqual('normal');
        expect(wrapper.state('navigationBold')).toEqual('normal');
        expect(wrapper.state('heatedSeatsBold')).toEqual('normal');
        expect(wrapper.state('colorBold')).toEqual('bold');

        expect(wrapper.state('selectedColor')).toEqual('Silver');
        expect(wrapper.state('selectedMileage')).toEqual('');

        expect(wrapper.state('carsList')).toHaveLength(1);
        let carsList = [];
        for(let i = 0; i < wrapper.state('carsList').length; i++){
            carsList.push(wrapper.state('carsList')[i]._id);
        }
        expect(carsList.sort()).toEqual(["59d2698c05889e0b23959106"].sort());
    });


    it("Test CarsList AND - Only Color - Gray checked", () => {
        let wrapper = mount(<CarsList />);
        wrapper.setProps({
            color: 'Gray',
            mileage: 0,
            hasSunroof:false,
            isFourWheelDrive:false,
            hasPowerWindows:false,
            hasNavigation:false,
            hasHeatedSeats:false,
            filterAndValue:true,
        });
        expect(wrapper.state('mileageBold')).toEqual('normal');
        expect(wrapper.state('sunRoofBold')).toEqual('normal');
        expect(wrapper.state('fourWheelDriveBold')).toEqual('normal');
        expect(wrapper.state('powerWindowsBold')).toEqual('normal');
        expect(wrapper.state('navigationBold')).toEqual('normal');
        expect(wrapper.state('heatedSeatsBold')).toEqual('normal');
        expect(wrapper.state('colorBold')).toEqual('bold');

        expect(wrapper.state('selectedColor')).toEqual('Gray');
        expect(wrapper.state('selectedMileage')).toEqual('');

        expect(wrapper.state('carsList')).toHaveLength(3);
        let carsList = [];
        for(let i = 0; i < wrapper.state('carsList').length; i++){
            carsList.push(wrapper.state('carsList')[i]._id);
        }
        expect(carsList.sort()).toEqual(["59d2698c2eaefb1268b69ee5","59d2698c86ab54cee8acdc7b","59d2698cba9b82c2347cd13a"].sort());
    });


    it("Test CarsList AND - Only Color - White checked", () => {
        let wrapper = mount(<CarsList />);
        wrapper.setProps({
            color: 'White',
            mileage: 0,
            hasSunroof:false,
            isFourWheelDrive:false,
            hasPowerWindows:false,
            hasNavigation:false,
            hasHeatedSeats:false,
            filterAndValue:true,
        });
        expect(wrapper.state('mileageBold')).toEqual('normal');
        expect(wrapper.state('sunRoofBold')).toEqual('normal');
        expect(wrapper.state('fourWheelDriveBold')).toEqual('normal');
        expect(wrapper.state('powerWindowsBold')).toEqual('normal');
        expect(wrapper.state('navigationBold')).toEqual('normal');
        expect(wrapper.state('heatedSeatsBold')).toEqual('normal');
        expect(wrapper.state('colorBold')).toEqual('bold');

        expect(wrapper.state('selectedColor')).toEqual('White');
        expect(wrapper.state('selectedMileage')).toEqual('');

        expect(wrapper.state('carsList')).toHaveLength(2);
        let carsList = [];
        for(let i = 0; i < wrapper.state('carsList').length; i++){
            carsList.push(wrapper.state('carsList')[i]._id);
        }
        expect(carsList.sort()).toEqual(["59d2698c340f2728382c0a73","59d2698cda9e8d39476c678a"].sort());
    });



    it("Test CarsList AND - Only Color - Red checked", () => {
        let wrapper = mount(<CarsList />);
        wrapper.setProps({
            color: 'Red',
            mileage: 0,
            hasSunroof:false,
            isFourWheelDrive:false,
            hasPowerWindows:false,
            hasNavigation:false,
            hasHeatedSeats:false,
            filterAndValue:true,
        });
        expect(wrapper.state('mileageBold')).toEqual('normal');
        expect(wrapper.state('sunRoofBold')).toEqual('normal');
        expect(wrapper.state('fourWheelDriveBold')).toEqual('normal');
        expect(wrapper.state('powerWindowsBold')).toEqual('normal');
        expect(wrapper.state('navigationBold')).toEqual('normal');
        expect(wrapper.state('heatedSeatsBold')).toEqual('normal');
        expect(wrapper.state('colorBold')).toEqual('bold');

        expect(wrapper.state('selectedColor')).toEqual('Red');
        expect(wrapper.state('selectedMileage')).toEqual('');

        expect(wrapper.state('carsList')).toHaveLength(1);
        let carsList = [];
        for(let i = 0; i < wrapper.state('carsList').length; i++){
            carsList.push(wrapper.state('carsList')[i]._id);
        }
        expect(carsList.sort()).toEqual(["59d2698ce2e7eeeb4f109001"].sort());
    });
})

describe('Test AND - All but one Checked',()=> {
    it("All but Sunroof Checked", () => {
        let wrapper = mount(<CarsList/>);
        wrapper.setProps({
            color: '',
            mileage: 0,
            hasSunroof:false,
            isFourWheelDrive:true,
            hasPowerWindows:true,
            hasNavigation:true,
            hasHeatedSeats:true,
            filterAndValue:true,
        });

        expect(wrapper.state('carsList')).toHaveLength(0);

        let carsList = [];
        for(let i = 0; i < wrapper.state('carsList').length; i++){
            carsList.push(wrapper.state('carsList')[i]._id);
        }
        expect(carsList.sort()).toEqual([].sort());
    })

    it("All but FourWheelDrive Checked", () => {
        let wrapper = mount(<CarsList/>);
        wrapper.setProps({
            color: '',
            mileage: 0,
            hasSunroof:true,
            isFourWheelDrive:false,
            hasPowerWindows:true,
            hasNavigation:true,
            hasHeatedSeats:true,
            filterAndValue:true,
        });
        expect(wrapper.state('mileageBold')).toEqual('normal');
        expect(wrapper.state('sunRoofBold')).toEqual('bold');
        expect(wrapper.state('fourWheelDriveBold')).toEqual('normal');
        expect(wrapper.state('powerWindowsBold')).toEqual('bold');
        expect(wrapper.state('navigationBold')).toEqual('bold');
        expect(wrapper.state('heatedSeatsBold')).toEqual('bold');
        expect(wrapper.state('colorBold')).toEqual('normal');

        expect(wrapper.state('selectedColor')).toEqual('');
        expect(wrapper.state('selectedMileage')).toEqual('');

        expect(wrapper.state('carsList')).toHaveLength(1);

        let carsList = [];
        for(let i = 0; i < wrapper.state('carsList').length; i++){
            carsList.push(wrapper.state('carsList')[i]._id);
        }
        expect(carsList.sort()).toEqual(['59d2698ce2e7eeeb4f109001'].sort());
    })

    it("All but PowerWindows Checked", () => {
        let wrapper = mount(<CarsList/>);
        wrapper.setProps({
            color: '',
            mileage: 0,
            hasSunroof:true,
            isFourWheelDrive:true,
            hasPowerWindows:false,
            hasNavigation:true,
            hasHeatedSeats:true,
            filterAndValue:true,
        });

        expect(wrapper.state('carsList')).toHaveLength(0);

        let carsList = [];
        for(let i = 0; i < wrapper.state('carsList').length; i++){
            carsList.push(wrapper.state('carsList')[i]._id);
        }
        expect(carsList.sort()).toEqual([].sort());
    })

    it("All but Navigation Checked", () => {
        let wrapper = mount(<CarsList/>);
        wrapper.setProps({
            color: '',
            mileage: 0,
            hasSunroof:true,
            isFourWheelDrive:true,
            hasPowerWindows:true,
            hasNavigation:false,
            hasHeatedSeats:true,
            filterAndValue:true,
        });
        expect(wrapper.state('mileageBold')).toEqual('normal');
        expect(wrapper.state('sunRoofBold')).toEqual('bold');
        expect(wrapper.state('fourWheelDriveBold')).toEqual('bold');
        expect(wrapper.state('powerWindowsBold')).toEqual('bold');
        expect(wrapper.state('navigationBold')).toEqual('normal');
        expect(wrapper.state('heatedSeatsBold')).toEqual('bold');
        expect(wrapper.state('colorBold')).toEqual('normal');

        expect(wrapper.state('selectedColor')).toEqual('');
        expect(wrapper.state('selectedMileage')).toEqual('');
        expect(wrapper.state('carsList')).toHaveLength(1);

        let carsList = [];
        for(let i = 0; i < wrapper.state('carsList').length; i++){
            carsList.push(wrapper.state('carsList')[i]._id);
        }
        expect(carsList.sort()).toEqual(['59d2698c05889e0b23959106'].sort());
    })

    it("All but HeatedSeats Checked", () => {
        let wrapper = mount(<CarsList/>);
        wrapper.setProps({
            color: '',
            mileage: 0,
            hasSunroof:true,
            isFourWheelDrive:true,
            hasPowerWindows:true,
            hasNavigation:true,
            hasHeatedSeats:false,
            filterAndValue:true,
        });

        expect(wrapper.state('carsList')).toHaveLength(0);

        let carsList = [];
        for(let i = 0; i < wrapper.state('carsList').length; i++){
            carsList.push(wrapper.state('carsList')[i]._id);
        }
        expect(carsList.sort()).toEqual([].sort());
    })
})

describe('Test Only Mileage - AND', ()=>{
    it("Mileage - 1000", () => {
        let wrapper = mount(<CarsList/>);
        wrapper.setProps({
            color: '',
            mileage: 1000,
            hasSunroof:false,
            isFourWheelDrive:false,
            hasPowerWindows:false,
            hasNavigation:false,
            hasHeatedSeats:false,
            filterAndValue:true,
        });

        expect(wrapper.state('carsList')).toHaveLength(0);

        let carsList = [];
        for(let i = 0; i < wrapper.state('carsList').length; i++){
            carsList.push(wrapper.state('carsList')[i]._id);
        }
        expect(carsList.sort()).toEqual([].sort());

    });
    it("Mileage - 2000", () => {
        let wrapper = mount(<CarsList/>);
        wrapper.setProps({
            color: '',
            mileage: 2000,
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
        expect(wrapper.state('colorBold')).toEqual('normal');
        expect(wrapper.state('selectedColor')).toEqual('');
        expect(wrapper.state('selectedMileage')).toEqual(2000);

        expect(wrapper.state('carsList')).toHaveLength(2);

        let carsList = [];
        for(let i = 0; i < wrapper.state('carsList').length; i++){
            carsList.push(wrapper.state('carsList')[i]._id);
        }
        expect(carsList.sort()).toEqual(['59d2698c2eaefb1268b69ee5', '59d2698cda9e8d39476c678a'].sort());

    });
    it("Mileage - 5000", () => {
        let wrapper = mount(<CarsList/>);
        wrapper.setProps({
            color: '',
            mileage: 5000,
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
        expect(wrapper.state('colorBold')).toEqual('normal');
        expect(wrapper.state('selectedColor')).toEqual('');
        expect(wrapper.state('selectedMileage')).toEqual(5000);

        expect(wrapper.state('carsList')).toHaveLength(3);

        let carsList = [];
        for(let i = 0; i < wrapper.state('carsList').length; i++){
            carsList.push(wrapper.state('carsList')[i]._id);
        }
        expect(carsList.sort()).toEqual(['59d2698c2eaefb1268b69ee5', '59d2698cda9e8d39476c678a', '59d2698c86ab54cee8acdc7b'].sort());

    });
    it("Mileage - 10000", () => {
        let wrapper = mount(<CarsList/>);
        wrapper.setProps({
            color: '',
            mileage: 10000,
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
        expect(wrapper.state('colorBold')).toEqual('normal');
        expect(wrapper.state('selectedColor')).toEqual('');
        expect(wrapper.state('selectedMileage')).toEqual(10000);

        expect(wrapper.state('carsList')).toHaveLength(6);

        let carsList = [];
        for(let i = 0; i < wrapper.state('carsList').length; i++){
            carsList.push(wrapper.state('carsList')[i]._id);
        }
        expect(carsList.sort()).toEqual(['59d2698cd6a3b8f0dd994c9d','59d2698ce2e7eeeb4f109001','59d2698c340f2728382c0a73','59d2698c2eaefb1268b69ee5', '59d2698cda9e8d39476c678a', '59d2698c86ab54cee8acdc7b'].sort());

    });
    it("Mileage - 25000", () => {
        let wrapper = mount(<CarsList/>);
        wrapper.setProps({
            color: '',
            mileage: 25000,
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
        expect(wrapper.state('colorBold')).toEqual('normal');
        expect(wrapper.state('selectedColor')).toEqual('');
        expect(wrapper.state('selectedMileage')).toEqual(25000);

        expect(wrapper.state('carsList')).toHaveLength(8);

        let carsList = [];
        for(let i = 0; i < wrapper.state('carsList').length; i++){
            carsList.push(wrapper.state('carsList')[i]._id);
        }
        expect(carsList.sort()).toEqual(['59d2698cda9e8d39476c678a','59d2698c86ab54cee8acdc7b','59d2698cd6a3b8f0dd994c9d','59d2698ce2e7eeeb4f109001','59d2698cba9b82c2347cd13a','59d2698c340f2728382c0a73','59d2698c05889e0b23959106','59d2698c2eaefb1268b69ee5'].sort());

    });
    it("Mileage - 50000", () => {
        let wrapper = mount(<CarsList/>);
        wrapper.setProps({
            color: '',
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
        expect(wrapper.state('colorBold')).toEqual('normal');
        expect(wrapper.state('selectedColor')).toEqual('');
        expect(wrapper.state('selectedMileage')).toEqual(50000);

        expect(wrapper.state('carsList')).toHaveLength(9);

        let carsList = [];
        for(let i = 0; i < wrapper.state('carsList').length; i++){
            carsList.push(wrapper.state('carsList')[i]._id);
        }
        expect(carsList.sort()).toEqual(['59d2698c6f1dc2cbec89c413','59d2698cda9e8d39476c678a','59d2698c86ab54cee8acdc7b','59d2698cd6a3b8f0dd994c9d','59d2698ce2e7eeeb4f109001','59d2698cba9b82c2347cd13a','59d2698c340f2728382c0a73','59d2698c05889e0b23959106','59d2698c2eaefb1268b69ee5'].sort());

    });
})

describe('Test AND - Multiple Checked',()=>{
    it("CarsList AND function test_1", () => {
        let wrapper = mount(<CarsList/>);
        wrapper.setProps({
            color: 'Black',
            mileage: 50000,
            hasSunroof:true,
            isFourWheelDrive:false,
            hasPowerWindows:true,
            hasNavigation:false,
            hasHeatedSeats:false,
            filterAndValue:true,
        });
        expect(wrapper.state('mileageBold')).toEqual('bold');
        expect(wrapper.state('sunRoofBold')).toEqual('bold');
        expect(wrapper.state('fourWheelDriveBold')).toEqual('normal');
        expect(wrapper.state('powerWindowsBold')).toEqual('bold');
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


    it("CarsList AND function test_2", () => {
        let wrapper = mount(<CarsList/>);
        wrapper.setProps({
            color: 'White',
            mileage: 30000,
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

        expect(wrapper.state('selectedColor')).toEqual('White');
        expect(wrapper.state('selectedMileage')).toEqual(30000);

        expect(wrapper.state('carsList')).toHaveLength(2);

        let carsList = [];
        for(let i = 0; i < wrapper.state('carsList').length; i++){
            carsList.push(wrapper.state('carsList')[i]._id);
        }
        expect(carsList.sort()).toEqual(["59d2698c340f2728382c0a73", "59d2698cda9e8d39476c678a"].sort());


    });



    it("CarsList AND function test_3", () => {
        let wrapper = mount(<CarsList/>);
        wrapper.setProps({
            color: 'White',
            mileage: 10000,
            hasSunroof:true,
            isFourWheelDrive:false,
            hasPowerWindows:true,
            hasNavigation:false,
            hasHeatedSeats:false,
            filterAndValue:true,
        });
        expect(wrapper.state('mileageBold')).toEqual('bold');
        expect(wrapper.state('sunRoofBold')).toEqual('bold');
        expect(wrapper.state('fourWheelDriveBold')).toEqual('normal');
        expect(wrapper.state('powerWindowsBold')).toEqual('bold');
        expect(wrapper.state('navigationBold')).toEqual('normal');
        expect(wrapper.state('heatedSeatsBold')).toEqual('normal');
        expect(wrapper.state('colorBold')).toEqual('bold');

        expect(wrapper.state('selectedColor')).toEqual('White');
        expect(wrapper.state('selectedMileage')).toEqual(10000);

        expect(wrapper.state('carsList')).toHaveLength(1);

        let carsList = [];
        for(let i = 0; i < wrapper.state('carsList').length; i++){
            carsList.push(wrapper.state('carsList')[i]._id);
        }
        expect(carsList.sort()).toEqual(["59d2698c340f2728382c0a73"].sort());


    });


    it("CarsList AND function test_4", () => {
        let wrapper = mount(<CarsList/>);
        wrapper.setProps({
            color: 'Red',
            mileage: 10000,
            hasSunroof:true,
            isFourWheelDrive:false,
            hasPowerWindows:true,
            hasNavigation:false,
            hasHeatedSeats:true,
            filterAndValue:true,
        });
        expect(wrapper.state('mileageBold')).toEqual('bold');
        expect(wrapper.state('sunRoofBold')).toEqual('bold');
        expect(wrapper.state('fourWheelDriveBold')).toEqual('normal');
        expect(wrapper.state('powerWindowsBold')).toEqual('bold');
        expect(wrapper.state('navigationBold')).toEqual('normal');
        expect(wrapper.state('heatedSeatsBold')).toEqual('bold');
        expect(wrapper.state('colorBold')).toEqual('bold');

        expect(wrapper.state('selectedColor')).toEqual('Red');
        expect(wrapper.state('selectedMileage')).toEqual(10000);

        expect(wrapper.state('carsList')).toHaveLength(1);

        let carsList = [];
        for(let i = 0; i < wrapper.state('carsList').length; i++){
            carsList.push(wrapper.state('carsList')[i]._id);
        }
        expect(carsList.sort()).toEqual(["59d2698ce2e7eeeb4f109001"].sort());
    });



    it("CarsList AND function test_5", () => {
        let wrapper = mount(<CarsList/>);
        wrapper.setProps({
            color: 'Gray',
            mileage: 15000,
            hasSunroof:false,
            isFourWheelDrive:true,
            hasPowerWindows:false,
            hasNavigation:false,
            hasHeatedSeats:false,
            filterAndValue:true,
        });
        expect(wrapper.state('mileageBold')).toEqual('bold');
        expect(wrapper.state('sunRoofBold')).toEqual('normal');
        expect(wrapper.state('fourWheelDriveBold')).toEqual('bold');
        expect(wrapper.state('powerWindowsBold')).toEqual('normal');
        expect(wrapper.state('navigationBold')).toEqual('normal');
        expect(wrapper.state('heatedSeatsBold')).toEqual('normal');
        expect(wrapper.state('colorBold')).toEqual('bold');

        expect(wrapper.state('selectedColor')).toEqual('Gray');
        expect(wrapper.state('selectedMileage')).toEqual(15000);

        expect(wrapper.state('carsList')).toHaveLength(2);

        let carsList = [];
        for(let i = 0; i < wrapper.state('carsList').length; i++){
            carsList.push(wrapper.state('carsList')[i]._id);
        }
        expect(carsList.sort()).toEqual(["59d2698cba9b82c2347cd13a","59d2698c2eaefb1268b69ee5"].sort());


    });


    it("CarsList AND function test_6", () => {
        let wrapper = mount(<CarsList/>);
        wrapper.setProps({
            color: '',
            mileage: 0,
            hasSunroof:false,
            isFourWheelDrive:true,
            hasPowerWindows:false,
            hasNavigation:false,
            hasHeatedSeats:false,
            filterAndValue:true,
        });
        expect(wrapper.state('mileageBold')).toEqual('normal');
        expect(wrapper.state('sunRoofBold')).toEqual('normal');
        expect(wrapper.state('fourWheelDriveBold')).toEqual('bold');
        expect(wrapper.state('powerWindowsBold')).toEqual('normal');
        expect(wrapper.state('navigationBold')).toEqual('normal');
        expect(wrapper.state('heatedSeatsBold')).toEqual('normal');
        expect(wrapper.state('colorBold')).toEqual('normal');

        expect(wrapper.state('selectedColor')).toEqual('');
        expect(wrapper.state('selectedMileage')).toEqual('');

        expect(wrapper.state('carsList')).toHaveLength(3);

        let carsList = [];
        for(let i = 0; i < wrapper.state('carsList').length; i++){
            carsList.push(wrapper.state('carsList')[i]._id);
        }
        expect(carsList.sort()).toEqual(["59d2698c2eaefb1268b69ee5","59d2698c05889e0b23959106", "59d2698cba9b82c2347cd13a"].sort());


    });

    it("CarsList AND function test_7", () => {
        let wrapper = mount(<CarsList/>);
        wrapper.setProps({
            color: '',
            mileage: 0,
            hasSunroof:false,
            isFourWheelDrive:true,
            hasPowerWindows:true,
            hasNavigation:false,
            hasHeatedSeats:false,
            filterAndValue:true,
        });
        expect(wrapper.state('mileageBold')).toEqual('normal');
        expect(wrapper.state('sunRoofBold')).toEqual('normal');
        expect(wrapper.state('fourWheelDriveBold')).toEqual('bold');
        expect(wrapper.state('powerWindowsBold')).toEqual('bold');
        expect(wrapper.state('navigationBold')).toEqual('normal');
        expect(wrapper.state('heatedSeatsBold')).toEqual('normal');
        expect(wrapper.state('colorBold')).toEqual('normal');

        expect(wrapper.state('selectedColor')).toEqual('');
        expect(wrapper.state('selectedMileage')).toEqual('');

        expect(wrapper.state('carsList')).toHaveLength(1);

        let carsList = [];
        for(let i = 0; i < wrapper.state('carsList').length; i++){
            carsList.push(wrapper.state('carsList')[i]._id);
        }
        expect(carsList.sort()).toEqual(["59d2698c05889e0b23959106"].sort());


    });

    it("CarsList AND function test_8", () => {
        let wrapper = mount(<CarsList/>);
        wrapper.setProps({
            color: '',
            mileage: 0,
            hasSunroof:false,
            isFourWheelDrive:true,
            hasPowerWindows:true,
            hasNavigation:true,
            hasHeatedSeats:false,
            filterAndValue:true,
        });
        expect(wrapper.state('mileageBold')).toEqual('normal');
        expect(wrapper.state('sunRoofBold')).toEqual('normal');
        expect(wrapper.state('fourWheelDriveBold')).toEqual('bold');
        expect(wrapper.state('powerWindowsBold')).toEqual('bold');
        expect(wrapper.state('navigationBold')).toEqual('bold');
        expect(wrapper.state('heatedSeatsBold')).toEqual('normal');
        expect(wrapper.state('colorBold')).toEqual('normal');

        expect(wrapper.state('selectedColor')).toEqual('');
        expect(wrapper.state('selectedMileage')).toEqual('');

        expect(wrapper.state('carsList')).toHaveLength(0);

        let carsList = [];
        for(let i = 0; i < wrapper.state('carsList').length; i++){
            carsList.push(wrapper.state('carsList')[i]._id);
        }
        expect(carsList.sort()).toEqual([].sort());
    })

    it("CarsList AND function test_9", () => {
        let wrapper = mount(<CarsList/>);
        wrapper.setProps({
            color: '',
            mileage: 0,
            hasSunroof:true,
            isFourWheelDrive:true,
            hasPowerWindows:true,
            hasNavigation:false,
            hasHeatedSeats:true,
            filterAndValue:true,
        });
        expect(wrapper.state('mileageBold')).toEqual('normal');
        expect(wrapper.state('sunRoofBold')).toEqual('bold');
        expect(wrapper.state('fourWheelDriveBold')).toEqual('bold');
        expect(wrapper.state('powerWindowsBold')).toEqual('bold');
        expect(wrapper.state('navigationBold')).toEqual('normal');
        expect(wrapper.state('heatedSeatsBold')).toEqual('bold');
        expect(wrapper.state('colorBold')).toEqual('normal');

        expect(wrapper.state('selectedColor')).toEqual('');
        expect(wrapper.state('selectedMileage')).toEqual('');

        expect(wrapper.state('carsList')).toHaveLength(1);

        let carsList = [];
        for(let i = 0; i < wrapper.state('carsList').length; i++){
            carsList.push(wrapper.state('carsList')[i]._id);
        }
        expect(carsList.sort()).toEqual(['59d2698c05889e0b23959106'].sort());
    })

    it("CarsList AND function test_10", () => {
        let wrapper = mount(<CarsList/>);
        wrapper.setProps({
            color: 'Gray',
            mileage: 0,
            hasSunroof:false,
            isFourWheelDrive:true,
            hasPowerWindows:false,
            hasNavigation:false,
            hasHeatedSeats:false,
            filterAndValue:true,
        });
        expect(wrapper.state('mileageBold')).toEqual('normal');
        expect(wrapper.state('sunRoofBold')).toEqual('normal');
        expect(wrapper.state('fourWheelDriveBold')).toEqual('bold');
        expect(wrapper.state('powerWindowsBold')).toEqual('normal');
        expect(wrapper.state('navigationBold')).toEqual('normal');
        expect(wrapper.state('heatedSeatsBold')).toEqual('normal');
        expect(wrapper.state('colorBold')).toEqual('bold');

        expect(wrapper.state('selectedColor')).toEqual('Gray');
        expect(wrapper.state('selectedMileage')).toEqual('');

        expect(wrapper.state('carsList')).toHaveLength(2);

        let carsList = [];
        for(let i = 0; i < wrapper.state('carsList').length; i++){
            carsList.push(wrapper.state('carsList')[i]._id);
        }
        expect(carsList.sort()).toEqual(['59d2698c2eaefb1268b69ee5', '59d2698cba9b82c2347cd13a'].sort());
    })
});



describe('Test OR - Only One Checked', ()=> {
    it("Test CarsList OR - Only hasSunroof checked", () => {
        let wrapper = mount(<CarsList />);
        wrapper.setProps({
            color: '',
            mileage: 0,
            hasSunroof:true,
            isFourWheelDrive:false,
            hasPowerWindows:false,
            hasNavigation:false,
            hasHeatedSeats:false,
            filterAndValue:false,
        });
        expect(wrapper.state('mileageBold')).toEqual('normal');
        expect(wrapper.state('sunRoofBold')).toEqual('bold');
        expect(wrapper.state('fourWheelDriveBold')).toEqual('normal');
        expect(wrapper.state('powerWindowsBold')).toEqual('normal');
        expect(wrapper.state('navigationBold')).toEqual('normal');
        expect(wrapper.state('heatedSeatsBold')).toEqual('normal');
        expect(wrapper.state('colorBold')).toEqual('normal');

        expect(wrapper.state('selectedColor')).toEqual('');
        expect(wrapper.state('selectedMileage')).toEqual('');

        expect(wrapper.state('carsList')).toHaveLength(5);
        let carsList = [];
        for(let i = 0; i < wrapper.state('carsList').length; i++){
            carsList.push(wrapper.state('carsList')[i]._id);
        }
        expect(carsList.sort()).toEqual(["59d2698c05889e0b23959106", "59d2698c6f1dc2cbec89c413", "59d2698c340f2728382c0a73", "59d2698ce2e7eeeb4f109001", "59d2698cd6a3b8f0dd994c9d"].sort());
    });


    it("Test CarsList OR - Only isFourWheelDrive checked", () => {
        let wrapper = mount(<CarsList />);
        wrapper.setProps({
            color: '',
            mileage: 0,
            hasSunroof:false,
            isFourWheelDrive:true,
            hasPowerWindows:false,
            hasNavigation:false,
            hasHeatedSeats:false,
            filterAndValue:false,
        });
        expect(wrapper.state('mileageBold')).toEqual('normal');
        expect(wrapper.state('sunRoofBold')).toEqual('normal');
        expect(wrapper.state('fourWheelDriveBold')).toEqual('bold');
        expect(wrapper.state('powerWindowsBold')).toEqual('normal');
        expect(wrapper.state('navigationBold')).toEqual('normal');
        expect(wrapper.state('heatedSeatsBold')).toEqual('normal');
        expect(wrapper.state('colorBold')).toEqual('normal');

        expect(wrapper.state('selectedColor')).toEqual('');
        expect(wrapper.state('selectedMileage')).toEqual('');

        expect(wrapper.state('carsList')).toHaveLength(3);
        let carsList = [];
        for(let i = 0; i < wrapper.state('carsList').length; i++){
            carsList.push(wrapper.state('carsList')[i]._id);
        }
        expect(carsList.sort()).toEqual(["59d2698c2eaefb1268b69ee5", "59d2698c05889e0b23959106", "59d2698cba9b82c2347cd13a"].sort());
    });

    it("Test CarsList OR - Only hasPowerWindows checked", () => {
        let wrapper = mount(<CarsList />);
        wrapper.setProps({
            color: '',
            mileage: 0,
            hasSunroof:false,
            isFourWheelDrive:false,
            hasPowerWindows:true,
            hasNavigation:false,
            hasHeatedSeats:false,
            filterAndValue:false,
        });
        expect(wrapper.state('mileageBold')).toEqual('normal');
        expect(wrapper.state('sunRoofBold')).toEqual('normal');
        expect(wrapper.state('fourWheelDriveBold')).toEqual('normal');
        expect(wrapper.state('powerWindowsBold')).toEqual('bold');
        expect(wrapper.state('navigationBold')).toEqual('normal');
        expect(wrapper.state('heatedSeatsBold')).toEqual('normal');
        expect(wrapper.state('colorBold')).toEqual('normal');

        expect(wrapper.state('selectedColor')).toEqual('');
        expect(wrapper.state('selectedMileage')).toEqual('');

        expect(wrapper.state('carsList')).toHaveLength(5);
        let carsList = [];
        for(let i = 0; i < wrapper.state('carsList').length; i++){
            carsList.push(wrapper.state('carsList')[i]._id);
        }
        expect(carsList.sort()).toEqual(["59d2698c05889e0b23959106", "59d2698c6f1dc2cbec89c413", "59d2698c340f2728382c0a73", "59d2698ce2e7eeeb4f109001", "59d2698cd6a3b8f0dd994c9d"].sort());
    });


    it("Test CarsList OR - Only hasNavigation checked", () => {
        let wrapper = mount(<CarsList />);
        wrapper.setProps({
            color: '',
            mileage: 0,
            hasSunroof:false,
            isFourWheelDrive:false,
            hasPowerWindows:false,
            hasNavigation:true,
            hasHeatedSeats:false,
            filterAndValue:false,
        });
        expect(wrapper.state('mileageBold')).toEqual('normal');
        expect(wrapper.state('sunRoofBold')).toEqual('normal');
        expect(wrapper.state('fourWheelDriveBold')).toEqual('normal');
        expect(wrapper.state('powerWindowsBold')).toEqual('normal');
        expect(wrapper.state('navigationBold')).toEqual('bold');
        expect(wrapper.state('heatedSeatsBold')).toEqual('normal');
        expect(wrapper.state('colorBold')).toEqual('normal');

        expect(wrapper.state('selectedColor')).toEqual('');
        expect(wrapper.state('selectedMileage')).toEqual('');

        expect(wrapper.state('carsList')).toHaveLength(4);
        let carsList = [];
        for(let i = 0; i < wrapper.state('carsList').length; i++){
            carsList.push(wrapper.state('carsList')[i]._id);
        }
        expect(carsList.sort()).toEqual(["59d2698c2eaefb1268b69ee5", "59d2698c6f1dc2cbec89c413", "59d2698cba9b82c2347cd13a", "59d2698ce2e7eeeb4f109001"].sort());
    });

    it("Test CarsList OR - Only hasHeatedSeats checked", () => {
        let wrapper = mount(<CarsList />);
        wrapper.setProps({
            color: '',
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
        expect(wrapper.state('colorBold')).toEqual('normal');

        expect(wrapper.state('selectedColor')).toEqual('');
        expect(wrapper.state('selectedMileage')).toEqual('');

        expect(wrapper.state('carsList')).toHaveLength(5);
        let carsList = [];
        for(let i = 0; i < wrapper.state('carsList').length; i++){
            carsList.push(wrapper.state('carsList')[i]._id);
        }
        expect(carsList.sort()).toEqual(["59d2698c05889e0b23959106", "59d2698c340f2728382c0a73", "59d2698cba9b82c2347cd13a", "59d2698ce2e7eeeb4f109001", "59d2698cda9e8d39476c678a"].sort());
    });
})

describe('Test OR - Only One Color Input', ()=> {
    it("Test CarsList OR - Only Color - Black checked", () => {
        let wrapper = mount(<CarsList />);
        wrapper.setProps({
            color: 'Black',
            mileage: 0,
            hasSunroof:false,
            isFourWheelDrive:false,
            hasPowerWindows:false,
            hasNavigation:false,
            hasHeatedSeats:false,
            filterAndValue:false,
        });
        expect(wrapper.state('mileageBold')).toEqual('normal');
        expect(wrapper.state('sunRoofBold')).toEqual('normal');
        expect(wrapper.state('fourWheelDriveBold')).toEqual('normal');
        expect(wrapper.state('powerWindowsBold')).toEqual('normal');
        expect(wrapper.state('navigationBold')).toEqual('normal');
        expect(wrapper.state('heatedSeatsBold')).toEqual('normal');
        expect(wrapper.state('colorBold')).toEqual('bold');

        expect(wrapper.state('selectedColor')).toEqual('Black');
        expect(wrapper.state('selectedMileage')).toEqual('');

        expect(wrapper.state('carsList')).toHaveLength(2);
        let carsList = [];
        for(let i = 0; i < wrapper.state('carsList').length; i++){
            carsList.push(wrapper.state('carsList')[i]._id);
        }
        expect(carsList.sort()).toEqual(["59d2698c6f1dc2cbec89c413", "59d2698cd6a3b8f0dd994c9d"].sort());
    });


    it("Test CarsList OR - Only Color - Silver checked", () => {
        let wrapper = mount(<CarsList />);
        wrapper.setProps({
            color: 'Silver',
            mileage: 0,
            hasSunroof:false,
            isFourWheelDrive:false,
            hasPowerWindows:false,
            hasNavigation:false,
            hasHeatedSeats:false,
            filterAndValue:false,
        });
        expect(wrapper.state('mileageBold')).toEqual('normal');
        expect(wrapper.state('sunRoofBold')).toEqual('normal');
        expect(wrapper.state('fourWheelDriveBold')).toEqual('normal');
        expect(wrapper.state('powerWindowsBold')).toEqual('normal');
        expect(wrapper.state('navigationBold')).toEqual('normal');
        expect(wrapper.state('heatedSeatsBold')).toEqual('normal');
        expect(wrapper.state('colorBold')).toEqual('bold');

        expect(wrapper.state('selectedColor')).toEqual('Silver');
        expect(wrapper.state('selectedMileage')).toEqual('');

        expect(wrapper.state('carsList')).toHaveLength(1);
        let carsList = [];
        for(let i = 0; i < wrapper.state('carsList').length; i++){
            carsList.push(wrapper.state('carsList')[i]._id);
        }
        expect(carsList.sort()).toEqual(["59d2698c05889e0b23959106"].sort());
    });


    it("Test CarsList OR - Only Color - Gray checked", () => {
        let wrapper = mount(<CarsList />);
        wrapper.setProps({
            color: 'Gray',
            mileage: 0,
            hasSunroof:false,
            isFourWheelDrive:false,
            hasPowerWindows:false,
            hasNavigation:false,
            hasHeatedSeats:false,
            filterAndValue:false,
        });
        expect(wrapper.state('mileageBold')).toEqual('normal');
        expect(wrapper.state('sunRoofBold')).toEqual('normal');
        expect(wrapper.state('fourWheelDriveBold')).toEqual('normal');
        expect(wrapper.state('powerWindowsBold')).toEqual('normal');
        expect(wrapper.state('navigationBold')).toEqual('normal');
        expect(wrapper.state('heatedSeatsBold')).toEqual('normal');
        expect(wrapper.state('colorBold')).toEqual('bold');

        expect(wrapper.state('selectedColor')).toEqual('Gray');
        expect(wrapper.state('selectedMileage')).toEqual('');

        expect(wrapper.state('carsList')).toHaveLength(3);
        let carsList = [];
        for(let i = 0; i < wrapper.state('carsList').length; i++){
            carsList.push(wrapper.state('carsList')[i]._id);
        }
        expect(carsList.sort()).toEqual(["59d2698c2eaefb1268b69ee5","59d2698c86ab54cee8acdc7b","59d2698cba9b82c2347cd13a"].sort());
    });


    it("Test CarsList OR - Only Color - White checked", () => {
        let wrapper = mount(<CarsList />);
        wrapper.setProps({
            color: 'White',
            mileage: 0,
            hasSunroof:false,
            isFourWheelDrive:false,
            hasPowerWindows:false,
            hasNavigation:false,
            hasHeatedSeats:false,
            filterAndValue:false,
        });
        expect(wrapper.state('mileageBold')).toEqual('normal');
        expect(wrapper.state('sunRoofBold')).toEqual('normal');
        expect(wrapper.state('fourWheelDriveBold')).toEqual('normal');
        expect(wrapper.state('powerWindowsBold')).toEqual('normal');
        expect(wrapper.state('navigationBold')).toEqual('normal');
        expect(wrapper.state('heatedSeatsBold')).toEqual('normal');
        expect(wrapper.state('colorBold')).toEqual('bold');

        expect(wrapper.state('selectedColor')).toEqual('White');
        expect(wrapper.state('selectedMileage')).toEqual('');

        expect(wrapper.state('carsList')).toHaveLength(2);
        let carsList = [];
        for(let i = 0; i < wrapper.state('carsList').length; i++){
            carsList.push(wrapper.state('carsList')[i]._id);
        }
        expect(carsList.sort()).toEqual(["59d2698c340f2728382c0a73","59d2698cda9e8d39476c678a"].sort());
    });



    it("Test CarsList OR - Only Color - Red checked", () => {
        let wrapper = mount(<CarsList />);
        wrapper.setProps({
            color: 'Red',
            mileage: 0,
            hasSunroof:false,
            isFourWheelDrive:false,
            hasPowerWindows:false,
            hasNavigation:false,
            hasHeatedSeats:false,
            filterAndValue:false,
        });
        expect(wrapper.state('mileageBold')).toEqual('normal');
        expect(wrapper.state('sunRoofBold')).toEqual('normal');
        expect(wrapper.state('fourWheelDriveBold')).toEqual('normal');
        expect(wrapper.state('powerWindowsBold')).toEqual('normal');
        expect(wrapper.state('navigationBold')).toEqual('normal');
        expect(wrapper.state('heatedSeatsBold')).toEqual('normal');
        expect(wrapper.state('colorBold')).toEqual('bold');

        expect(wrapper.state('selectedColor')).toEqual('Red');
        expect(wrapper.state('selectedMileage')).toEqual('');

        expect(wrapper.state('carsList')).toHaveLength(1);
        let carsList = [];
        for(let i = 0; i < wrapper.state('carsList').length; i++){
            carsList.push(wrapper.state('carsList')[i]._id);
        }
        expect(carsList.sort()).toEqual(["59d2698ce2e7eeeb4f109001"].sort());
    });
})

describe('Test OR - All but one Checked',()=> {
    it("All but Sunroof Checked", () => {
        let wrapper = mount(<CarsList/>);
        wrapper.setProps({
            color: '',
            mileage: 0,
            hasSunroof:false,
            isFourWheelDrive:true,
            hasPowerWindows:true,
            hasNavigation:true,
            hasHeatedSeats:true,
            filterAndValue:false,
        });
        expect(wrapper.state('mileageBold')).toEqual('normal');
        expect(wrapper.state('sunRoofBold')).toEqual('normal');
        expect(wrapper.state('fourWheelDriveBold')).toEqual('bold');
        expect(wrapper.state('powerWindowsBold')).toEqual('bold');
        expect(wrapper.state('navigationBold')).toEqual('bold');
        expect(wrapper.state('heatedSeatsBold')).toEqual('bold');
        expect(wrapper.state('colorBold')).toEqual('normal');

        expect(wrapper.state('selectedColor')).toEqual('');
        expect(wrapper.state('selectedMileage')).toEqual('');
        expect(wrapper.state('carsList')).toHaveLength(8);

        let carsList = [];
        for(let i = 0; i < wrapper.state('carsList').length; i++){
            carsList.push(wrapper.state('carsList')[i]._id);
        }
        expect(carsList.sort()).toEqual(["59d2698c2eaefb1268b69ee5","59d2698c05889e0b23959106","59d2698c6f1dc2cbec89c413","59d2698c340f2728382c0a73","59d2698cba9b82c2347cd13a","59d2698ce2e7eeeb4f109001","59d2698cd6a3b8f0dd994c9d","59d2698cda9e8d39476c678a"].sort());
    })


    it("All but FourWheelDrive Checked", () => {
        let wrapper = mount(<CarsList/>);
        wrapper.setProps({
            color: '',
            mileage: 0,
            hasSunroof:true,
            isFourWheelDrive:false,
            hasPowerWindows:true,
            hasNavigation:true,
            hasHeatedSeats:true,
            filterAndValue:false,
        });
        expect(wrapper.state('mileageBold')).toEqual('normal');
        expect(wrapper.state('sunRoofBold')).toEqual('bold');
        expect(wrapper.state('fourWheelDriveBold')).toEqual('normal');
        expect(wrapper.state('powerWindowsBold')).toEqual('bold');
        expect(wrapper.state('navigationBold')).toEqual('bold');
        expect(wrapper.state('heatedSeatsBold')).toEqual('bold');
        expect(wrapper.state('colorBold')).toEqual('normal');

        expect(wrapper.state('selectedColor')).toEqual('');
        expect(wrapper.state('selectedMileage')).toEqual('');
        expect(wrapper.state('carsList')).toHaveLength(8);

        let carsList = [];
        for(let i = 0; i < wrapper.state('carsList').length; i++){
            carsList.push(wrapper.state('carsList')[i]._id);
        }
        expect(carsList.sort()).toEqual(["59d2698c2eaefb1268b69ee5","59d2698c05889e0b23959106","59d2698c6f1dc2cbec89c413","59d2698c340f2728382c0a73","59d2698cba9b82c2347cd13a","59d2698ce2e7eeeb4f109001","59d2698cd6a3b8f0dd994c9d","59d2698cda9e8d39476c678a"].sort());

    })

    it("All but PowerWindows Checked", () => {
        let wrapper = mount(<CarsList/>);
        wrapper.setProps({
            color: '',
            mileage: 0,
            hasSunroof:true,
            isFourWheelDrive:true,
            hasPowerWindows:false,
            hasNavigation:true,
            hasHeatedSeats:true,
            filterAndValue:false,
        });
        expect(wrapper.state('mileageBold')).toEqual('normal');
        expect(wrapper.state('sunRoofBold')).toEqual('bold');
        expect(wrapper.state('fourWheelDriveBold')).toEqual('bold');
        expect(wrapper.state('powerWindowsBold')).toEqual('normal');
        expect(wrapper.state('navigationBold')).toEqual('bold');
        expect(wrapper.state('heatedSeatsBold')).toEqual('bold');
        expect(wrapper.state('colorBold')).toEqual('normal');

        expect(wrapper.state('selectedColor')).toEqual('');
        expect(wrapper.state('selectedMileage')).toEqual('');
        expect(wrapper.state('carsList')).toHaveLength(8);

        let carsList = [];
        for(let i = 0; i < wrapper.state('carsList').length; i++){
            carsList.push(wrapper.state('carsList')[i]._id);
        }
        expect(carsList.sort()).toEqual(["59d2698c2eaefb1268b69ee5","59d2698c05889e0b23959106","59d2698c6f1dc2cbec89c413","59d2698c340f2728382c0a73","59d2698cba9b82c2347cd13a","59d2698ce2e7eeeb4f109001","59d2698cd6a3b8f0dd994c9d","59d2698cda9e8d39476c678a"].sort());

    })

    it("All but Navigation Checked", () => {
        let wrapper = mount(<CarsList/>);
        wrapper.setProps({
            color: '',
            mileage: 0,
            hasSunroof:true,
            isFourWheelDrive:true,
            hasPowerWindows:true,
            hasNavigation:false,
            hasHeatedSeats:true,
            filterAndValue:false,
        });
        expect(wrapper.state('mileageBold')).toEqual('normal');
        expect(wrapper.state('sunRoofBold')).toEqual('bold');
        expect(wrapper.state('fourWheelDriveBold')).toEqual('bold');
        expect(wrapper.state('powerWindowsBold')).toEqual('bold');
        expect(wrapper.state('navigationBold')).toEqual('normal');
        expect(wrapper.state('heatedSeatsBold')).toEqual('bold');
        expect(wrapper.state('colorBold')).toEqual('normal');

        expect(wrapper.state('selectedColor')).toEqual('');
        expect(wrapper.state('selectedMileage')).toEqual('');
        expect(wrapper.state('carsList')).toHaveLength(8);

        let carsList = [];
        for(let i = 0; i < wrapper.state('carsList').length; i++){
            carsList.push(wrapper.state('carsList')[i]._id);
        }
        expect(carsList.sort()).toEqual(["59d2698c2eaefb1268b69ee5","59d2698c05889e0b23959106","59d2698c6f1dc2cbec89c413","59d2698c340f2728382c0a73","59d2698cba9b82c2347cd13a","59d2698ce2e7eeeb4f109001","59d2698cd6a3b8f0dd994c9d","59d2698cda9e8d39476c678a"].sort());

    })

    it("All but HeatedSeats Checked", () => {
        let wrapper = mount(<CarsList/>);
        wrapper.setProps({
            color: '',
            mileage: 0,
            hasSunroof:true,
            isFourWheelDrive:true,
            hasPowerWindows:true,
            hasNavigation:true,
            hasHeatedSeats:false,
            filterAndValue:false,
        });
        expect(wrapper.state('mileageBold')).toEqual('normal');
        expect(wrapper.state('sunRoofBold')).toEqual('bold');
        expect(wrapper.state('fourWheelDriveBold')).toEqual('bold');
        expect(wrapper.state('powerWindowsBold')).toEqual('bold');
        expect(wrapper.state('navigationBold')).toEqual('bold');
        expect(wrapper.state('heatedSeatsBold')).toEqual('normal');
        expect(wrapper.state('colorBold')).toEqual('normal');

        expect(wrapper.state('selectedColor')).toEqual('');
        expect(wrapper.state('selectedMileage')).toEqual('');
        expect(wrapper.state('carsList')).toHaveLength(7);

        let carsList = [];
        for(let i = 0; i < wrapper.state('carsList').length; i++){
            carsList.push(wrapper.state('carsList')[i]._id);
        }
        expect(carsList.sort()).toEqual(["59d2698cd6a3b8f0dd994c9d","59d2698ce2e7eeeb4f109001","59d2698cba9b82c2347cd13a","59d2698c340f2728382c0a73","59d2698c6f1dc2cbec89c413","59d2698c05889e0b23959106","59d2698c2eaefb1268b69ee5"].sort());
    })
})

describe('Test Only Mileage - OR', ()=>{
    it("Mileage - 1000", () => {
        let wrapper = mount(<CarsList/>);
        wrapper.setProps({
            color: '',
            mileage: 1000,
            hasSunroof:false,
            isFourWheelDrive:false,
            hasPowerWindows:false,
            hasNavigation:false,
            hasHeatedSeats:false,
            filterAndValue:false,
        });

        expect(wrapper.state('carsList')).toHaveLength(0);

        let carsList = [];
        for(let i = 0; i < wrapper.state('carsList').length; i++){
            carsList.push(wrapper.state('carsList')[i]._id);
        }
        expect(carsList.sort()).toEqual([].sort());

    });
    it("Mileage - 2000", () => {
        let wrapper = mount(<CarsList/>);
        wrapper.setProps({
            color: '',
            mileage: 2000,
            hasSunroof:false,
            isFourWheelDrive:false,
            hasPowerWindows:false,
            hasNavigation:false,
            hasHeatedSeats:false,
            filterAndValue:false,
        });
        expect(wrapper.state('mileageBold')).toEqual('bold');
        expect(wrapper.state('sunRoofBold')).toEqual('normal');
        expect(wrapper.state('fourWheelDriveBold')).toEqual('normal');
        expect(wrapper.state('powerWindowsBold')).toEqual('normal');
        expect(wrapper.state('navigationBold')).toEqual('normal');
        expect(wrapper.state('heatedSeatsBold')).toEqual('normal');
        expect(wrapper.state('colorBold')).toEqual('normal');
        expect(wrapper.state('selectedColor')).toEqual('');
        expect(wrapper.state('selectedMileage')).toEqual(2000);

        expect(wrapper.state('carsList')).toHaveLength(2);

        let carsList = [];
        for(let i = 0; i < wrapper.state('carsList').length; i++){
            carsList.push(wrapper.state('carsList')[i]._id);
        }
        expect(carsList.sort()).toEqual(['59d2698c2eaefb1268b69ee5', '59d2698cda9e8d39476c678a'].sort());

    });
    it("Mileage - 5000", () => {
        let wrapper = mount(<CarsList/>);
        wrapper.setProps({
            color: '',
            mileage: 5000,
            hasSunroof:false,
            isFourWheelDrive:false,
            hasPowerWindows:false,
            hasNavigation:false,
            hasHeatedSeats:false,
            filterAndValue:false,
        });
        expect(wrapper.state('mileageBold')).toEqual('bold');
        expect(wrapper.state('sunRoofBold')).toEqual('normal');
        expect(wrapper.state('fourWheelDriveBold')).toEqual('normal');
        expect(wrapper.state('powerWindowsBold')).toEqual('normal');
        expect(wrapper.state('navigationBold')).toEqual('normal');
        expect(wrapper.state('heatedSeatsBold')).toEqual('normal');
        expect(wrapper.state('colorBold')).toEqual('normal');
        expect(wrapper.state('selectedColor')).toEqual('');
        expect(wrapper.state('selectedMileage')).toEqual(5000);

        expect(wrapper.state('carsList')).toHaveLength(3);

        let carsList = [];
        for(let i = 0; i < wrapper.state('carsList').length; i++){
            carsList.push(wrapper.state('carsList')[i]._id);
        }
        expect(carsList.sort()).toEqual(['59d2698c2eaefb1268b69ee5', '59d2698cda9e8d39476c678a', '59d2698c86ab54cee8acdc7b'].sort());

    });
    it("Mileage - 10000", () => {
        let wrapper = mount(<CarsList/>);
        wrapper.setProps({
            color: '',
            mileage: 10000,
            hasSunroof:false,
            isFourWheelDrive:false,
            hasPowerWindows:false,
            hasNavigation:false,
            hasHeatedSeats:false,
            filterAndValue:false,
        });
        expect(wrapper.state('mileageBold')).toEqual('bold');
        expect(wrapper.state('sunRoofBold')).toEqual('normal');
        expect(wrapper.state('fourWheelDriveBold')).toEqual('normal');
        expect(wrapper.state('powerWindowsBold')).toEqual('normal');
        expect(wrapper.state('navigationBold')).toEqual('normal');
        expect(wrapper.state('heatedSeatsBold')).toEqual('normal');
        expect(wrapper.state('colorBold')).toEqual('normal');
        expect(wrapper.state('selectedColor')).toEqual('');
        expect(wrapper.state('selectedMileage')).toEqual(10000);

        expect(wrapper.state('carsList')).toHaveLength(6);

        let carsList = [];
        for(let i = 0; i < wrapper.state('carsList').length; i++){
            carsList.push(wrapper.state('carsList')[i]._id);
        }
        expect(carsList.sort()).toEqual(['59d2698cd6a3b8f0dd994c9d','59d2698ce2e7eeeb4f109001','59d2698c340f2728382c0a73','59d2698c2eaefb1268b69ee5', '59d2698cda9e8d39476c678a', '59d2698c86ab54cee8acdc7b'].sort());

    });
    it("Mileage - 25000", () => {
        let wrapper = mount(<CarsList/>);
        wrapper.setProps({
            color: '',
            mileage: 25000,
            hasSunroof:false,
            isFourWheelDrive:false,
            hasPowerWindows:false,
            hasNavigation:false,
            hasHeatedSeats:false,
            filterAndValue:false,
        });
        expect(wrapper.state('mileageBold')).toEqual('bold');
        expect(wrapper.state('sunRoofBold')).toEqual('normal');
        expect(wrapper.state('fourWheelDriveBold')).toEqual('normal');
        expect(wrapper.state('powerWindowsBold')).toEqual('normal');
        expect(wrapper.state('navigationBold')).toEqual('normal');
        expect(wrapper.state('heatedSeatsBold')).toEqual('normal');
        expect(wrapper.state('colorBold')).toEqual('normal');
        expect(wrapper.state('selectedColor')).toEqual('');
        expect(wrapper.state('selectedMileage')).toEqual(25000);

        expect(wrapper.state('carsList')).toHaveLength(8);

        let carsList = [];
        for(let i = 0; i < wrapper.state('carsList').length; i++){
            carsList.push(wrapper.state('carsList')[i]._id);
        }
        expect(carsList.sort()).toEqual(['59d2698cda9e8d39476c678a','59d2698c86ab54cee8acdc7b','59d2698cd6a3b8f0dd994c9d','59d2698ce2e7eeeb4f109001','59d2698cba9b82c2347cd13a','59d2698c340f2728382c0a73','59d2698c05889e0b23959106','59d2698c2eaefb1268b69ee5'].sort());

    });
    it("Mileage - 50000", () => {
        let wrapper = mount(<CarsList/>);
        wrapper.setProps({
            color: '',
            mileage: 50000,
            hasSunroof:false,
            isFourWheelDrive:false,
            hasPowerWindows:false,
            hasNavigation:false,
            hasHeatedSeats:false,
            filterAndValue:false,
        });
        expect(wrapper.state('mileageBold')).toEqual('bold');
        expect(wrapper.state('sunRoofBold')).toEqual('normal');
        expect(wrapper.state('fourWheelDriveBold')).toEqual('normal');
        expect(wrapper.state('powerWindowsBold')).toEqual('normal');
        expect(wrapper.state('navigationBold')).toEqual('normal');
        expect(wrapper.state('heatedSeatsBold')).toEqual('normal');
        expect(wrapper.state('colorBold')).toEqual('normal');
        expect(wrapper.state('selectedColor')).toEqual('');
        expect(wrapper.state('selectedMileage')).toEqual(50000);

        expect(wrapper.state('carsList')).toHaveLength(9);

        let carsList = [];
        for(let i = 0; i < wrapper.state('carsList').length; i++){
            carsList.push(wrapper.state('carsList')[i]._id);
        }
        expect(carsList.sort()).toEqual(['59d2698c6f1dc2cbec89c413','59d2698cda9e8d39476c678a','59d2698c86ab54cee8acdc7b','59d2698cd6a3b8f0dd994c9d','59d2698ce2e7eeeb4f109001','59d2698cba9b82c2347cd13a','59d2698c340f2728382c0a73','59d2698c05889e0b23959106','59d2698c2eaefb1268b69ee5'].sort());

    });
})

describe('Test OR - Multiple Checked',()=> {
    it("CarsList OR function test_1", () => {
        let wrapper = mount(<CarsList/>);
        wrapper.setProps({
            color: 'Black',
            mileage: 0,
            hasSunroof:false,
            isFourWheelDrive:false,
            hasPowerWindows:false,
            hasNavigation:true,
            hasHeatedSeats:true,
            filterAndValue:false,
        });
        expect(wrapper.state('mileageBold')).toEqual('normal');
        expect(wrapper.state('sunRoofBold')).toEqual('normal');
        expect(wrapper.state('fourWheelDriveBold')).toEqual('normal');
        expect(wrapper.state('powerWindowsBold')).toEqual('normal');
        expect(wrapper.state('navigationBold')).toEqual('bold');
        expect(wrapper.state('heatedSeatsBold')).toEqual('bold');
        expect(wrapper.state('colorBold')).toEqual('bold');
        expect(wrapper.state('selectedColor')).toEqual('Black');
        expect(wrapper.state('selectedMileage')).toEqual('');

        expect(wrapper.state('carsList')).toHaveLength(8);

        let carsList = [];
        for(let i = 0; i < wrapper.state('carsList').length; i++){
            carsList.push(wrapper.state('carsList')[i]._id);
        }
        expect(carsList.sort()).toEqual(["59d2698c2eaefb1268b69ee5","59d2698c6f1dc2cbec89c413", "59d2698cd6a3b8f0dd994c9d", "59d2698c05889e0b23959106", "59d2698c340f2728382c0a73", "59d2698cba9b82c2347cd13a", "59d2698ce2e7eeeb4f109001", "59d2698cda9e8d39476c678a"].sort());

    });

    it("CarsList OR function test_2", () => {
        let wrapper = mount(<CarsList/>);
        wrapper.setProps({
            color: 'Black',
            mileage: 0,
            hasSunroof:false,
            isFourWheelDrive:false,
            hasPowerWindows:false,
            hasNavigation:true,
            hasHeatedSeats:false,
            filterAndValue:false,
        });
        expect(wrapper.state('mileageBold')).toEqual('normal');
        expect(wrapper.state('sunRoofBold')).toEqual('normal');
        expect(wrapper.state('fourWheelDriveBold')).toEqual('normal');
        expect(wrapper.state('powerWindowsBold')).toEqual('normal');
        expect(wrapper.state('navigationBold')).toEqual('bold');
        expect(wrapper.state('heatedSeatsBold')).toEqual('normal');
        expect(wrapper.state('colorBold')).toEqual('bold');
        expect(wrapper.state('selectedColor')).toEqual('Black');
        expect(wrapper.state('selectedMileage')).toEqual('');

        expect(wrapper.state('carsList')).toHaveLength(5);

        let carsList = [];
        for(let i = 0; i < wrapper.state('carsList').length; i++){
            carsList.push(wrapper.state('carsList')[i]._id);
        }
        expect(carsList.sort()).toEqual(["59d2698c2eaefb1268b69ee5","59d2698c6f1dc2cbec89c413", "59d2698cd6a3b8f0dd994c9d", "59d2698ce2e7eeeb4f109001", "59d2698cba9b82c2347cd13a"].sort());

    });

    it("CarsList OR function test_3", () => {
        let wrapper = mount(<CarsList/>);
        wrapper.setProps({
            color: 'Red',
            mileage: 25000,
            hasSunroof:false,
            isFourWheelDrive:false,
            hasPowerWindows:true,
            hasNavigation:true,
            hasHeatedSeats:false,
            filterAndValue:false,
        });
        expect(wrapper.state('mileageBold')).toEqual('bold');
        expect(wrapper.state('sunRoofBold')).toEqual('normal');
        expect(wrapper.state('fourWheelDriveBold')).toEqual('normal');
        expect(wrapper.state('powerWindowsBold')).toEqual('bold');
        expect(wrapper.state('navigationBold')).toEqual('bold');
        expect(wrapper.state('heatedSeatsBold')).toEqual('normal');
        expect(wrapper.state('colorBold')).toEqual('bold');
        expect(wrapper.state('selectedColor')).toEqual('Red');
        expect(wrapper.state('selectedMileage')).toEqual(25000);

        expect(wrapper.state('carsList')).toHaveLength(9);

        let carsList = [];
        for(let i = 0; i < wrapper.state('carsList').length; i++){
            carsList.push(wrapper.state('carsList')[i]._id);
        }
        expect(carsList.sort()).toEqual(['59d2698c6f1dc2cbec89c413','59d2698cda9e8d39476c678a','59d2698c86ab54cee8acdc7b','59d2698cd6a3b8f0dd994c9d','59d2698ce2e7eeeb4f109001','59d2698cba9b82c2347cd13a','59d2698c340f2728382c0a73','59d2698c05889e0b23959106','59d2698c2eaefb1268b69ee5'].sort());

    });


    it("CarsList OR function test_4", () => {
        let wrapper = mount(<CarsList/>);
        wrapper.setProps({
            color: '',
            mileage: 0,
            hasSunroof:false,
            isFourWheelDrive:true,
            hasPowerWindows:true,
            hasNavigation:true,
            hasHeatedSeats:false,
            filterAndValue:false,
        });
        expect(wrapper.state('mileageBold')).toEqual('normal');
        expect(wrapper.state('sunRoofBold')).toEqual('normal');
        expect(wrapper.state('fourWheelDriveBold')).toEqual('bold');
        expect(wrapper.state('powerWindowsBold')).toEqual('bold');
        expect(wrapper.state('navigationBold')).toEqual('bold');
        expect(wrapper.state('heatedSeatsBold')).toEqual('normal');
        expect(wrapper.state('colorBold')).toEqual('normal');
        expect(wrapper.state('selectedColor')).toEqual('');
        expect(wrapper.state('selectedMileage')).toEqual('');

        expect(wrapper.state('carsList')).toHaveLength(7);

        let carsList = [];
        for(let i = 0; i < wrapper.state('carsList').length; i++){
            carsList.push(wrapper.state('carsList')[i]._id);
        }
        expect(carsList.sort()).toEqual(['59d2698c2eaefb1268b69ee5','59d2698cd6a3b8f0dd994c9d','59d2698ce2e7eeeb4f109001','59d2698cba9b82c2347cd13a','59d2698c340f2728382c0a73','59d2698c6f1dc2cbec89c413','59d2698c05889e0b23959106'].sort());

    });


    it("CarsList OR function test_5", () => {
        let wrapper = mount(<CarsList/>);
        wrapper.setProps({
            color: 'Gray',
            mileage: 0,
            hasSunroof:false,
            isFourWheelDrive:true,
            hasPowerWindows:true,
            hasNavigation:true,
            hasHeatedSeats:false,
            filterAndValue:false,
        });
        expect(wrapper.state('mileageBold')).toEqual('normal');
        expect(wrapper.state('sunRoofBold')).toEqual('normal');
        expect(wrapper.state('fourWheelDriveBold')).toEqual('bold');
        expect(wrapper.state('powerWindowsBold')).toEqual('bold');
        expect(wrapper.state('navigationBold')).toEqual('bold');
        expect(wrapper.state('heatedSeatsBold')).toEqual('normal');
        expect(wrapper.state('colorBold')).toEqual('bold');
        expect(wrapper.state('selectedColor')).toEqual('Gray');
        expect(wrapper.state('selectedMileage')).toEqual('');

        expect(wrapper.state('carsList')).toHaveLength(8);

        let carsList = [];
        for(let i = 0; i < wrapper.state('carsList').length; i++){
            carsList.push(wrapper.state('carsList')[i]._id);
        }
        expect(carsList.sort()).toEqual(['59d2698c6f1dc2cbec89c413','59d2698c86ab54cee8acdc7b','59d2698cd6a3b8f0dd994c9d','59d2698ce2e7eeeb4f109001','59d2698cba9b82c2347cd13a','59d2698c340f2728382c0a73','59d2698c05889e0b23959106','59d2698c2eaefb1268b69ee5'].sort());

    });

    it("CarsList OR function test_6", () => {
        let wrapper = mount(<CarsList/>);
        wrapper.setProps({
            color: 'Gray',
            mileage: 0,
            hasSunroof:false,
            isFourWheelDrive:true,
            hasPowerWindows:true,
            hasNavigation:true,
            hasHeatedSeats:true,
            filterAndValue:false,
        });
        expect(wrapper.state('mileageBold')).toEqual('normal');
        expect(wrapper.state('sunRoofBold')).toEqual('normal');
        expect(wrapper.state('fourWheelDriveBold')).toEqual('bold');
        expect(wrapper.state('powerWindowsBold')).toEqual('bold');
        expect(wrapper.state('navigationBold')).toEqual('bold');
        expect(wrapper.state('heatedSeatsBold')).toEqual('bold');
        expect(wrapper.state('colorBold')).toEqual('bold');
        expect(wrapper.state('selectedColor')).toEqual('Gray');
        expect(wrapper.state('selectedMileage')).toEqual('');

        expect(wrapper.state('carsList')).toHaveLength(9);

        let carsList = [];
        for(let i = 0; i < wrapper.state('carsList').length; i++){
            carsList.push(wrapper.state('carsList')[i]._id);
        }
        expect(carsList.sort()).toEqual(['59d2698cda9e8d39476c678a','59d2698c6f1dc2cbec89c413','59d2698c86ab54cee8acdc7b','59d2698cd6a3b8f0dd994c9d','59d2698ce2e7eeeb4f109001','59d2698cba9b82c2347cd13a','59d2698c340f2728382c0a73','59d2698c05889e0b23959106','59d2698c2eaefb1268b69ee5'].sort());

    });


    it("CarsList OR function test_7", () => {
        let wrapper = mount(<CarsList/>);
        wrapper.setProps({
            color: '',
            mileage: 25000,
            hasSunroof:false,
            isFourWheelDrive:true,
            hasPowerWindows:true,
            hasNavigation:true,
            hasHeatedSeats:true,
            filterAndValue:false,
        });
        expect(wrapper.state('mileageBold')).toEqual('bold');
        expect(wrapper.state('sunRoofBold')).toEqual('normal');
        expect(wrapper.state('fourWheelDriveBold')).toEqual('bold');
        expect(wrapper.state('powerWindowsBold')).toEqual('bold');
        expect(wrapper.state('navigationBold')).toEqual('bold');
        expect(wrapper.state('heatedSeatsBold')).toEqual('bold');
        expect(wrapper.state('colorBold')).toEqual('normal');
        expect(wrapper.state('selectedColor')).toEqual('');
        expect(wrapper.state('selectedMileage')).toEqual(25000);

        expect(wrapper.state('carsList')).toHaveLength(9);

        let carsList = [];
        for(let i = 0; i < wrapper.state('carsList').length; i++){
            carsList.push(wrapper.state('carsList')[i]._id);
        }
        expect(carsList.sort()).toEqual(['59d2698cda9e8d39476c678a','59d2698c6f1dc2cbec89c413','59d2698c86ab54cee8acdc7b','59d2698cd6a3b8f0dd994c9d','59d2698ce2e7eeeb4f109001','59d2698cba9b82c2347cd13a','59d2698c340f2728382c0a73','59d2698c05889e0b23959106','59d2698c2eaefb1268b69ee5'].sort());

    });


    it("CarsList OR function test_8", () => {
        let wrapper = mount(<CarsList/>);
        wrapper.setProps({
            color: 'Red',
            mileage: 0,
            hasSunroof:false,
            isFourWheelDrive:true,
            hasPowerWindows:false,
            hasNavigation:false,
            hasHeatedSeats:false,
            filterAndValue:false,
        });
        expect(wrapper.state('mileageBold')).toEqual('normal');
        expect(wrapper.state('sunRoofBold')).toEqual('normal');
        expect(wrapper.state('fourWheelDriveBold')).toEqual('bold');
        expect(wrapper.state('powerWindowsBold')).toEqual('normal');
        expect(wrapper.state('navigationBold')).toEqual('normal');
        expect(wrapper.state('heatedSeatsBold')).toEqual('normal');
        expect(wrapper.state('colorBold')).toEqual('bold');
        expect(wrapper.state('selectedColor')).toEqual('Red');
        expect(wrapper.state('selectedMileage')).toEqual('');

        expect(wrapper.state('carsList')).toHaveLength(4);

        let carsList = [];
        for(let i = 0; i < wrapper.state('carsList').length; i++){
            carsList.push(wrapper.state('carsList')[i]._id);
        }
        expect(carsList.sort()).toEqual(['59d2698ce2e7eeeb4f109001','59d2698cba9b82c2347cd13a','59d2698c05889e0b23959106','59d2698c2eaefb1268b69ee5'].sort());

    });
    it("CarsList OR function test_9", () => {
        let wrapper = mount(<CarsList/>);
        wrapper.setProps({
            color: 'Silver',
            mileage: 0,
            hasSunroof:false,
            isFourWheelDrive:true,
            hasPowerWindows:false,
            hasNavigation:false,
            hasHeatedSeats:false,
            filterAndValue:false,
        });
        expect(wrapper.state('mileageBold')).toEqual('normal');
        expect(wrapper.state('sunRoofBold')).toEqual('normal');
        expect(wrapper.state('fourWheelDriveBold')).toEqual('bold');
        expect(wrapper.state('powerWindowsBold')).toEqual('normal');
        expect(wrapper.state('navigationBold')).toEqual('normal');
        expect(wrapper.state('heatedSeatsBold')).toEqual('normal');
        expect(wrapper.state('colorBold')).toEqual('bold');
        expect(wrapper.state('selectedColor')).toEqual('Silver');
        expect(wrapper.state('selectedMileage')).toEqual('');

        expect(wrapper.state('carsList')).toHaveLength(3);

        let carsList = [];
        for(let i = 0; i < wrapper.state('carsList').length; i++){
            carsList.push(wrapper.state('carsList')[i]._id);
        }
        expect(carsList.sort()).toEqual(['59d2698cba9b82c2347cd13a','59d2698c05889e0b23959106','59d2698c2eaefb1268b69ee5'].sort());

    });
    it("CarsList OR function test_10", () => {
        let wrapper = mount(<CarsList/>);
        wrapper.setProps({
            color: 'Black',
            mileage: 10000,
            hasSunroof:true,
            isFourWheelDrive:true,
            hasPowerWindows:false,
            hasNavigation:true,
            hasHeatedSeats:true,
            filterAndValue:false,
        });
        expect(wrapper.state('mileageBold')).toEqual('bold');
        expect(wrapper.state('sunRoofBold')).toEqual('bold');
        expect(wrapper.state('fourWheelDriveBold')).toEqual('bold');
        expect(wrapper.state('powerWindowsBold')).toEqual('normal');
        expect(wrapper.state('navigationBold')).toEqual('bold');
        expect(wrapper.state('heatedSeatsBold')).toEqual('bold');
        expect(wrapper.state('colorBold')).toEqual('bold');
        expect(wrapper.state('selectedColor')).toEqual('Black');
        expect(wrapper.state('selectedMileage')).toEqual(10000);

        expect(wrapper.state('carsList')).toHaveLength(9);

        let carsList = [];
        for(let i = 0; i < wrapper.state('carsList').length; i++){
            carsList.push(wrapper.state('carsList')[i]._id);
        }
        expect(carsList.sort()).toEqual(['59d2698cda9e8d39476c678a','59d2698c6f1dc2cbec89c413','59d2698c86ab54cee8acdc7b','59d2698cd6a3b8f0dd994c9d','59d2698ce2e7eeeb4f109001','59d2698cba9b82c2347cd13a','59d2698c340f2728382c0a73','59d2698c05889e0b23959106','59d2698c2eaefb1268b69ee5'].sort());

    });
});

describe('Snapshots', ()=>{
    it('match snapshot_1', ()=>{
        let tree = renderer.create(<CarsList
            color= 'Black'
            mileage={0}
            hasSunroof={true}
            isFourWheelDrive={true}
            hasPowerWindows={true}
            hasNavigation={true}
            hasHeatedSeats={true}
            filterAndValue={false}/>).toJSON();
        expect(tree).toMatchSnapshot();
    })
    it('match snapshot_2', ()=>{
        let tree = renderer.create(<CarsList
            color= 'Red'
            mileage={0}
            hasSunroof={false}
            isFourWheelDrive={true}
            hasPowerWindows={false}
            hasNavigation={true}
            hasHeatedSeats={true}
            filterAndValue={false}/>).toJSON();
        expect(tree).toMatchSnapshot();
    })
    it('match snapshot_3', ()=>{
        let tree = renderer.create(<CarsList
            color= 'White'
            mileage={10000}
            hasSunroof={true}
            isFourWheelDrive={true}
            hasPowerWindows={true}
            hasNavigation={true}
            hasHeatedSeats={true}
            filterAndValue={false}/>).toJSON();
        expect(tree).toMatchSnapshot();
    })
    it('match snapshot_4', ()=>{
        let tree = renderer.create(<CarsList
            color= 'Red'
            mileage={20000}
            hasSunroof={true}
            isFourWheelDrive={true}
            hasPowerWindows={true}
            hasNavigation={false}
            hasHeatedSeats={true}
            filterAndValue={false}/>).toJSON();
        expect(tree).toMatchSnapshot();
    })
    it('match snapshot_5', ()=>{
        let tree = renderer.create(<CarsList
            color= 'Black'
            mileage={5000}
            hasSunroof={true}
            isFourWheelDrive={true}
            hasPowerWindows={false}
            hasNavigation={true}
            hasHeatedSeats={false}
            filterAndValue={false}/>).toJSON();
        expect(tree).toMatchSnapshot();
    })
    it('match snapshot_6', ()=>{
        let tree = renderer.create(<CarsList
            color= 'Black'
            mileage={0}
            hasSunroof={true}
            isFourWheelDrive={true}
            hasPowerWindows={true}
            hasNavigation={true}
            hasHeatedSeats={true}
            filterAndValue={false}/>).toJSON();
        expect(tree).toMatchSnapshot();
    })
    it('match snapshot_7', ()=>{
        let tree = renderer.create(<CarsList
            color= 'Red'
            mileage={10000}
            hasSunroof={true}
            isFourWheelDrive={true}
            hasPowerWindows={true}
            hasNavigation={true}
            hasHeatedSeats={true}
            filterAndValue={true}/>).toJSON();
        expect(tree).toMatchSnapshot();
    })
    it('match snapshot_8', ()=>{
        let tree = renderer.create(<CarsList
            color= 'Red'
            mileage={10000}
            hasSunroof={true}
            isFourWheelDrive={true}
            hasPowerWindows={false}
            hasNavigation={true}
            hasHeatedSeats={true}
            filterAndValue={false}/>).toJSON();
        expect(tree).toMatchSnapshot();
    })
    it('match snapshot_9', ()=>{
        let tree = renderer.create(<CarsList
            color= 'Silver'
            mileage={0}
            hasSunroof={false}
            isFourWheelDrive={false}
            hasPowerWindows={false}
            hasNavigation={true}
            hasHeatedSeats={true}
            filterAndValue={true}/>).toJSON();
        expect(tree).toMatchSnapshot();
    })
    it('match snapshot_10', ()=>{
        let tree = renderer.create(<CarsList
            color= 'White'
            mileage={25000}
            hasSunroof={true}
            isFourWheelDrive={true}
            hasPowerWindows={true}
            hasNavigation={true}
            hasHeatedSeats={true}
            filterAndValue={false}/>).toJSON();
        expect(tree).toMatchSnapshot();
    })
})

