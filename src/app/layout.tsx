import Link from 'next/link';
import { type ReactNode } from 'react';
import { AiOutlineGithub, AiOutlineTwitter } from 'react-icons/ai';
import '../styles/global.css';

export interface RootLayoutProps {
	children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html lang='en' className='font-serif'>
			<head>
				<meta name='viewport' content='width=device-width' />
				<link rel='icon' href='/favicon.ico' />
				<link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
				<link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
				<link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
				<meta name='description' content="XKCD but it's a newspaper" />
				{/* Open Graph Meta Tags */}
				<meta property='og:title' content='The XKCD Times' />
				<meta property='og:description' content="XKCD but it's a newspaper" />
				<meta property='og:type' content='website' />
				<meta property='og:image' content='/logo.png' />
				{/* Theme Color Meta Tags */}
				<meta name='theme-color' content='white' />
				{/* Twitter Meta Tags  */}
				<meta name='twitter:title' content='The XKCD Times' />
				<meta name='twitter:description' content="XKCD but it's a newspaper" />
				<meta name='twitter:image' content='// TODO: https://root-domain-name/logo.png' />
				<meta name='twitter:card' content='summary' />
			</head>
			<body>
				<p className='py-4 text-center text-6xl font-bold'>
					<Link href='/'>The XKCD Times</Link>
				</p>
				{children}
				<footer className='mb-4 flex flex-col justify-center gap-y-2 text-center'>
					<div className='flex flex-row justify-center gap-x-2'>
						<a href='https://github.com/iShibi/the-xkcd-times' target='_blank' rel='noopener noreferrer'>
							<AiOutlineGithub className='h-10 w-10' />
						</a>
						<a href='https://twitter.com/iShiibi' target='_blank' rel='noopener noreferrer'>
							<AiOutlineTwitter className='h-10 w-10' />
						</a>
					</div>
					<div>
						Built using comics created by Randall Munroe. Visit{' '}
						<a href='https://xkcd.com/' className='text-blue-600 underline visited:text-purple-600 hover:text-blue-800'>
							xkcd.com
						</a>{' '}
						to view the official website.
					</div>
				</footer>
			</body>
		</html>
	);
}
