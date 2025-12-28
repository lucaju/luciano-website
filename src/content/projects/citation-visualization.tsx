import image from '@/assets/images/blog/citation_visualization.png';
import { Lightbox } from '@/components/ui/lightbox';
import type { TimelineEntry } from '@/modules/projects/timeline';
import { Collection, Item } from '@/modules/projects/timeline/extra';
import { Image } from '@/modules/projects/timeline/image';
import { Text } from '@/modules/projects/timeline/text';

const imageAlt = 'Texts per Author by Type';

export const citationVisualization: TimelineEntry = {
	title: 'Citation Visualization',
	subTitle: 'Concordia Communication Studies Reading Collection',
	place: 'Concordia University',
	date: { start: 2016, end: 2016 },
	tags: ['Visualization', 'Citation'],
	extra: [
		<Collection key="links" label="Links">
			<Item type="Link" url="https://netvis-citation-depcom-concordia.lucianofrizzera.com">
				Visualization
			</Item>
		</Collection>,
		<Collection key="blog-posts" label="Blog Posts">
			<Item type="Blog Post" url="notes/communication-studies-visualizing-reading-collection">
				Communication Studies: Visualizing Reading Collection
			</Item>
		</Collection>,
	],
	content: (
		<div className="space-y-1.5">
			<Lightbox images={[{ src: image.src, alt: imageAlt, title: imageAlt }]}>
				{(onOpenLightbox) => (
					<Image
						alt={imageAlt}
						className="h-32 lg:h-80 object-top cursor-pointer"
						height={image.height}
						onClick={() => onOpenLightbox(1)}
						src={image.src}
						title={imageAlt}
						width={image.width}
					/>
				)}
			</Lightbox>
			<Text>
				During the Summer I was hired by the Deparmetnof Communication studies at Concordia University to produce
				visualization on the collection of readings used in the undergraduate program between 2014-2016. The department
				is updating the undergraduate curriculum, thus understanding what the faculty is using for lectures is one of
				the guidelines for the future of this program at Concordia.
			</Text>
		</div>
	),
};
