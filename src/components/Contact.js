import React, { Component } from "react";
import { Prompt } from "react-router-dom";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: false,
    };
  }

  onClick = (isChecked) => {
    this.setState({
      isChecked: isChecked,
    });
  };
  render() {
    var { isChecked } = this.state;
    return (
      <div>
        Đây là trang liên hệ <br />
        <button
          type="button"
          className="btn btn-info"
          onClick={() => {
            this.onClick(false);
          }}
        >
          Cho phép
        </button>{" "}
        <br />
        <button type="button" className="btn btn-danger">
          Không Cho phép
        </button>{" "}
        <br />
        <Prompt
          when={isChecked}
          message={(location) => {
            return location.pathname.startsWith("/admin")
              ? "Bạn có chắc chắn muốn đi đến trang này?"
              : true;
          }}
        />
      </div>
    );
  }
}

export default Contact;
