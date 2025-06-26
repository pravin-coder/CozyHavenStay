import React from 'react';

export default function UserNavbar() {
  return (
    <header className="bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1 items-center space-x-3">
          <a href="/" className="-m-1.5 p-1.5 flex items-center space-x-2">
            <h2 className="text-2xl font-semibold text-indigo-700">CozyHaven</h2>
          </a>
        </div>
      </nav>
    </header>
  );
}
