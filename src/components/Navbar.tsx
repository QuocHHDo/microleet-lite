'use client';

import React from 'react';
import Link from 'next/link';
import ExportImportProgress from './ExportImportProgress';
import '../styles/globals.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="flex items-center justify-between max-w-7xl mx-auto px-4">
        <Link href="/">
          <h1 className="font-sans md:font-serif text-3xl md:text-4xl font-bold text-gradient text-gray-800 mt-4 mb-4 cursor-pointer hover:opacity-80 transition-opacity">
            Microleet Lite 🧠
          </h1>
        </Link>
        <div className="hidden md:block mt-4 mb-4">
          <ExportImportProgress />
        </div>
      </div>
      <ul className="nav-links">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/leetcode">LeetCode</Link>
        </li>
        <li>
          <Link href="/oop">OOP</Link>
        </li>
        <li>
          <Link href="/code-playground" prefetch={false}>🚀 Playground</Link>
        </li>
        <li className="md:hidden">
          <ExportImportProgress />
        </li>
      </ul>
    </nav>
  );
}
