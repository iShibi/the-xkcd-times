import ComicPanel from '../ComicPanel';

interface ArchivedIssueProps {
	params?: {
		issue?: string;
	};
}

export default function ArchivedIssue({ params }: ArchivedIssueProps) {
	return (
		<>
			<main className='min-h-screen'>{params?.issue ? <ComicPanel issue={parseInt(params.issue)} /> : <></>}</main>
		</>
	);
}
