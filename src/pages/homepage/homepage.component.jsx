import React from 'react';

import './homepage.styles.scss';

import Directory from '../../components/directory/directory.component';

const HomePage = () => (
  //FUNCTIONAL COMPONENT STATE NOT STORED NOR LIFE CYCLE NEEDED 
<div className ='homepage'>
 <Directory />
 </div> 
);

     export default HomePage;