import { Badge } from '@/components/ui/badge';
import { Highlighter } from '@/components/ui/highlighter';
import { dateToISO, formatDate } from '@/lib/date';
import { cn } from '@/lib/utils';

interface MetaProps extends React.HTMLAttributes<HTMLDivElement> {
	publishedAt: Date;
	keywords: string[];
}

export const Meta = ({ publishedAt, keywords, className }: MetaProps) => {
	return (
		<div
			className={cn(
				'flex flex-col gap-6 text-sm font-medium text-muted-foreground max-w-full md:max-w-64 mb-8',
				className,
			)}
		>
			<div className="flex flex-col items-start">
				<span className="uppercase">Published on</span>
				<Highlighter action="underline" color="#FF9800">
					<time dateTime={dateToISO(publishedAt)}>{formatDate(publishedAt)}</time>
				</Highlighter>
			</div>
			<div className="flex flex-col items-start gap-2">
				<span className="uppercase">Keywords</span>
				<div className="inline-flex flex-wrap items-start gap-1">
					{keywords.map((keyword) => (
						<Badge key={keyword} variant="secondary">
							{keyword}
						</Badge>
					))}
				</div>
			</div>
		</div>
	);
};
