import React from 'react';
import { ThemeProvider } from '@/components/theme-provider';
import DashboardPage from '../app/dashboard/page';

function App() {
  return (
    <div className="min-h-screen bg-[hsl(240_5.9%_10%)]">
      <ThemeProvider defaultTheme="dark" attribute="class">
        <DashboardPage />
      </ThemeProvider>
    </div>
  );
}

export default App;