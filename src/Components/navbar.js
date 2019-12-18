import React, { Component } from 'react'
import title from "../assets/title.jpg";
import StyledNavbar from "./navbar.style";

export default class navbar extends Component {
  render() {
    return (
      <StyledNavbar>
        <img src={title} alt="title" className="title" />
      </StyledNavbar>
    );
  }
}
