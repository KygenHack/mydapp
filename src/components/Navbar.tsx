import { ConnectWallet } from '@thirdweb-dev/react';
import React, { useState } from 'react';
import { NavLink } from "react-router-dom"; // Import NavLink


const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="navbar menu-lg trcNavColor">
      <div className="navbar-start">
        <img
          src="https://tbcrewardcoin.online/assets/trcfrontend/images/favicon.png"
          width={60}
        />
      </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal  z-[10] px-1">
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/about">About</NavLink></li>
      <li><NavLink to="/nft-pass">TokenizedNFT</NavLink></li>
      <li><NavLink to="/news">News</NavLink></li>
      <li tabIndex={0}>
        <details>
          <summary>Earn CTX</summary>
          <ul className="p-2">
            <li><NavLink to="/claim-airdrop">Airdrop</NavLink></li>
            <li><NavLink to="/collect-free-token">Collect Free Token</NavLink></li>
            <li><NavLink to="/earn-ctx">Giveaway</NavLink></li>
          </ul>
        </details>
      </li>

    </ul>
  </div>
  <div className="navbar-end">
  <NavLink to="/portal" className="btn smartbtn hidden lg:flex hover:bg-red-600 transition duration-300">Goto Smart Portal</NavLink>
  <div className="relative group">
          <button
            className="btn btn-ghost lg:hidden"
            onClick={toggleDropdown}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </button>
          {isDropdownOpen && (
            <ul className="menu menu-sm dropdown-content mt-3 z-[10] p-2 shadow bg-base-100 rounded-box w-100 absolute right-0">
              <li>
              <NavLink to="/">Home</NavLink>
              </li>
              <li>
              <NavLink to="/about">About</NavLink>
              </li>
              <li>
              <NavLink to="/nft-pass">TokenizedNFT</NavLink>
              </li>
              <li>
              <NavLink to="/news">News</NavLink>
              </li>
              <li>
                <a>Earn CTX</a>
                <ul className="p-2">
                  <li>
                    <a>Airdrop</a>
                  </li>
                  <li>
                    <a>Collect Free Token</a>
                  </li>
                  <li>
                    <a>Giveaway</a>
                  </li>
                </ul>
              </li>
            </ul>
          )}
        </div>

         </div>
            
</div>
  )
}

export default Navbar