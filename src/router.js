import React from 'react';
import Svydovets from './components/mountations/Svydovets/Svydovets';
import BigEars from './components/mountations/BigEars/BigEars';
import Spoke from './components/mountations/Spoke/Spoke';
import Dzembonya from './components/mountations/Dzembonya/Dzembonya';
import Borzhava from './components/mountations/Borzhava/Borzhava';
import Dovbush from './components/mountations/Dovbush/Dovbush';
import SkolyvsyPark from './components/mountations/SkolyvsyPark/SkolyvsyPark';
import Bridge from './components/mountations/Bridge/Bridge';
import MilkStone from './components/mountations/MilkStone/MilkStone';
import CinderellaCave from './components/mountations/CinderellaCave/CinderellaCave';
import Home from './page/Home';

export const routes=[
    {
      path:'/test-task-paragraphs',
      component:<Home />,
      exact: true
    },
    {
      path:'/test-task-paragraphs/spoke',
      component:<Spoke/>
  },
      {
        path:'/test-task-paragraphs/svydovets',
        component:<Svydovets/>
    },
    {
      path:'/test-task-paragraphs/ears',
      component:<BigEars/>
      
    },  
    {
      path:'/test-task-paragraphs/dzembonya',
      component:<Dzembonya/>

    },

    {
      path:'/test-task-paragraphs/borzhava',
      component:<Borzhava/>

    },
    {
      path:'/test-task-paragraphs/dovbush',
      component:<Dovbush/>

    },
    
    {
      path:'/test-task-paragraphs/skolyvsypark',
      component:<SkolyvsyPark/>

    },
    
    {
      path:'/test-task-paragraphs/bridge',
      component:<Bridge/>

    },
    {
      path:'/test-task-paragraphs/milkstone',
      component:<MilkStone />

    },
    
    {
      path:'/test-task-paragraphs/cinderellacave',
      component:<CinderellaCave />

    },
    {
      path:'*',
      component: ()=>(<div>page not found</div>),
     
   }
   ];
