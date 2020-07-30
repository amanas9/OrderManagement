import React, { Component } from "react";
import axios from "axios";

class EditOrder extends Component {
  constructor(props) {
    super(props);

    this.state = {
      itemName: "",
      itemNumber: "",
      itemQuantity: "",
      hazmat: "",
      itemWeight: "",
      uom: "",
      weightuom: "",
      createdDate: "",
      lastUpdatedDate: "",
      orderNumber: "",
      status: "",
      locationName: "",
      city: "",
      state: "",
      country: "",
      pinCode: "",
    };
  }

  componentDidMount = () => {
      this.loadOrder();
  }

  loadOrder = () => {
    const id = this.props.match.params.id;

    axios.get(`http://localhost:8080/api/orders/${id}`)
       .then( response => 
         {
             const data = response.data;
          this.setState(
              {
                itemName: data.itemName,
      itemNumber: data.itemNumber,
      itemQuantity:data.itemQuantity,
      hazmat: data.hazmat,
      itemWeight: data.itemWeight,
      uom: data.uom,
      weightuom: data.uomWeight,
      createdDate: data.orderSample.createdDateTime,
      lastUpdatedDate: data.orderSample.lastUpdatedDateTime,
      orderNumber: data.orderSample.orderNumber,
      status: data.orderSample.status,
      locationName: data.orderSample.location.locationName,
      city: data.orderSample.location.city,
      state: data.orderSample.location.state,
      country: data.orderSample.location.country,
      pinCode: data.orderSample.location.pinCode,
              }
          )
            })
    
  }

  onChangeHandler = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }


  onSubmitHandler = (e) => {
    e.preventDefault();
    const id = this.props.match.params.id;
    axios.put(`http://localhost:8080/api/orders/${id}`, 
    {
      "hazmat": this.state.hazmat,
      "itemName": this.state.itemName,
      "itemNumber": this.state.itemNumber,
      "itemQuantity": this.state.itemQuantity,
      "itemWeight": this.state.itemQuantity,
      "orderSample": {
          "createdDateTime": this.state.createdDate,
          "lastUpdatedDateTime": this.state.lastUpdatedDate,
          "orderNumber": this.state.orderNumber,
          "orderStatus": this.state.status,
          "location": {
              "city": this.state.city,
              "country": this.state.country,
              "locationName": this.state.locationName,
              "pinCode": this.state.pinCode,
              "state": this.state.state
          },
      },
      "uom": this.state.uom,
      "uomWeight": this.state.uomWeight
  }
    ).then(() => this.props.history.push("/"))
    .catch(err => console.log(err));
    
  }

  render() {
    return (
      <div
        style={{
          width: "90%",
          margin: "auto",
        }}
      >
        <h1>Edit Order</h1>
        <form onSubmit={e => this.onSubmitHandler(e)}>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label for="itemName">Item Name</label>
              <input
                type="text"
                className="form-control"
                id="itemName"
                name="itemName"
                value={this.state.itemName}
                onChange={(e) => this.onChangeHandler(e)}
              />
            </div>
            <div className="form-group col-md-6">
              <label for="itemNumber">Item Number</label>
              <input
                type="number"
                className="form-control"
                id="itemNumber"
                name="itemNumber"
                value={this.state.itemNumber}
                onChange={(e) => this.onChangeHandler(e)}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group col-md-4">
              <label for="hazmat">Hazmat</label>
              <select
                id="hazmat"
                className="form-control"
                name="hazmat"
                value={this.state.hazmat}
                onChange={(e) => this.onChangeHandler(e)}
              >
                <option value="0">0</option>
                <option value="1">1</option>
              </select>
            </div>
            <div className="form-group col-md-4">
              <label for="itemNumber">Item Quantity</label>
              <input
                type="number"
                className="form-control"
                id="itemQuantity"
                name="itemQuantity"
                value={this.state.itemQuantity}
                onChange={(e) => this.onChangeHandler(e)}
              />
            </div>
            <div className="form-group col-md-4">
              <label for="itemWeight">Item Weight</label>
              <input
                type="number"
                className="form-control"
                id="itemWeight"
                name="itemWeight"
                value={this.state.itemWeight}
                onChange={(e) => this.onChangeHandler(e)}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group col-md-6">
              <label for="createdDate">Created Date</label>
              <input
                type="date"
                className="form-control"
                id="createdDate"
                name="createdDate"
                value={this.state.createdDate}
                onChange={(e) => this.onChangeHandler(e)}
              />
            </div>
            <div className="form-group col-md-6">
              <label for="lastUpdatedDate">Last Updated Date</label>
              <input
                type="date"
                className="form-control"
                id="lastUpdatedDate"
                name="lastUpdatedDate"
                value={this.state.lastUpdatedDate}
                onChange={(e) => this.onChangeHandler(e)}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group col-md-6">
              <label for="orderNumber">Order Number</label>
              <input
                type="text"
                className="form-control"
                id="orderNumber"
                name="orderNumber"
                value={this.state.orderNumber}
                onChange={(e) => this.onChangeHandler(e)}
              />
            </div>
            <div className="form-group col-md-6">
              <label for="status">Status</label>
              <select
                id="status"
                className="form-control"
                name="status"
                value={this.state.status}
                onChange={(e) => this.onChangeHandler(e)}
              >
                <option value="Delayed">Delayed</option>
                <option value="Confirmed">Confirmed</option>
                <option value="Pending">Pending</option>
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group col-md-8">
              <label for="locationName">Location Name</label>
              <input
                type="text"
                className="form-control"
                id="locationName"
                name="locationName"
                value={this.state.locationName}
                onChange={(e) => this.onChangeHandler(e)}
              />
            </div>
            <div className="form-group col-md-4">
              <label for="city">City</label>
              <input
                type="text"
                className="form-control"
                id="city"
                name="city"
                value={this.state.city}
                onChange={(e) => this.onChangeHandler(e)}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group col-md-4">
              <label for="isate">State</label>
              <input
                type="text"
                className="form-control"
                id="state"
                name="state"
                value={this.state.state}
                onChange={(e) => this.onChangeHandler(e)}
              />
            </div>
            <div className="form-group col-md-4">
              <label for="country">Country</label>
              <input
                type="text"
                className="form-control"
                id="country"
                name="country"
                value={this.state.country}
                onChange={(e) => this.onChangeHandler(e)}
              />
            </div>

            <div className="form-group col-md-4">
              <label for="pinCode">Pin Code </label>
              <input
                type="text"
                className="form-control"
                id="pinCode"
                name="pinCode"
                value={this.state.pinCode}
                onChange={(e) => this.onChangeHandler(e)}
              />
            </div>
          </div>

          <button type="submit" className="btn btn-primary">
            Save 
          </button>
        </form>
      </div>
    );
  }
}

export default EditOrder;
