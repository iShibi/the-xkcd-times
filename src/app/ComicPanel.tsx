import Image from 'next/image';
import Link from 'next/link';
import { use } from 'react';

interface ComicData {
	month: string;
	num: number;
	link: string;
	year: string;
	news: string;
	safe_title: string;
	transcript: string;
	alt: string;
	img: string;
	title: string;
	day: string;
}

interface ComicPanelProps {
	issue?: number;
}

async function getComicData(issue?: number) {
	const url = typeof issue === 'undefined' ? 'https://xkcd.com/info.0.json' : `https://xkcd.com/${issue}/info.0.json`;
	const res = await fetch(url, { cache: 'no-store' });
	return res.json() as Promise<ComicData>;
}

export default function ComicPanel({ issue }: ComicPanelProps) {
	const { day, month, year, img, alt, title, num } = use(getComicData(issue));

	const date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day)).toLocaleDateString('en-us', {
		weekday: 'long',
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	});

	return (
		<div className='grid grid-cols-1 justify-items-center gap-y-2 pb-10'>
			<p className='flex w-full flex-row justify-center gap-x-2 border-x-0 border-y-2 border-gray-600 py-1'>
				<span>#{num}</span>
				<span>{'|'}</span>
				<span>{date}</span>
			</p>
			<p className='mt-4 text-2xl font-bold'>{title}</p>
			<Image src={img} alt={alt} width={400} height={400} placeholder='empty' />
			<p className='mt-4 max-w-sm text-justify text-lg'>{alt}</p>
			<div className='mt-4 flex flex-row gap-x-4'>
				<Link href={`${num - 1}`} className='flex flex-row'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth={1.5}
						stroke='currentColor'
						className='h-6 w-6'
					>
						<path strokeLinecap='round' strokeLinejoin='round' d='M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18' />
					</svg>
					<span>Prev</span>
				</Link>
				<Link href='/'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth={1.5}
						stroke='currentColor'
						className='h-6 w-6'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25'
						/>
					</svg>
				</Link>
				<Link href={`${num + 1}`} className='flex flex-row'>
					<span>Next</span>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth={1.5}
						stroke='currentColor'
						className='h-6 w-6'
					>
						<path strokeLinecap='round' strokeLinejoin='round' d='M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3' />
					</svg>
				</Link>
			</div>
		</div>
	);
}
