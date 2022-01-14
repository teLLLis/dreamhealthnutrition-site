import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Nav = () => {
	return (
		<header className='flex items-center p-6 bg-red-300 relative top-0 justify-between shadow-md'>
			<h1 className='text-xl'>Dream Health & Nutrition</h1>
			<div className='flex items-center space-x-4'>
				<Link href='/'>
					<a className='nav-btn'>Home</a>
				</Link>
				<Link href='/about'>
					<a className='nav-btn'>About</a>
				</Link>
				<Link href='/philosophy'>
					<a className='nav-btn'>My Philosophy</a>
				</Link>
				<Link href='/Workouts'>
					<a className='nav-btn'>Workouts</a>
				</Link>
				<Link href='/recipes'>
					<a className='nav-btn'>Recipes</a>
				</Link>
				<a href='https://www.instagram.com/dreamhealthandnutrition/'>
					<FontAwesomeIcon className='h-6 w-6 nav-btn' icon={faInstagram} />
				</a>
				<FontAwesomeIcon className='h-10 w-10 md:hidden' icon={faBars} />
			</div>
		</header>
	);
};

export default Nav;
