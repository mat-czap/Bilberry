import React from "react";
import { Formik, Form, Field } from "formik";
import { Button, LinearProgress } from "@material-ui/core";
import { TextField, fieldToTextField } from "formik-material-ui";
import { makeStyles, withStyles } from "@material-ui/core/styles";

import { connect } from "react-redux";
import { addNote } from "../actions";

import axios from "axios";

const useStyles = makeStyles({
	btn: {
		margin: 20,
	},
});

const InputForm = ({ addNote }) => {
	const StyledField = withStyles({
		root: {
			width: "50%",
			margin: "0 20px",
		},
	})(Field);
	const classes = useStyles();

	return (
		<Formik
			initialValues={{
				name: "",
				language: "",
				description: "",
				initRelease: "",
			}}
			//   validate={values => {
			//     const errors = {};
			//     if (!values.email) {
			//       errors.email = 'Required';
			//     } else if (
			//       !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
			//     ) {
			//       errors.email = 'Invalid email address';
			//     }
			//     return errors;
			//   }}
			onSubmit={(values, { setSubmitting }) => {
				setTimeout(() => {
					setSubmitting(false);
					axios
						.post("http://localhost:5000/v1/api/notes", { ...values })
						.then(data => addNote(data.data.content))
						.catch(err => console.log(err.message));
					alert(JSON.stringify(values, null, 2));
				}, 500);
			}}
		>
			{({ submitForm, isSubmitting }) => (
				<Form style={{ width: "100%", justifyContent: "center" }}>
					<StyledField
						component={TextField}
						name="name"
						type="name"
						label="name"
					/>
					<br />
					<StyledField
						component={TextField}
						type="language"
						label="langauge"
						name="language"
					/>
					<br />
					<StyledField
						component={TextField}
						type="description"
						label="description"
						name="description"
					/>
					<br />
					<StyledField
						component={TextField}
						type="initRelease"
						label="initRelease"
						name="initRelease"
					/>
					{isSubmitting && <LinearProgress />}
					<br />
					<Button
						type="submit"
						className={classes.btn}
						variant="contained"
						color="primary"
						disabled={isSubmitting}
					>
						Submit
					</Button>
				</Form>
			)}
		</Formik>
	);
};

const mapDispatchToProps = dispatch => ({
	addNote: content => dispatch(addNote(content)),
});

export default connect(null, mapDispatchToProps)(InputForm);
