import React from 'react';
import { Link } from 'react-router-dom';

import { removeToken } from 'src/utils/accessToken';

import Button from 'src/components/Button';

type MainLayoutProps = {
  children: React.ReactNode;
};

export default function MainLayout({ children }: MainLayoutProps) {
  const logout = () => {
    removeToken();
    window.location.reload();
  };

  return (
    <div className="flex flex-col items-center px-6 pt-6 pb-10 max-w-3xl mx-auto">
      <header className="flex justify-between items-center w-full">
        <Link
          to="/"
          className="flex items-center text-2xl font-semibold text-gray-900 dark:text-white select-none"
        >
          Todolist
        </Link>
        <Button
          onClick={logout}
          label="logout"
          styles={{ border: true, shape: 'long', color: 'primary' }}
        >
          <p>Logout</p>
        </Button>
      </header>
      {children}
    </div>
  );
}
