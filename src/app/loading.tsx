export default function Loading() {
	return (
		<div className='grid grid-cols-1 justify-items-center gap-y-2 pb-10'>
			<p className='flex w-full flex-row justify-center gap-x-2 border-x-0 border-y-2 border-gray-600 py-1'>....</p>
			<p className='mt-4 text-2xl font-bold'>Loading</p>
			<p className='mt-4 max-w-sm text-justify text-lg'>
				A loading screen is a screen shown by a computer program, very often a video game, while the program is loading
				(moving program data from the disk to RAM) or initializing.
			</p>
		</div>
	);
}
