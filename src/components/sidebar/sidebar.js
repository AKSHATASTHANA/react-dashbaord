import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBusinessTime,faReceipt,faUser} from '@fortawesome/free-solid-svg-icons';

function Sidebar({ open }) {
  return (
    <div className={`sidebar ${open ? 'open' : ''}`}>
      <div className="sidebar-header">
        Menu
      </div>
      <ul className="sidebar-menu">
        <li>
<FontAwesomeIcon icon = {faUser} style={{color: "#ff0505"}} />
          <span> Employee</span>
        </li>
        <li>
        <FontAwesomeIcon icon= {faReceipt} style={{color: "#74C0FC"}} />
          <span> Invoices</span>
        </li>
        <li>
        <FontAwesomeIcon icon={faBusinessTime} style={{color: "#63E6BE"}} />
          <span> Bussiness</span>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
