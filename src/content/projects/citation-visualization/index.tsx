import { Lightbox } from '@/components/ui/lightbox';
import type { ProjectSchema } from '@/modules/projects/timeline';
import { Collection, Item } from '@/modules/projects/timeline/extra';
import { Image } from '@/modules/projects/timeline/image';
import { Text } from '@/modules/projects/timeline/text';
import image from './citation-visualization.png';

const imageAlt = 'Texts per Author by Type';

export const citationVisualization: ProjectSchema = {
	title: 'Citation Visualization',
	subTitle: 'Concordia Communication Studies Reading Collection',
	place: 'Concordia University',
	date: { start: '2016-04-01', end: '2016-05-30' },
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
						className="h-32 md:h-82 lg:h-120 object-top cursor-pointer"
						height={image.height}
						onClick={() => onOpenLightbox(1)}
						src={image.src}
						title={imageAlt}
						width={image.width}
					/>
				)}
			</Lightbox>
			<Text>
				Visualization of a collection of readings used in the undergraduate program between 2014 and 2016. The
				department is updating the undergraduate curriculum; understanding what the faculty is using for lectures is one
				of the guidelines for the future of this program at Concordia.
			</Text>
		</div>
	),
};
