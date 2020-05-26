import React, { useEffect,useState  } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paragraphs from '../Paragraphs';
import { useSelector } from 'react-redux';
import {paragraphs} from '../../selectors';
import Pagination from '@material-ui/lab/Pagination';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';

import _ from 'lodash';


const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
 
}));

export const CustomizedInputBase =()=>{
  
const classes = useStyles();
const dataPharagraph=useSelector(paragraphs);

const [result, setResult] = useState([]);
const [searchTerm,setSerchTerm]=useState("");

    const handleChange=event=>{
      setSerchTerm(event.target.value);
    }

const [initialCount, setInitialCount] = useState(0)
const paragraphsPerPage = 5;
const setPaginationCount = (e, value) => {
  setInitialCount(value-1)
}
    useEffect(()=>{
      const paginationArr=_.chunk(dataPharagraph, paragraphsPerPage)[initialCount] || [] 
      setResult(paginationArr);
},[initialCount])

const paginationArr=_.chunk(dataPharagraph, paragraphsPerPage)[initialCount] || []
    useEffect(() =>{
      const results = searchTerm && paginationArr.filter(post =>
        post.title.includes(searchTerm) ||
        post.content.includes(searchTerm) 
      
      )||paginationArr
        setResult(results)
    },[searchTerm]);
   
  return (
    <>
     <Paper component="form" className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder="Search...."
        inputProps={{ 'aria-label': 'description' }} 
        value={searchTerm}
        onChange={handleChange}
      />
        <SearchIcon />
      </Paper>
    {
       result.map((item, index) => {
            return (
            <>
              < Paragraphs
                title={item.title} content={item.content}  
                more_sv={item.more_sv}  more_ears={item.more_ears} more_spoke={item.more_spoke} more_dz={item.more_dz} more_bz={item.more_bz} 
                more_dr={item.more_dr} more_sp={item.more_sp} more_kb={item.more_kb} more_ms={item.more_ms} more_cc={item.more_cc}
                 key={item+index}/>
                </>
            )
          })
          }
      
  
   <Pagination count={Math.ceil(dataPharagraph.length/paragraphsPerPage)} onChange={setPaginationCount} />

         </>
   );
}
 