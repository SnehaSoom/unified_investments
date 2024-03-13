import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const Footer = () => {
  const menuLinks = [
    { id: 1, label: 'Company', to: '/company' },
    { id: 2, label: 'Investor', to: '/investors' },
    { id: 3, label: 'Products', to: '/products' },
    { id: 4, label: 'Journal', to: '/journal' },
    { id: 5, label: 'Reach Us', to: '/reach-us' },
  ];

  return (
    <nav className="footer">
      <div className="footer-brand">
        Menu
      </div>
      <div className="footer-links">
        {menuLinks.map(link => (
          <Link key={link.id} to={link.to}>{link.label}</Link>
        ))}
      </div>
    </nav>
  );
};

const App = () => {
  return (
    <Router>
      <div>
        {/* Your other components */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
