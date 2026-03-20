import { dateToISO } from '@/lib/date';
import { cn } from '@/lib/utils';

export const BentoGrid = ({ className, children }: { className?: string; children?: React.ReactNode }) => {
	return (
		<div className={cn('mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[22rem] md:grid-cols-3', className)}>
			{children}
		</div>
	);
};

export const BentoGridItem = ({
	children,
	className,
	title,
	publishedAt,
	id,
}: {
	className?: string;
	title?: string | React.ReactNode;
	publishedAt?: React.ReactNode;
	id: string;
} & React.HTMLAttributes<HTMLDivElement>) => {
	return (
		<a
			className={cn(
				'group/bento shadow-input row-span-1 flex flex-col justify-between space-y-1 rounded-xl border border-neutral-200 bg-white p-4 transition duration-200 hover:shadow-xl dark:border-white/10 dark:bg-neutral-950 dark:shadow-none hover:scale-105 hover:z-10',
				className,
			)}
			href={`/blog/${id}`}
			title={title}
		>
			{children}
			<div className="transition duration-200 group-hover/bento:translate-x-2">
				{publishedAt && (
					<time
						className="text-muted-foreground text-xs sm:text-sm font-light"
						dateTime={dateToISO(publishedAt.toString())}
					>
						{publishedAt}
					</time>
				)}
				<div className="mt-2 mb-2 font-sans font-bold text-neutral-600 dark:text-neutral-200">{title}</div>
			</div>
		</a>
	);
};
