import Image from 'next/image';
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
	const res = await fetch(url);
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
		<div className='grid grid-cols-1 justify-items-center gap-y-2 pb-10 font-serif'>
			<p className='flex w-full flex-row justify-center gap-x-2 border-x-0 border-y-2 border-gray-600 py-1'>
				<span>#{num}</span>
				<span>{'|'}</span>
				<span>{date}</span>
			</p>
			<p className='mt-4 text-2xl font-bold underline'>{title}</p>
			<Image src={img} alt={alt} width={400} height={400} placeholder='empty' />
			<p className='mt-4 max-w-sm text-justify text-lg'>{alt}</p>
		</div>
	);
}
