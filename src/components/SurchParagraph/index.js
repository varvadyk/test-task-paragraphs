import React, { useEffect,useState  } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import Paragraphs from '../../components/Paragraphs';
import { useSelector } from 'react-redux';
import {paragraphs} from '../../selectors';
import Pagination from '@material-ui/lab/Pagination';

import _ from 'lodash';
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export const CustomizedInputBase =()=>{
const classes = useStyles();
const dataPharagraph=useSelector(paragraphs);
console.log(dataPharagraph);
const [searchTerm,setSerchTerm]=useState("");
const [searchResults,setSearchResults]=useState([]);
const handleChange=event=>{
  setSearchResults(event.target.value);
}
const [initialCount, setInitialCount] = useState(0)
const paragraphsPerPage = 2;
const setPaginationCount = (e, value) => setInitialCount(value-1)
const paginationArr=_.chunk(dataPharagraph, paragraphsPerPage)[initialCount] || []
useEffect(() =>{
  const results = searchTerm && paginationArr.filter(post =>
post.title.includes(searchTerm) &&
post.content.includes(searchTerm) 
    );
    setSerchTerm(results)
},[paginationArr, searchTerm]);
  return (
    <>
     <form className={classes.root} noValidate autoComplete="off">
      <Input plasholder="Searsh" inputProps={{ 'aria-label': 'description' }}    value={searchTerm} onChange={handleChange} />
     
    </form>
    <div>
     {searchResults && (paginationArr.map((item,index) => {
         return <Paragraphs key={item+index}{...item} />;
        }))}
        </div>
        <Pagination count={Math.ceil(dataPharagraph.length/paragraphsPerPage)} color={"primary"} onChange={setPaginationCount} />

        </>
  );
        }   