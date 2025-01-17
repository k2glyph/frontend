import './services/i18n';

import React from 'react';

import Router from './router';

const App: React.FC = () => {
  return (
    <div className="flex flex-row min-h-screen text-gray-800 bg-gray-100 dark:bg-gray-900 dark:text-white">
      <Router />
    </div>
  );
};

export default App;
