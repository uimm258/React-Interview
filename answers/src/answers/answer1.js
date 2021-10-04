import * as React from 'react';
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
            (value) => value <= 12 && value >= 1
        ),
    date: Yup.string()
        .required()
        .test(
            'is valid date?',
            'Enter a valid date',
            (value) => value <= 31 && value >= 1
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
    const formik = useFormik({
        initialValues: { name: "", month: "", date: "", year: "", isActive: false, age: "" },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <TextField
                id="name"
                label="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                error={formik.touched.name && Boolean(formik.errors.name)}
                placeholder="Please enter your name here"
                margin="normal"
            />

            <div>
                <TextField
                    id="month"
                    label="month"
                    value={formik.values.month}
                    onChange={formik.handleChange}
                    placeholder="Please enter the month here"
                    error={formik.touched.month && Boolean(formik.errors.month)}
                    margin="normal"
                />
                <TextField
                    id="date"
                    label="date"
                    value={formik.values.date}
                    onChange={formik.handleChange}
                    placeholder="Please enter the date here"
                    error={formik.touched.date && Boolean(formik.errors.date)}
                    margin="normal"
                />
                <TextField
                    id="year"
                    label="year"
                    value={formik.values.year}
                    onChange={formik.handleChange}
                    placeholder="Please enter the year here"
                    error={formik.touched.year && Boolean(formik.errors.year)}
                    margin="normal"
                />
            </div>

            <Switch
                checked={formik.values.isActive}
                onchange={formik.handleChange}
                value="Switch"
            />

            <TextField
                id="age"
                label="age"
                value={formik.values.age}
                onChange={formik.handleChange}
                placeholder="Please enter the your age here"
                error={formik.touched.age && Boolean(formik.errors.age)}
                margin="normal"
            />

            <Button color="primary" variant="contained" fullWidth type="submit">
                Submit
            </Button>
        </form>
    )
};

export default BuildForm;