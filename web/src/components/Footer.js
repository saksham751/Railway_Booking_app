import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer
        className='page-footer font-small'
        style={{
          backgroundColor: "#4B4A4A",
          color: "white",
          position: "",
          bottom: 0,
          width: "100%",
        }}
      >
        <div className='footer-copyright text-center py-3'>
          © 2022 Copyright:
          <a href='https://Rail-Mitra.wordpress.com'>
            {" "}
            Rail-Mitra.wordpress.com
          </a>
        </div>
      </footer>
    );
  }
}

export default Footer;
