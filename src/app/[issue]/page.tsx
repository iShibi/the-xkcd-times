import ComicPanel from '../ComicPanel';

interface ArchivedIssueProps {
	params: {
		issue: number;
	};
}

export default function ArchivedIssue({ params }: ArchivedIssueProps) {
	return (
		<>
			<main className='min-h-screen'>
				<ComicPanel issue={params.issue} />
			</main>
		</>
	);
}
