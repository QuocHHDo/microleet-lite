'use client';

import React from 'react';
import Link from 'next/link';
import '../styles/globals.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1>Microlearning Platform</h1>
      <ul className="nav-links">
        <li>
          {/* <Link href="/">Home</Link> */}
          <Link href="/leetcode">LeetCode</Link>
        </li>
        <li>
          {/* <Link href="/software-engineering">Software Engineering</Link> */}
          {/* <Link href="/coming-soon">Software Engineering</Link> */}
          <Link href="/test">Software Engineering</Link>
        </li>
      </ul>
    </nav>
  );
}
