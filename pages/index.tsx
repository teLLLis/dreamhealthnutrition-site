import Head from 'next/head';
import Nav from '../components/Nav';

export default function Home() {
	return (
		<>
			<Head>
				<title>Dream Health & Nutrition</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Nav />
			<h1>I am the home page!</h1>
		</>
	);
}
