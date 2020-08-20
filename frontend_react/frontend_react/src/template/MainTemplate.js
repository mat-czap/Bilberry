import React from "react";
import { Grid} from "@material-ui/core";
import { ReactComponent as Man } from '../assets/man.svg';
import Header from "../components/Header";
import Form from '../components/Form'

const MainTemplate = ({ children }) => {
	return (
		<Grid container direction="column">
			<Grid item>
				<Header />
			</Grid>  
			<Grid style={{height:"100%"}} container alignItems="center" alignContent="center" justify="center">
				<Grid xs={12} sm={6} align="center" item><Form /></Grid >
				<Grid xs={12} sm={6} item><Man width={"100%"}/></Grid>
			</Grid>
			<Grid item xs={12} sm={12}>{children}</Grid>
		</Grid>
	);
};

export default MainTemplate;
