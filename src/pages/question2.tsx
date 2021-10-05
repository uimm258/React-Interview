import { Button, Container, Grid, ListItemButton, ListItemText, Typography } from '@material-ui/core';
import React from 'react';
import Link from 'next/link';

const Converter = () => {
	const [id, setId] = React.useState("");
	const [name, setName] = React.useState("");
	const [newId, setNewId] = React.useState("1");
	
	React.useEffect(() => {
		fetch("http://localhost:3000/api")
		.then(res => res.json())
		.then(resData => {
			setId(resData[0].id);
			setName(resData[0].name)
		});
	},[]);

	const handleClick = (e:any) => {
		e.preventDefault();
		setNewId(name);
	}

	return(
		<>
			<h3>Before Click: {`{id: ${id}, name: ${name}}`}</h3>
			<p>Click the button to convert the value of</p>
			<Button onClick={handleClick} color="primary" variant="contained">Click</Button>
			<h3>After Click: id: {`{id: ${newId}}`}</h3>
		</>
	)
	
}

  


export default function Question2() {
	return <Container sx={ { pt: 2 } }>
		<Grid>
			<Link href='/question1' passHref>
				<ListItemButton component='a'>
					<ListItemText>Go to Question 1</ListItemText>
				</ListItemButton>
			</Link>
			<Link href='/question3' passHref>
				<ListItemButton component='a'>
					<ListItemText>Go to Question 3</ListItemText>
				</ListItemButton>
			</Link>
		</Grid>
		<Typography variant='h5'>Question 2</Typography>
		<Typography>
			Create an api function in NextJS that takes an object with this type { '{id: string, name: test}' }[]
			and converts it to { '{id: name}' }
		</Typography>
		<Typography>
			Perform error handling so that any object without that shape will throw an error.
		</Typography>
		<Typography>
			Call the function from a button press
		</Typography>
		<Typography>
			You can use any library for this
		</Typography>

		<Converter />

	</Container>;
}
