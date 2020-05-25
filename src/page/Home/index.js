import React from 'react';
import {useSelector} from 'react-redux';
import Paragraphs from '../../components/Paragraphs';
import {ParagraphWrapper} from './style.js';
import {CustomizedInputBase} from '../../components/SurchParagraph';
import {PaginationControlled} from '../../components/Pagination';
import {paragraphs}  from '../../selectors';
import {SearchWrapper}  from './style.js';
import{ParagraphNavigation}from './style.js';

const Home =()=>{
    const dataparagraphs=useSelector(paragraphs);
    console.log(dataparagraphs);
    const allParagraphs =dataparagraphs.map((post)=>{
        const {title,content}=post;
    return(
        <>
       
    <ParagraphWrapper>
     <Paragraphs 
        title={title}
        content={content}
         />
   </ParagraphWrapper>
   
   </>
    )

})
return(
    <>
    <SearchWrapper>
   <CustomizedInputBase />
       </SearchWrapper>

    {/* <ParagraphNavigation>
    <PaginationControlled />
    </ParagraphNavigation> */}
    </>
)
}
export default Home;