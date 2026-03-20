import { Fragment } from 'react/jsx-runtime';
import { Lightbox } from '@/components/ui/lightbox';
import type { ProjectSchema } from '@/modules/projects/timeline';
import { Collection, Item } from '@/modules/projects/timeline/extra';
import { Image } from '@/modules/projects/timeline/image';
import { Text } from '@/modules/projects/timeline/text';
import image from './mobile-app.png';

const altText = 'Synesthetic Awareness';

export const synestheticAwareness: ProjectSchema = {
	title: '$ynesthetic @wareness',
	subTitle: 'Perceiving Air Quality Through Visual and Audio Inputs',
	place: 'Concordia University',
	date: { start: '2015-09-01', end: '2015-12-31' },
	tags: ['Internet of Things', 'Sonification', 'design', 'climate change'],
	extra: [
		<Collection key="blog" label="Blog Posts">
			<Item type="Blog Post" url="notes/synesthetic-awareness-perceiving-air-quality-through-visual-and-audio-inputs">
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
				This project proposes a synesthetic experiment in which data collected by the city will be translated into human
				sensory input. It uses a mobile application to retrieve air-quality data in Montreal and produce data-driven
				audio and visual feedback.
			</Text>
		</div>
	),
};
