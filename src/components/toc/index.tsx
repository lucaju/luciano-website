import { A, F, pipe } from '@mobily/ts-belt';
import type { MarkdownHeading } from 'astro';
import { useMemo } from 'react';
import { useToc } from '@/hooks/use-toc';
import { Item } from './item';
import { Progress } from './progress';

interface NestedHeading extends MarkdownHeading {
	subheadings: Array<NestedHeading>;
}

interface TocProps {
	headings: Array<MarkdownHeading>;
}

const parentHeadings = new Map<number, MarkdownHeading & { subheadings: Array<MarkdownHeading> }>();

export function Toc(props: TocProps) {
	const inView = useToc(
		pipe(
			props.headings,
			A.map((h) => h.slug),
			F.toMutable,
		),
	);

	const headings = useMemo(() => {
		return pipe(
			props.headings,
			A.reduce([] as Array<NestedHeading>, (acc, h) => {
				const heading = { ...h, subheadings: [] };

				parentHeadings.set(heading.depth, heading);
				if (heading.depth === 2) {
					acc.push(heading);
				} else {
					parentHeadings.get(heading.depth - 1)?.subheadings.push(heading);
				}

				return acc;
			}),
		);
	}, [props.headings]);

	return (
		<aside className="max-sm:hidden pl-14 max-w-max">
			{headings.length > 0 && (
				<div className="sticky top-20 right-0">
					<h3 className="text-lg font-semibold pb-4">On this page</h3>

					<nav className="relative overflow-y-hidden">
						<ul className="list-outside text-left border-l-2">
							{headings.map((heading) => (
								<Item key={heading.slug} heading={heading} inView={inView} />
							))}
						</ul>

						<Progress inView={inView} />
					</nav>
				</div>
			)}
		</aside>
	);
}
