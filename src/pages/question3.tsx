import { Container, Grid, ListItemButton, ListItemText, Typography } from '@material-ui/core';
import React from 'react';
import Link from 'next/link';
import screenshot from './q3.png';
import Image from 'next/image'

export default function Question3() {
	return <Container sx={ { pt: 2 } }>
		<Grid>
			<Link href='/question2' passHref>
				<ListItemButton component='a'>
					<ListItemText>Go to Question 2</ListItemText>
				</ListItemButton>
			</Link>
			<Link href='/question4' passHref>
				<ListItemButton component='a'>
					<ListItemText>Go to Question 4</ListItemText>
				</ListItemButton>
			</Link>
		</Grid>
		<Typography variant='h5'>Question 3</Typography>
		<Typography>Convert the providers in src/pages/_app.tsx to use the providerComposer provided in src/providerComposer.tsx</Typography>
		<br />
		<hr />
		<br />
		<Typography>Import the providerComposer component from the provideComposer file, and add it to the app.tsx.</Typography>
		<Image src={screenshot} alt="screenshot" />
	</Container>;
};
