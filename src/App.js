import logo from './logo.svg';
import './App.css';
import React, { Fragment } from 'react';
import Practice from './Practice';
import Section2 from './Section2';
import { Dialog, RadioGroup } from '@headlessui/react';
import MyModal from './Dialogue';
import Example from './RadioGroup';


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
function App() {
  return (
    <>
  <Practice  />
  <Section2/>
<MyModal />
<div className='bg-red-500'>
  helow
<Example />
</div>
  </>
  );
}

export default App;
