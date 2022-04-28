import React, { Component } from "react";
import { NavLink , Route} from "react-router-dom";
import  Product from "./Product";

class Products extends Component {
  render() {
    var products = [
      {
        id: 1,
        slug: "iphone",
        name: "Iphone 7",
        price: 1000,
      },
      {
        id: 2,
        slug: "samsung",
        name: "samsung 8",
        price: 5000,
      },
      {
        id: 3,
        slug: "oppo",
        name: "oppo X",
        price: 8000,
      },
    ];

    var { match } = this.props; // this.props.match
    var url = match.url;

    var result = products.map((product, index) => {
      return (
        <NavLink to={`${url}/${product.slug}`} key={index}>
          <li className="list-group-item">
            {product.id} - {product.name} - {product.price}
          </li>
        </NavLink>
      );
    });

    return (
      <div className="container">
        <h1>Danh sách sản phẩm</h1>
        <div className="row">
          <ul className="list-group">
            <li className="list-group-item">{result}</li>
          </ul>
        </div>
        <div className="row">
          <Route path="/products/:name" component={Product}/>
        </div>
      </div>
    );
  }
}

export default Products;
