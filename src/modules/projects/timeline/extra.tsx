import {
	Book,
	BookOpenText,
	Code,
	Component,
	FileText,
	GraduationCapIcon,
	Lectern,
	Link2,
	NotebookText,
	Podcast,
	Presentation,
	Rss,
	SquareArrowOutUpRight,
	Trophy,
} from 'lucide-react';
import { cn } from '@/lib/utils';

export const Collection = ({ children, label }: { label: string } & React.PropsWithChildren) => {
	return (
		<div className={cn('text-xs mb-3', label !== 'Links' && 'hidden md:block')}>
			<b>{label}</b>
			<div className="mt-1 space-y-1">{children}</div>
		</div>
	);
};

type ItemType =
	| 'Book'
	| 'Book Chapter'
	| 'Thesis'
	| 'Journal Article'
	| 'Proceedings'
	| 'Conference Panel'
	| 'Conference Paper'
	| 'Exhibition'
	| 'Award'
	| 'Guest Speaker'
	| 'Blog Post'
	| 'Code'
	| 'Link';

export const Item = ({
	children,
	url,
	type,
	pending = false,
}: { url?: string; type?: ItemType; pending?: boolean } & React.PropsWithChildren) => {
	const isExternalLink = url?.startsWith('http');
	return (
		<div className={cn('text-xs', pending && 'text-muted-foreground')}>
			{type === 'Book' && <Book className="inline-block mr-1 h-3 w-3 align-middle mb-0.25" />}
			{type === 'Book Chapter' && <BookOpenText className="inline-block mr-1 h-3 w-3 align-middle mb-0.25" />}
			{type === 'Thesis' && <GraduationCapIcon className="inline-block mr-1 h-3 w-3 align-middle mb-0.25" />}
			{type === 'Journal Article' && <FileText className="inline-block mr-1 h-3 w-3 align-middle mb-0.25" />}
			{type === 'Proceedings' && <NotebookText className="inline-block mr-1 h-3 w-3 align-middle mb-0.25" />}
			{type === 'Conference Panel' && <Component className="inline-block mr-1 h-3 w-3 align-middle mb-0.25" />}
			{type === 'Conference Paper' && <Lectern className="inline-block mr-1 h-3 w-3 align-middle mb-0.75" />}
			{type === 'Exhibition' && <Presentation className="inline-block mr-1 h-3 w-3 align-middle mb-0.25" />}
			{type === 'Award' && <Trophy className="inline-block mr-1 h-3 w-3 align-middle mb-0.5" />}
			{type === 'Guest Speaker' && <Podcast className="inline-block mr-1 h-3 w-3 align-middle mb-0.5" />}
			{type === 'Blog Post' && <Rss className="inline-block mr-1 h-3 w-3 align-middle" />}
			{type === 'Code' && <Code className="inline-block mr-1 h-3 w-3 align-middle mb-0.25" />}
			{type === 'Link' && <Link2 className="inline-block mr-1 h-3 w-3 align-middle mb-0.25" />}
			{url ? (
				<a
					className="hover:underline"
					href={url}
					rel={isExternalLink ? 'noopener noreferrer' : ''}
					target={isExternalLink ? '_blank' : '_self'}
				>
					{children}
					{isExternalLink && <SquareArrowOutUpRight className="inline size-3 mx-1 mb-0.25" />}
				</a>
			) : (
				<span>{children}</span>
			)}
		</div>
	);
};
