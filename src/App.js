import logo from './logo.svg';
import './App.css';
import React, { Fragment } from 'react';
import Practice from './Practice';
import Section2 from './Section2';
import { Dialog } from '@headlessui/react';
import MyModal from './Dialogue';


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
function App() {
  return (
    <>
  <Practice  />
  <Section2/>
<MyModal />
  </>
  );
}

export default App;
