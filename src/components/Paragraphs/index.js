import React  from "react";
import {ParagraphBox}  from './style.js';
import {ParagraphTitle} from './style.js';
import {ParagraphContent}from './style.js';
import {ParagraphsAddMore} from './style.js';
import{Link} from 'react-router-dom';
const Paragraphs=({title,content, more_sv, more_ears, more_spoke, more_dz, more_bz, more_dr, more_sp, more_kb, more_ms, more_cc})=>{
    return(
    <ParagraphBox>
         <ParagraphTitle> {title} </ParagraphTitle>
         <ParagraphContent>{content}</ParagraphContent>
         <ParagraphsAddMore>
        <Link to='/test-task-paragraphs/svydovets' style={{textDecoration: 'none'}}>{ more_sv}</Link>  
        <Link to='/test-task-paragraphs/ears'      style={{textDecoration: 'none'}}>{more_ears}</Link>
        <Link to='/test-task-paragraphs/spoke'     style={{textDecoration: 'none'}}>{more_spoke}</Link>
        <Link to='/test-task-paragraphs/dzembonya' style={{textDecoration: 'none'}}>{more_dz}</Link>
        <Link to='/test-task-paragraphs/borzhava'  style={{textDecoration: 'none'}}>{more_bz}</Link>
        <Link to='/test-task-paragraphs/dovbush'   style={{textDecoration: 'none'}}>{more_dr}</Link>
        <Link to='/test-task-paragraphs/skolyvsypark' style={{textDecoration: 'none'}}>{more_sp}</Link>
        <Link to='/test-task-paragraphs/bridge' style={{textDecoration: 'none'}}>{more_kb}</Link>
        <Link to='/test-task-paragraphs/milkstone' style={{textDecoration: 'none'}}>{more_ms}</Link>
        <Link to='/test-task-paragraphs/cinderellacave' style={{textDecoration: 'none'}}>{more_cc}</Link>
        </ParagraphsAddMore>
    </ParagraphBox>
    )
}
export default Paragraphs;
