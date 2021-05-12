import React from "react";

function Footer() {

    const date = new Date().getFullYear();
    return (
        <div className="footer">
            <p className="footer-para">Copyright © {date} Prahalad Hazarika</p>
        </div>
    );
}

export default Footer;