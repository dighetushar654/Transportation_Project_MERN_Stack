import React from 'react';
import axios from "axios";
import '../../App.css';

export default class vehicleList extends React.Component {
  state = {
    vehicle: [],
  };

  componentDidMount() {
    axios.get("http://localhost:4000/homeimages").then(res => {
      console.log(res);
      this.setState({vehicle: res.data});
    })
  }
}