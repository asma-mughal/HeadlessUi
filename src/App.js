import logo from './logo.svg';
import './App.css';
import React, { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import Practice from './Practice';
import Section2 from './Section2';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
function App() {
  return (
    <>
  <Practice  />
  <Section2/>
  </>
  );
}

export default App;
