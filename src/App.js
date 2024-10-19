import React, { useCallback, useState } from 'react';
import Table from './components/Table';
import ClearButton from './components/ClearButton';
import './App.css';

const Murderers = [
  'פרופ\' שזיפי',
  'גברת רקיע',
  'גברת שני',
  'סא"ל חרדלי',
  'אדון גרין',
  'דוקטור אורכידאה'
];

const MurderWeapons = [
  'חבל',
  'מוט ברזל',
  'אקדח',
  'מפתח צינורות',
  'פגיון',
  'פמוט'
];

const Rooms = [
  'מסדרון',
  'סלון',
  'ספרייה',
  'חדר ביליארד',
  'אולם נשפים',
  'חדר אוכל',
  'מטבח',
  'חדר העבודה',
  'חממה'
]

const useReload = () => {
  const [key, setKey] = useState(0);

  const reload = useCallback(() => {
    setKey((prev) => prev + 1);
  }, []);

  return [key, reload];
};


const App = () => {
  const [key, reload] = useReload();

  const clearAllTables = () => {
    if (window.confirm('אתם בטוחים שאתם רוצים למחוק הכל?')) {
      localStorage.clear();
      reload();      
    }
  }


  return (
    <div className="App" key={key}>
      <div className="fixed-table">
        <Table rowNum={1} tableId="Names" />
      </div>
      <div className="scrolling-tables">
      <Table rowNum={6} texts={Murderers} tableId="Murderes" />
      <Table rowNum={6} texts={MurderWeapons} tableId="MurderWeapons" />
      <Table rowNum={9} texts={Rooms} tableId="Rooms" />
      <ClearButton clearFunction={clearAllTables} />
      </div>
    </div>
  );
};

export default App;