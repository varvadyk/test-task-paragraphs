// import React, { useState } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Typography from '@material-ui/core/Typography';
// import Pagination from '@material-ui/lab/Pagination';

// import { useSelector } from 'react-redux';
// import {paragraphs} from '../../selectors';
// import _ from 'lodash';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     '& > * + *': {
//       marginTop: theme.spacing(2),
//     },
//   },
// }));

// export const PaginationControlled=() =>{
//   const classes = useStyles();
//   const dataPharagraph=useSelector(paragraphs);
//   const [page, setPage] = React.useState(1);
//   const handleChange = (event, value) => {
//     setPage(value);
//   };
//   const [initialCount, setInitialCount] = useState(0)
//   const paragraphsPerPage = 3;
//   const setPaginationCount = (e) => setInitialCount(e.target.value)
//   const paginationArr=_.chunk(dataPharagraph, paragraphsPerPage)[initialCount] || [] // ==> [[1,2,3], [4,5,6], [7,8,9],[10]]

//   return (
//       <>
//     <div className={classes.root}>
   
//      <Pagination count={Math.ceil(dataPharagraph.length/paragraphsPerPage)} color={"primary"} onChange={setPaginationCount} />
//     </div>
//     </>
//   );
// }
