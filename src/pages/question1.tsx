import { Container, Divider, List, ListItem, ListItemButton, ListItemText, Typography, Grid } from '@material-ui/core';
import React from 'react';
import Link from 'next/link';
import { useFormik } from 'formik';
import * as Yup from "yup";
import TextField from '@material-ui/core/TextField';
import Switch from '@material-ui/core/Switch';
import Button from '@material-ui/core/Button';

const validationSchema = Yup.object({
    name: Yup.string()
        .required("Required")
        .matches(/^[a-z ,.'-]+$/i, "Must be only strings"),
    month: Yup.string()
        .required()
        .test(
            'is valid month?',
            'Enter a valid month',
            (value:any) => value <= 12 && value >= 1
        ),
    date: Yup.string()
        .required()
        .test(
            'is valid date?',
            'Enter a valid date',
            (value:any) => value <= 31 && value >= 1
        ),
    year: Yup.string()
        .required()
        .matches(/^[0-9]+$/, "Must be only digits")
        .min(4, 'Enter a valid year')
        .max(4, 'Enter a valid year'),
    age: Yup.string()
        .required()
        .matches(/^[0-9]+$/, "Must be only digits")
        .min(1, 'Enter a valid age')
        .max(70, 'Enter a valid age'),
});

const BuildForm = () => {
	const [isSubmit, setIsSubmit] = React.useState(false)

    const formik = useFormik({
        initialValues: { name: "", month: "", date: "", year: "", switch: false, age: "" },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
			setIsSubmit(true)
        },
    });
    return (
        <form onSubmit={formik.handleSubmit} style={{border:"2px solid white", textAlign:"center"}}>
            <h3> The Form </h3>
            <TextField
                id="name"
                label="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                margin="normal"
            />
            {formik.errors.name && formik.touched.name && (
                <div style={{ color:"red" }}>Invalid Name</div>
            )}

            <div>
                <TextField
                    id="month"
                    label="month"
                    value={formik.values.month}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.month && Boolean(formik.errors.month)}
                    margin="normal"
                />
                {formik.errors.month && formik.touched.month && (
                    <div style={{ color:"red" }}>Invalid Month</div>
                )}
                <TextField
                    id="date"
                    label="date"
                    value={formik.values.date}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.date && Boolean(formik.errors.date)}
                    margin="normal"
                />
                {formik.errors.date && formik.touched.date && (
                    <div style={{ color:"red" }}>Invalid Date</div>
                )}
                <TextField
                    id="year"
                    label="year"
                    value={formik.values.year}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.year && Boolean(formik.errors.year)}
                    margin="normal"
                />
                {formik.errors.year && formik.touched.year && (
                    <div style={{ color:"red" }}>Invalid Year</div>
                )}
            </div>
            <br />
            <Switch
                id="switch"
                checked={formik.values.switch}
                onChange={formik.handleChange}
                value="Switch"  
            />
            <div>
                <TextField
                    id="age"
                    label="age"
                    value={formik.values.age}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.age && Boolean(formik.errors.age)}
                    margin="normal"
                />
                {formik.errors.age && formik.touched.age && (
                    <div style={{ color:"red" }}>Invalid Age</div>
                )}
            </div>

            <br />
            <div>
				<Button type="submit" disabled={isSubmit} variant="outlined" >
                	Submit
        		</Button>
            </div>
            <br />
        </form>
    )
};

export default function Question1() {
	return <Container sx={ { pt: 2 } }>
		<Grid>
			<Link href='/' passHref>
				<ListItemButton component='a'>
					<ListItemText>Back to Home</ListItemText>
				</ListItemButton>
			</Link>
			<Link href='/question2' passHref>
				<ListItemButton component='a'>
					<ListItemText>Go to Question 2</ListItemText>
				</ListItemButton>
			</Link>
		</Grid>

		<Typography variant='h5'>Question 1</Typography>
		<Typography>Design a form with Formik and Material UI</Typography>
		<Typography>Contains the following items: </Typography>
		<List>
			<ListItem>
				<ListItemText>Name</ListItemText>
			</ListItem>
			<Divider />
			<ListItem>
				<ListItemText>Date (datetime)</ListItemText>
			</ListItem>
			<Divider />
			<ListItem>
				<ListItemText>Active (boolean switch)</ListItemText>
			</ListItem>
			<Divider />
			<ListItem>
				<ListItemText>Age (select from 1 to 70)</ListItemText>
			</ListItem>
		</List>

		<BuildForm />
	</Container>;
}
