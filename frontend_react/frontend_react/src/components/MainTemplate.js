import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { ReactComponent as Man } from '../assets/man.svg';
import Header from "./Header";
import Form from './Form'

const MainTemplate = ({ children }) => {
	return (
		<Grid container direction="column">
			<Grid item>
				<Header />
			</Grid>  
			<Grid style={{height:"100%"}} container alignItems="center" alignContent="center" justify="center">
				<Grid xs={12} sm={6} align="center" item><Form /></Grid >
				<Grid xs={12} sm={6} item><Man /></Grid>
			</Grid>
			<Grid item sm={12}>{children}</Grid>
		</Grid>
	);
};

export default MainTemplate;
