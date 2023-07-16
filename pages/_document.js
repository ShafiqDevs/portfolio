import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html>
			<Head>
				<link
					rel='preconnect'
					href='https://fonts.googleapis.com'
				/>
				<link
					rel='preconnect'
					href='https://fonts.gstatic.com'
					crossOrigin='true'
				/>
				<meta
					property='og:title'
					content="Shafiq Belaroussi's Public projects"
				/>
				<meta
					property='og:description'
					content="Some of my public projects that I've worked on during my free time."
				/>
				<meta
					property='og:url'
					content='https://www.shafiqbelaroussi.co.uk/'
				/>
				<meta
					property='og:image'
					content='https://media.discordapp.net/attachments/1006937813712904202/1130254505028632617/roundeD.jpg'
				/>
				<link
					href='https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap'
					rel='stylesheet'
				/>
				<link
					rel='icon'
					href='/icon.png'></link>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
