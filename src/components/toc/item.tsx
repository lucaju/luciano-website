import type { MarkdownHeading } from 'astro';

interface NestedHeading extends MarkdownHeading {
	subheadings: Array<NestedHeading>;
}

interface Item {
	heading: NestedHeading;
	inView: string;
}

export function Item({ heading, inView }: Item) {
	return (
		<li key={heading.slug} className="pl-4">
			<a
				data-in-view={inView === heading.slug}
				className="inline-block text-sm text-muted-foreground data-[in-view=true]:text-orange-500"
				href={`#${heading.slug}`}
			>
				{heading.text}
			</a>
			{heading.subheadings.length > 0 && (
				<ul>
					{heading.subheadings.map((subheading) => (
						<Item key={subheading.slug} heading={subheading} inView={inView} />
					))}
				</ul>
			)}
		</li>
	);
}
