import React from 'react';
import Table from './components/Table';
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

const App = () => {
  return (
    <div className="App">
      <Table rowNum={1}/>
      <Table rowNum={6} texts={Murderers}/>
      <Table rowNum={6} texts={MurderWeapons}/>
      <Table rowNum={9} texts={Rooms}/>
    </div>
  );
};

export default App;