import './App.css';
import React from 'react';
import { RedocStandalone } from 'redoc';


function App() {
  return (
    <div className="App">
        <RedocStandalone
          specUrl="http://petstore.swagger.io/v2/swagger.json"
          options={{
            nativeScrollbars: true,
            theme: { colors: { primary: { main: '#dd5522' } } },
          }}
        />
    </div>
  );
}

export default App;
