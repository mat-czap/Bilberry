import React from "react";
import AppBar from "@material-ui/core/AppBar";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
	root: {
        flexGrow: 1,
        margin: "0 0 20px"
    },
}));

const Header = () => {
	const classes = useStyles();

	return (
		<AppBar position="static" className={classes.root}>
			<Toolbar>
				<Typography variant="h6"> Bilberry recruitment task </Typography>
			</Toolbar>
		</AppBar>
	);
};

export default Header;
