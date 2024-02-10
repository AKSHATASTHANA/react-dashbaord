import React, { useState } from 'react';
import Sidebar from '../sidebar/sidebar';
import Footer from '../../footer';
import icon from '../login/icon.png';
import icon1 from '../login/3.png';
import icon2 from '../login/4.png';
import icon4 from '../login/search.png';

function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [items, setItems] = useState([
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' }
  ]);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleAddItem = () => {
    const newItem = { id: items.length + 1, name: `Item ${items.length + 1}` };
    setItems([...items, newItem]);
  };

  const handleDeleteItem = (id) => {
    const updatedItems = items.filter(item => item.id !== id);
    setItems(updatedItems);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className={`navbar`}>
        <button className="toggle-button" onClick={toggleSidebar}>
          ☰
        </button>
        <div className="navbar-title">Dashboard</div>
      </div>
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className={`overlay ${sidebarOpen ? 'active' : ''}`} onClick={toggleSidebar}></div>
      <div className="content">
        <div>
          <div style={{ position: 'relative', display: 'inline-block' }}>
            <input
              type="text"
              placeholder="Search Article no"
              value={searchTerm}
              onChange={handleSearch}
              style={{ width: '300px', paddingLeft: '30px' }} // Adjust the width and padding as needed
            />
            <img
              src={icon4} // Replace 'search-icon.png' with the path to your search icon image
              alt="Search"
              style={{
                position: 'absolute',
                left: '10px', // Adjust the left position as needed
                top: '50%',
                transform: 'translateY(-50%)',
                width: '20px', // Adjust the width as needed
                height: 'auto'
              }}
            />
          </div>
          <div style={{ position: 'relative', display: 'inline-block' }}>
            <input
              type="text"
              placeholder="Search Product"
              value={searchTerm}
              onChange={handleSearch}
              style={{ width: '300px', paddingLeft: '30px' }} // Adjust the width and padding as needed
            />
            <img
              src={icon4} // Replace 'search-icon.png' with the path to your search icon image
              alt="Search"
              style={{
                position: 'absolute',
                left: '10px', // Adjust the left position as needed
                top: '50%',
                transform: 'translateY(-50%)',
                width: '20px', // Adjust the width as needed
                height: 'auto'
              }}
            />
          </div>
          <div classname='button' style={{ display: 'flex', justifyContent: 'space-between' }}>
            <button
              onClick={handleAddItem}
              className="btn btn-primary"
              style={{
                backgroundImage: `url(${icon})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'contain',
                backgroundColor: 'white',
                borderRadius: '100px',
                padding: '15px 30px', // Increase padding for larger size
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                border: 'none',
                transition: 'box-shadow 0.3s ease',
                fontSize: '60px', // Increase font size for larger size
              }}
            >
            </button>
            <button
              className="btn btn-primary"
              style={{
                backgroundImage: `url(${icon1})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'contain',
                backgroundColor: 'white',
                borderRadius: '100px',
                padding: '15px 30px',
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                border: 'none',
                transition: 'box-shadow 0.3s ease',
                fontSize: '60px',
              }}
            >
            </button>
            <button
              className="btn btn-primary"
              style={{
                backgroundImage: `url(${icon2})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'contain',
                backgroundColor: 'white',
                borderRadius: '100px',
                padding: '15px 30px',
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                border: 'none',
                transition: 'box-shadow 0.3s ease',
                fontSize: '60px',
              }}
            >
            </button>
          </div>
        </div>
        <div className="grid-container">
          <div className="article">Article No</div>
          <div className="product">Product/Article</div>
          <div className="price">Price</div>
              <input classname="firstrow" type="text" className="article" />
              <input type="text" className="product"  />
              <div className="grid-cell">
                <button onClick={() => handleDeleteItem()}>Delete</button>
              </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Dashboard;
