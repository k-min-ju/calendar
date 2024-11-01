import React from 'react';
import { Calendar } from '@/components/';
import { LoadingProvider } from '@/context';
import 'react-datepicker/dist/react-datepicker.css';
import '@/styles/calendar.scss';

function App(): React.JSX.Element {
  return (
    <div className="calendar-container">
      <div className="calendar-header">Holiday Searching</div>
      <LoadingProvider>
        <Calendar />
      </LoadingProvider>
    </div>
  );
}

export default App;
