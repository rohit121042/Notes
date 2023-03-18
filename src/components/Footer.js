import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ {year}</p>
      <p>Made by Rohit42</p>
    </footer>
  );
}

export default Footer;
