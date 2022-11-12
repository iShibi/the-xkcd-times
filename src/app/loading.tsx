export default function Loading() {
	return (
		<div className='grid grid-cols-1 justify-items-center gap-y-2 pb-10 font-serif'>
			<p className='flex w-full flex-row justify-center gap-x-2 border-x-0 border-y-2 border-gray-600 py-1'>Loading</p>
			<p className='mt-4 text-2xl font-bold underline'>Loading</p>
			{/* <Image src={img} alt={alt} width={400} height={400} placeholder='empty' /> */}
			<p className='mt-4 max-w-sm text-justify text-lg'>Loading</p>
		</div>
	);
}
