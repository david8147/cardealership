import React, {Component} from 'react';
import './App.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'
import CarsList from './components/CarsList/CarsList'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showForm:false,
            modalSearched: false,

            mileage:0,
            color: '',
            hasSunroof: false,
            isFourWheelDrive: false,
            hasPowerWindows: false,
            hasNavigation: false,
            hasHeatedSeats: false,

            filterAndValue: false,
        };
    }
    componentDidMount(){

    }
    handleChange = value => {
        this.setState({mileage: value})
    };
    handleSelectorChange= e =>{
        this.setState({color: e.target.value});
    };
    handleSubmit=()=>{
        this.setState({modalSearched:true, showForm:false})
    };
    handleOnHide=()=>{
        this.setState({showForm:false});
    };
    render(){
        return(
            <div>
                <Button className="buttonStyle" onClick={()=>{this.setState({showForm: !this.state.showForm})}}>Search</Button>

                <CarsList  color={this.state.color}
                           mileage={this.state.mileage}
                           hasSunroof={this.state.hasSunroof}
                           isFourWheelDrive={this.state.isFourWheelDrive}
                           hasPowerWindows={this.state.hasPowerWindows}
                           hasNavigation={this.state.hasNavigation}
                           hasHeatedSeats={this.state.hasHeatedSeats}

                           filterAndValue={this.state.filterAndValue}
                />
                <Modal show={this.state.showForm} onHide={this.handleOnHide}>
                    <Form>
                        <div className = "modalPadding">
                            <p className = "noMarginBottom">Color:</p>
                            <select value={this.state.color} onChange={this.handleSelectorChange}>
                                <option value="" ></option>
                                <option value="Red">Red</option>
                                <option value="White">White</option>
                                <option value="Gray">Gray</option>
                                <option value="Silver">Silver</option>
                                <option value="Black">Black</option>
                            </select>
                            <div className='slider'>
                                <div className = "dragMiles value">{"Mileage: "+this.state.mileage}</div>
                                <Slider
                                    min={0}
                                    max={50000}
                                    value={this.state.mileage}
                                    onChange={this.handleChange}
                                />
                            </div>

                            <Form.Group controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Sun Roof" checked = {this.state.hasSunroof} onChange={e => {this.setState({hasSunroof:e.target.checked})}} />
                            </Form.Group>
                            <Form.Group controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Four Wheel Drive" checked = {this.state.isFourWheelDrive} onChange={e => {this.setState({isFourWheelDrive:e.target.checked})}} />
                            </Form.Group>
                            <Form.Group controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Power Windows" checked = {this.state.hasPowerWindows} onChange={e => {this.setState({hasPowerWindows:e.target.checked})}} />
                            </Form.Group>
                            <Form.Group controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Navigation" checked = {this.state.hasNavigation} onChange={e => {this.setState({hasNavigation:e.target.checked})}} />
                            </Form.Group>
                            <Form.Group controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Heated Seats" checked = {this.state.hasHeatedSeats} onChange={e => {this.setState({hasHeatedSeats:e.target.checked})}} />
                            </Form.Group>
                            <Form.Group controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="And" checked = {this.state.filterAndValue} onChange={e => {this.setState({filterAndValue:e.target.checked})}} />
                            </Form.Group>
                            <Button variant="primary" type="submit" onClick={(e)=>{
                                e.preventDefault();
                                this.handleSubmit();
                            }}>
                                Submit
                            </Button>
                            <Button variant="secondary" onClick={()=>{this.setState({showForm: !this.state.showForm})}}>
                                Close
                            </Button>
                        </div>
                    </Form>
                </Modal>

            </div>
        )
    }
}

export default App;

