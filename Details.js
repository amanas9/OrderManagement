import React, { Component } from "react";
import axios from "axios";

class Details extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ItemName: "",
      ItemNumber: "",
      ItemQuantity: "",
      Hazmat: "",
      Weight: "",
      Uom: "",
      Weightuom: "",
      CreatedDate: "",
      LastUpdatedDate: "",
      OrderNumber: "",
      Status: "",
      City: "",
      State: "",
      Country: "",
    };
  }

  componentDidMount = () => {
    const id = this.props.match.params.id;
    console.log(id);
    axios
      .get(`http://localhost:8080/api/orders/${id}`)
      .then((response) => {
        const item = response.data;
        console.log(item);
        this.setState({
          ItemName: item.itemName,
          ItemNumber: item.itemNumber,
          ItemQuantity: item.itemQuantity,
          Hazmat: item.hazmat,
          Weight: item.itemWeight,
          Uom: item.uom,
          Weightuom: item.uomWeight,
          CreatedDate: item.orderSample.createdDateTime,
          LastUpdatedDate: item.orderSample.lastUpdatedDateTime,
          OrderNumber: item.orderSample.orderNumber,
          Status: item.orderSample.orderStatus,
          City: item.orderSample.location.city,
          State: item.orderSample.location.state,
          Country: item.orderSample.location.country,
        });
      })
      .catch((err) => console.log(err));
  };

  render() {
    return(
    <div style={{
        width: '70%',
        margin: 'auto'

    }}>
      <table className="table table-sm table-striped"  style={{marginTop: '30px'}}>
        <thead className='thead-dark'>
          <tr>
            <th scope="col">Categories</th>
            <th scope="col">Details</th>
          </tr>
        </thead>
         <tbody>
             {
                 Object.keys(this.state).map( (keyItem, index) => {
                     return (
                         <tr key={index}>
                             <th>{keyItem}</th>
                             <td>{this.state[keyItem]}</td>
                         </tr>
                     )
                 })
             }
         </tbody>
      </table>
    </div>
    )
  }
}
export default Details;
