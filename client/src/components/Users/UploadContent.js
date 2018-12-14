import React, { Component } from "react";
import axios from "axios";

class UploadContent extends Component {
  state = {
    newPost: {
      content: "",
      created_at: ""
    }
  };

  render() {
    return (
      <div>
        <h1>UploadContent</h1>
      </div>
    );
  }
}

export default UploadContent;
