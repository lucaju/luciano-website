import { Fragment } from 'react/jsx-runtime';
import image from '@/assets/images/projects/Screen-Shot-2017-12-29-at-7.44.44-PM.png';
import { Lightbox } from '@/components/ui/lightbox';
import type { TimelineEntry } from '@/modules/projects/timeline';
import { Collection, Item } from '@/modules/projects/timeline/extra';
import { Image } from '@/modules/projects/timeline/image';
import { Text } from '@/modules/projects/timeline/text';

const altText = 'Synesthetic Awareness';

export const synestheticAwareness: TimelineEntry = {
	title: '$ynesthetic @wareness',
	subTitle: 'Perceiving Air Quality Through Visual and Audio Inputs',
	place: 'Concordia University',
	date: { start: 2015, end: 2015 },
	tags: ['Internet of Things', 'Sonification', 'design', 'climate change'],
	extra: [
		<Collection key="blog" label="Blog Posts">
			<Item
				type="Blog Post"
				url="notes/synesthetic-awareness-perceiving-air-quality-through-visual-and-audio-inputs"
			>
				Synesthetic Awareness
			</Item>
		</Collection>,
		<Collection key="code" label="Code">
			<Item type="Code" url="https://github.com/lucaju/Synesthetic-Awareness-Air-Quality-Montreal">
				Synesthetic Awareness - Air Quality Montreal
			</Item>
		</Collection>,
	],
	content: (
		<div className="space-y-1.5">
			<Lightbox images={[{ src: image.src, alt: altText, title: altText }]}>
				{(onOpenLightbox) => (
					<Fragment>
						<Image
							alt={altText}
							className="h-32 lg:h-56 object-top cursor-pointer"
							height={image.height}
							onClick={() => onOpenLightbox(0)}
							src={image.src}
							title={altText}
							width={image.width}
						/>
					</Fragment>
				)}
			</Lightbox>
			<Text>
				This project proposes a synesthetic experiment in which data collected by the city will be translated to
				a human sensorial input. It uses a mobile application to retrieve information about air quality in
				Montreal to produce data-driven audio and visual feedback.
			</Text>
		</div>
	),
};
