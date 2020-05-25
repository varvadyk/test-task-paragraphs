import React from 'react';
import Home from './page/Home';
export const routes=[
    

       {
          path:'/',
          component:<Home />,
          exact: true
      },
  
    {
      path:'*',
      component: ()=>(<div>page not found</div>),
     
   }
   ];