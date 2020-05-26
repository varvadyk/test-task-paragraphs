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
        <Link to='/svydovets' style={{textDecoration: 'none'}}>{ more_sv}</Link>  
        <Link to='/ears'      style={{textDecoration: 'none'}}>{more_ears}</Link>
        <Link to='/spoke'     style={{textDecoration: 'none'}}>{more_spoke}</Link>
        <Link to='/dzembonya' style={{textDecoration: 'none'}}>{more_dz}</Link>
        <Link to='/borzhava'  style={{textDecoration: 'none'}}>{more_bz}</Link>
        <Link to='/dovbush'   style={{textDecoration: 'none'}}>{more_dr}</Link>
        <Link to='/skolyvsypark' style={{textDecoration: 'none'}}>{more_sp}</Link>
        <Link to='/bridge' style={{textDecoration: 'none'}}>{more_kb}</Link>
        <Link to='/milkstone' style={{textDecoration: 'none'}}>{more_ms}</Link>
        <Link to='/cinderellacave' style={{textDecoration: 'none'}}>{more_cc}</Link>
        </ParagraphsAddMore>
    </ParagraphBox>
    )
}
export default Paragraphs;
