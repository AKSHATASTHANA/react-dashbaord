// Footer.js

import React from 'react';

function Footer() {
  return (
    <footer style={footerStyle}>
      <p>&copy; CopyRight</p>
    </footer>
  );
}

const footerStyle = {
  textAlign: 'center',
  backgroundColor: 'rgba(0, 0, 0, 0.5)', 
  color: '#fff',
  padding: '10px 0',
  position: 'absolute', 
  bottom: 0,
  left: 0,
  width: '100%',
};

export default Footer;
