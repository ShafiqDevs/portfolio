import Head from 'next/head';
import Image from 'next/image';
import Buttoonn from '../components/Buttoonn';
import Item from '../components/Item';
import ItemViewer from '../components/ItemViewer';
import NavBar from '../components/NavBar';
import styles from '../styles/Home.module.css';
import { useState } from 'react';
import { data } from 'autoprefixer';
import Typewriter from 'typewriter-effect';

export default function Home() {
	const [itemViewerOn, setItemViewerOn] = useState();
	const [itemViewerData, setItemViewerData] = useState({
		logo: '',
		projectTitle: '',
		projectDescription: '',
		KeyWords: [],
		imgUrl: '',
		roles: '',
		Deliverables: [],
		images: [],
		projectOverview: '',
		projectLink: '',
		story: '',
	});

	function toggleItemViewer(
		show,
		logo,
		projectTitle,
		projectDescription,
		KeyWords,
		imgUrl,
		roles,
		Deliverables,
		images,
		projectOverview,
		projectLink,
		story
	) {
		setItemViewerData({
			logo,
			projectTitle,
			projectDescription,
			KeyWords,
			imgUrl,
			roles,
			Deliverables,
			images,
			projectOverview,
			projectLink,
			story,
		});
		setItemViewerOn(show);
	}

	const TypewriterOptions = {
		strings: [`NTU`, `NIIC`, `ShafDevs`, `Transcript Sensei`],
		autoStart: true,
		loop: true,
	};

	return (
		<>
			<Head>
				<title>{`Portfolio`}</title>
			</Head>
			<div className={`w-full h-fit pl-4 pr-4 md:pl-20 md:pr-20 bg-black/80`}>
				<div>
					<NavBar />
				</div>

				<div className='w-full h-fit mt-40 flex flex-col items-center text-start lg:items-start gap-14 text-white'>
					<h1 className='text-2xl lg:text-5xl lg:w-1/2 '>
						Developing Websites / Web Apps for companies and organizations like{' '}
						<span>
							<Typewriter options={TypewriterOptions} />
						</span>{' '}
					</h1>
					<h1 className='md:w-1/3  md:text-xl'>
						{`if you're looking for a freelance developer to help bring an idea to life — let's jam`}
					</h1>

					<Buttoonn
						text={'shafiq.belaroussi@outlook.com'}
						link={'mailto:shafiq.belaroussi@outlook.com'}
					/>
				</div>

				<div className='w-full h-fit mt-40  text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row gap-5'>
					<div className='flex flex-col gap-4'>
						<Item
							toggleItemViewer={toggleItemViewer}
							logo={`/wizardtools/wizard logo.webp`}
							projectTitle={'Wizard Tools'}
							projectDescription={
								'Wizard Tools is a platform and a community where RuneScape gamers have access to a tool that helps them automate their game progress without having to be active on their computer. gamers can have full access to this tool and the discord community for a small monthyly fee'
							}
							projectOverview={`This project was requested by the founder of Wizard Tools. they needed an online platform that can manage user accounts data, payment transactions and file hosting.
							Wizard Tools platform now allows users to sign up using their Discord ID and purchase a subscription of their choice. Once the subscription has been activated, the user will have an upgraded Discord role which grants them access to exclusing channels on the Discord community and then have their roles downgraded back down once the subscription is expired.
							As per the requirements of the client, all subscriptions are to be set to renew manually to avoid issues with their customers.`}
							imgUrl={`/wizardtools/homepage.png`}
							roles={[`Developer`]}
							Deliverables={[
								`Web app Design`,
								`Web app development`,
								`Backend development`,
								`Payment processing`,
								`Discord Bot development`,
							]}
							images={[
								`/wizardtools/homepage.png`,
								`/wizardtools/paymentoptions.png`,
								`/wizardtools/userdashboard.png`,
								`/wizardtools/discordcommunity.png`,
							]}
							projectLink={`https://wizard-tools.com/`}
							KeyWords={[
								`API`,
								`React`,
								`Backend`,
								`Discord Bot`,
								`Stripe`,
								`NextJS`,
							]}
							story={`The client on this project reached out to me through a friend of mine given my background in software development and my knowledge in customer service and gaming. The client wanted a very specific looking website that suited the style of the game and other competitors in the market which is why they provided a complete design plan for me to implement.
							
							I now charge a percentage fee for every subscription purchased through this platform which gives me a passive income. I consider this project one of my best projects so far as a developer`}
						/>
					</div>
					<div className='flex flex-col gap-4 '>
						<Item
							toggleItemViewer={toggleItemViewer}
							logo={`/transcriptsensei/logo.png`}
							projectTitle={'Transcript Sensei'}
							projectDescription={
								'Generate transcripts from audio and video files and export them as srt files that can be used for creating subtitles for your podcasts, interviews and even youtube videos'
							}
							projectOverview={`This web app is designed to be used as transcript generator tool.`}
							imgUrl={`/transcriptsensei/transcriptsensei.png`}
							roles={[`Designer`, `Developer`]}
							Deliverables={[
								`Web app Design`,
								`Web app development`,
								`Backend development`,
								`API`,
								`Database`,
							]}
							images={[
								`/transcriptsensei/transcriptsensei.png`,
								`/transcriptsensei/transcriptsensei2.png`,
								`/transcriptsensei/transcriptsensei3.png`,
							]}
							projectLink={`https://transcriptsensei.co.uk/`}
							KeyWords={[`AI technology`, `React`, `Backend`]}
							story={`transcriptsensei is a project I worked on to help content creators, journalists and digital marketers create transcripts and subtitles for their podcasts, interviews and digital advertisment very quickly using AI technology`}
						/>
					</div>
					<div className='flex flex-col gap-4 '>
						<Item
							toggleItemViewer={toggleItemViewer}
							logo={`/niic/niic.png`}
							projectTitle={'NIIC Online Shop'}
							projectDescription={
								'NIIC Online Shop – Helping automating the written material orders'
							}
							projectOverview={`This Web App is designed to be used as an automated order processing system for a local charity in Nottingham, UK`}
							imgUrl={`/niic/niic-home.png`}
							roles={[`Designer`, `Developer`]}
							Deliverables={[
								`Web app Design`,
								`Web app development`,
								`Backend development`,
							]}
							images={[
								`/niic/niic-basket.png`,
								`/niic/niic-body.png`,
								`/niic/niic-stripe.png`,
								`/niic/niic-payment-ok.png`,
							]}
							projectLink={`https://notttingham-islam-online-shop.vercel.app/`}
							KeyWords={[`eCommerce`, `React`, `Backend`]}
							story={`NIIC, which also stands for Nottingham Islam Information Centre. I had spent some time with some of the trustees there and realised that they process their orders manually from calculating the weight of the boxes, measuring the box size and processing customer information one by one. So I volunteered to create this website to automate everything using a database and an online paypment processing API.`}
						/>
					</div>
					<div className='flex flex-col gap-4'>
						<Item
							toggleItemViewer={toggleItemViewer}
							logo={`/weather/edify.jpg`}
							projectTitle={'Weather Station API'}
							projectDescription={
								'Weather Station API – Collecting weather data from different cities to use in Virtual Reality Board in Edify '
							}
							projectOverview={`This is a special Web page designed specifically to use in a VR board. it broadcasts weathe data of a chosen city`}
							imgUrl={`/weather/weather-home.png`}
							roles={[`Designer`, `Developer`]}
							Deliverables={[
								`Web app Design`,
								`Web app development`,
								`Backend development`,
							]}
							images={[
								`/weather/weather-home.png`,
								`/weather/weather-london.png`,
								`/weather/weather-newyork.png`,
								`/weather/weather-nottingham.png`,
							]}
							projectLink={`https://weather-data-ten.vercel.app/`}
							KeyWords={[`API`, `React`, `Backend`, `VR Helper Apps`, `Edify`]}
							story={`I work as a Intern VR Developer at Nottingham Trent University. Our project aims to develop a VR environments for Construction Management students to conduct their experiments and simulations. We colaborated with an education VR Platform in the UK called Edify and in their platform I created this website to be used in the board inside the VR world to be used in one of our use cases.`}
						/>
					</div>
				</div>
			</div>
			{itemViewerOn && (
				<ItemViewer
					logo={itemViewerData.logo}
					projectTitle={itemViewerData.projectTitle}
					projectDescription={itemViewerData.projectDescription}
					KeyWords={itemViewerData.KeyWords}
					imgUrl={itemViewerData.imgUrl}
					roles={itemViewerData.roles}
					Deliverables={itemViewerData.Deliverables}
					images={itemViewerData.images}
					projectOverview={itemViewerData.projectOverview}
					projectLink={itemViewerData.projectLink}
					toggleItemViewer={toggleItemViewer}
					story={itemViewerData.story}
				/>
			)}
		</>
	);
}

export async function getStaticProps(context) {
	return {
		props: {}, // will be passed to the page component as props
	};
}
