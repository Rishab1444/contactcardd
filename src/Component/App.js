import React from 'react';
import './App.css';
import Header from './header';
import AddContact from './AddContact';
import ContactList from './ContactList';

function App() {
  const Contact = [
    {
      id :"1",
      name : "Rishab",
      email :"absc@gmail.com",

    },
    {
      
      id :"2",
      name : "hishab",
      email :"qqbsc@gmail.com",
    }
  ];
  return (
      <div className='ui container'>
          <Header />
          <AddContact />
           <ContactList Contact = {Contact} /> 
           {/* this a way to do props acces */}

                 </div>
  );
}

export default App;
