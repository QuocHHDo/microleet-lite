'use client';

import React from 'react';
import Link from 'next/link';
import '../styles/globals.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="font-sans md:font-serif text-4xl font-bold text-gradient text-gray-800 text-center mt-4 mb-4">
        Microleet Lite 🧠
      </h1>
      <ul className="nav-links">
        <li>
          {/* <Link href="/">Home</Link> */}
          <Link href="/leetcode">LeetCode</Link>
        </li>
        <li>
          {/* <Link href="/software-engineering">Software Engineering</Link> */}
        </li>
      </ul>
    </nav>
  );
}
