import Image from 'next/image';
import Nav from '../components/Nav';
import portraitPic from '../public/images/portrait.jpg';
import compPic from '../public/images/comp.jpg';
import regionalsPic from '../public/images/regionals.jpg';
import familyPic from '../public/images/family.jpg';

const About = () => {
	return (
		<>
			<Nav />
			<div className='p-3 text-5xl text-center my-16 font-serif'>
				<Image src={compPic} />
				<h1>A little about me and my journey...</h1>
			</div>

			<div className='px-7'>
				<hr className='border-black' />
			</div>

			<div className='flex flex-col md:flex-row bg-amber-400 my-16  p-2 items-center text-xl'>
				<div className='p-4 w-64 h-64 relative justify-center'>
					<Image src={portraitPic} layout='fill' className='rounded-xl' />
					{/* <div className='bg-red-400 w-52 h-52 '>Jordan's Picture</div> */}
				</div>
				<div className='bg-green-300 m-2 p-5 flex-1 max-w-full'>
					<p>
						I am a Wife, Mom, Coach, and Athlete. I’m from Arizona and I
						currently live in Salt Lake City, Utah. As a kid, I played sports
						and stayed pretty active. Throughout high school I adopted some
						negative eating habits and thought all I needed to do was workout
						more, play more sports, and eat less to achieve my goals. It wasn’t
						until I joined CrossFit in 2010 where I learned the importance of
						balanced nutrition habits and fueling my body adequately for
						activity. I’ve been on a journey of growth and knowledge in the
						health space not only for myself, but for others. I know the
						information and knowledge I have to offer can change someone's life
						for the better and that’s why I’ve chosen this career.
					</p>
				</div>
			</div>

			<div className='px-7'>
				<hr className='border-black' />
			</div>

			<div className='flex flex-wrap my-16'>
				<Image src={regionalsPic} />
				<Image src={familyPic} />
			</div>
		</>
	);
};

export default About;
