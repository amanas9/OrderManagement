import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./ListHome.css";

class ListHome extends Component {
  constructor() {
    super();

    this.state = {
      orderItems: [],
    };
  }

  componentDidMount() {
    console.log("hello");
    this.loadOrderItems();
  }

  deleteOrder = (id) => {
    console.log(id);
    axios
      .delete(`http://localhost:8080/api/orders/${id}`)
      .then(() => this.loadOrderItems())
      .catch((err) => console.log(err));
  };

  loadOrderItems = () => {
    axios
      .get("http://localhost:8080/api/orders")
      .then((response) => {
        console.log(response.data);
        this.setState({ orderItems: response.data });
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div style={{ width: "90%", margin: "auto" }}>
      
        <h2 style={{ marginBottom: "10px" , marginTop: '10px'}}>Order Management System</h2>
      
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Item Number</th>
              <th scope="col">Item Name</th>
              <th scope="col">Item Quantity</th>
              <th scope="col">Details</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.state.orderItems &&
              this.state.orderItems.map((item, index) => (
                <tr key={index}>
                  <td>{item.itemNumber}</td>
                  <td>{item.itemName}</td>
                  <td>{item.itemQuantity}</td>
                  <td>
                    <Link
                      className="btn btn-info"
                      to={`/orderdetails/${item.id}`}
                    >
                      Details
                    </Link>
                  </td>
                  <td>
                    <Link className="btn btn-primary" to={`/order/${item.id}`}>Edit</Link>
                    <Link
                      className="btn btn-danger"
                      onClick={() => this.deleteOrder(item.id)}
                    >
                      Delete
                    </Link>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ListHome;
