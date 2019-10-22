import React from 'react';

import './homepage.styles.scss';

const HomePage = () => (
  //FUNCTIONAL COMPONENT STATE NOT STORED NOR LIFE CYCLE NEEDED 
<div className ='homepage'>
  <div className='directory-menu'>
    <div className='menu-item'>
       <div className='content'>
         <h1 className= 'title'>HATS</h1>
            <span className='subtitle'>SHOP NOW</span>
           </div>
        </div>
 <div className='menu-item'>
  <div className='content'>
    <h1 className= 'title'>JACKETS</h1>
      <span className='subtitle'>SHOP NOW</span>
   </div>
  </div>
<div className='menu-item'>
  <div className='content'>
     <h1 className= 'title'>SNEAKERS</h1>
       <span className='subtitle'>SHOP NOW</span>
          </div>
       </div>
     <div className='menu-item'>
      <div className='content'>
         <h1 className= 'title'>WOMENS</h1>
           <span className='subtitle'>SHOP NOW</span>
          </div>
          </div>
<div className='menu-item'>
         <div className='content'>
           <h1 className= 'title'>MENS</h1>
                  <span className='subtitle'>SHOP NOW</span>
          </div>
     </div>
     </div>
     </div>
);

     export default HomePage;
      //exporting function