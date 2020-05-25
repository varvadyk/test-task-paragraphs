import React  from "react";
import {ParagraphBox}  from './style.js';
import {ParagraphTitle} from './style.js';
import {ParagraphContent}from './style.js';

const Paragraphs=({title,content})=>{
    return(
<ParagraphBox>
         <ParagraphTitle> {title} </ParagraphTitle>
         <ParagraphContent>{content}</ParagraphContent>
         </ParagraphBox>
    )
}
export default Paragraphs;
