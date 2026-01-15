import { Fragment } from 'react/jsx-runtime';
import { Lightbox } from '@/components/ui/lightbox';
import type { ProjectSchema } from '@/modules/projects/timeline';
import { Collection, Item } from '@/modules/projects/timeline/extra';
import { Image } from '@/modules/projects/timeline/image';
import { Text } from '@/modules/projects/timeline/text';
import image from './map-snapshot.png';

const imageAlt = 'Human Spatial Movement';

export const humanSpatialMovement: ProjectSchema = {
	title: 'Human Spatial Movement',
	place: 'SFU',
	date: { start: '2013-09-01', end: '2015-08-30' },
	tags: ['Mobile Tracker', 'Surveillance', 'Map', 'Data Visualization'],
	extra: [
		<Collection key="blog-posts" label="Blog Posts">
			<Item type="Blog Post" url="notes/visualizing-of-human-spatial-movements-from-a-personal-perspective">
				Visualizing Human Spatial Movements From a Personal Perspective
			</Item>
			<Item
				type="Blog Post"
				url="notes/effectiveness-and-efficiency-of-time-representation-of-human-spatial-movement-on-geographic-maps"
			>
				Effectiveness and Efficiency of Time Representation of Human Spatial Movement on Geographic Maps
			</Item>
			<Item type="Blog Post" url="notes/exploring-personal-spatial-mhuman-spatial-movementovement-visualizations">
				Exploring Personal Spatial Movement Visualizations
			</Item>
		</Collection>,
		<Collection key="code" label="Code">
			<Item type="Code" url="https://github.com/lucaju/human-spatial-movement">
				Human Spatial Movement
			</Item>
		</Collection>,
	],
	content: (
		<div className="space-y-1.5">
			<Lightbox images={[{ src: image.src, alt: imageAlt, title: imageAlt }]}>
				{(onOpenLightbox) => (
					<Fragment>
						<Image
							alt={imageAlt}
							className="h-32 lg:h-100 object-top cursor-pointer"
							height={image.height}
							onClick={() => onOpenLightbox(0)}
							src={image.src}
							title={imageAlt}
							width={image.width}
						/>
					</Fragment>
				)}
			</Lightbox>
			<Text>
				As an inherent human condition, mobility brings together communicative, technological, geographical,
				economic, cultural, and social forces that transform the surrounding space. In fact, space becomes
				socially meaningful only through human agency and activities, such as walking and the desire to move in
				one direction or another. As we walk, we always leave traces behind, which can be both immaterial, such
				as nostalgia or desire, and concrete, such as the built environment and marks on the sand.
			</Text>
			<Text>
				All these moments and traces are transitory (space) and temporary (time), which makes it difficult to
				understand and analyze their nature and rules. Yet, if we follow our trails, we can understand our
				interactions with the surrounding environment and with other people; we can even grasp the patterns and
				rules that govern our movements.
			</Text>
			<Text>
				Human Spatial Movement is an interactive visualization that enables you to discover your mobility
				pattern through time and space. It shows all your Moves data on a map, allowing you to filter by date
				and transportation type, and encode information by transportation type and duration. You can uncover
				your digital traces to learn about your mobility preferences in everyday life.
			</Text>
			<Text>
				This project was developed for my course in Knowledge Visualization and Communication in the SIAT Ph.D.
				program.
			</Text>
		</div>
	),
};
