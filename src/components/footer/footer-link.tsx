import { SquareArrowOutUpRight } from 'lucide-react';

export const FooterLink = ({ label, url }: { label: string; url: string }) => {
	const isExternalLink = url.startsWith('http');
	return (
		<li className="list-none">
			<a
				className="text-sm py-1 text-muted-foreground flex items-center gap-1 hover:underline"
				href={url}
				rel={isExternalLink ? 'noopener noreferrer' : undefined}
				target={isExternalLink ? '_blank' : '_self'}
				title={label}
			>
				{label}
				{isExternalLink && <SquareArrowOutUpRight className="inline size-3 mx-1 mb-0.25" />}
			</a>
		</li>
	);
};
