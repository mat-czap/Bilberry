import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "./ButtonDelete";



import { connect } from "react-redux";
import {removeNote, fetchNotes} from '../actions'


const useStyles = makeStyles({
	table: {
		minWidth: 300,
	},
});

const NotesTable = ({ data, removeNote, fetchNotes }) => {
  const classes = useStyles();
  
  const [notes, setNotes] = useState([])

  useEffect(() => {
	fetchNotes()
  },[]);

  useEffect(() => {
    setNotes(data)
  },[data]);

	return (
		<TableContainer component={Paper}>
			<Table className={classes.table} aria-label="simple table">
				<TableHead>
					<TableRow>
						{/* <TableCell>Id</TableCell> */}
						<TableCell align="center">Name</TableCell>
						<TableCell align="center">Language&nbsp;</TableCell>
						<TableCell align="center">Description&nbsp;</TableCell>
						<TableCell align="center">InitRelease&nbsp;</TableCell>
						<TableCell align="center">Option&nbsp;</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{notes.map(el => (
						<TableRow key={el.id}>
							{/* <TableCell component="th" scope="row"> {el.id} </TableCell> */}
							<TableCell align="center">{el.name}</TableCell>
							<TableCell align="center">{el.language}</TableCell>
							<TableCell align="center">{el.description}</TableCell>
							<TableCell align="center">{el.initRelease}</TableCell>
							<TableCell align="center">
                <div key={el.id} onClick={()=>removeNote(el.id)}><Button/></div>
              </TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

NotesTable.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string,PropTypes.number]),
      name:PropTypes.string.isRequired,
      language:PropTypes.string.isRequired,
      description:PropTypes.string.isRequired,
      initRelease:PropTypes.oneOfType([PropTypes.string,PropTypes.number])
    })
  ),
  removeNote: PropTypes.func.isRequired,
  fetchNotes: PropTypes.func.isRequired		
}

NotesTable.defaultProps = {
  data:[]
}

const mapStateToProps = ({ data }) => ({ data });

const mapDispatchToProps = dispatch => ({
  removeNote:(id) => dispatch(removeNote(id)),
  fetchNotes: () => dispatch(fetchNotes())
})

export default connect(mapStateToProps,mapDispatchToProps)(NotesTable);
