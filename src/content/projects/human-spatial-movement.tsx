import image from '@/assets/images/projects/map-snapshot.png'
import { Lightbox } from '@/components/ui/lightbox'
import { Collection, Item } from '@/modules/projects/timeline/extra'
import type { TimelineEntry } from '@/modules/projects/timeline'
import { Image } from '@/modules/projects/timeline/image'
import { Text } from '@/modules/projects/timeline/text'
import { Fragment } from 'react/jsx-runtime'

const imageAlt = 'Human Spatial Movement'

export const humanSpatialMovement: TimelineEntry = {
	title: 'Human Spatial Movement',
	place: 'SFU',
	date: { start: 2012, end: 2015 },
	tags: ['Mobile Tracker', 'Surveillance', 'Map', 'Data Visualization'],
	extra: [
		<Collection label='Blog Posts'>
			<Item
				type='Blog Post'
				url='notes/visualizing-of-human-spatial-movements-from-a-personal-perspective'
			>
				Visualizing of Human Spatial Movements From a Personal Perspective
			</Item>
			<Item
				type='Blog Post'
				url='notes/effectiveness-and-efficiency-of-time-representation-of-human-spatial-movement-on-geographic-maps'
			>
				Effectiveness and Efficiency of Time Representation of Human Spatial Movement on Geographic
				Maps
			</Item>
			<Item
				type='Blog Post'
				url='notes/exploring-personal-spatial-mhuman-spatial-movementovement-visualizations'
			>
				Exploring Personal Spatial Movement Visualizations
			</Item>
		</Collection>,
		<Collection label='Code'>
			<Item type='Code' url='https://github.com/lucaju/human-spatial-movement'>
				Human Spatial Movement
			</Item>
		</Collection>,
	],
	content: (
		<div className='space-y-1.5'>
			<Lightbox images={[{ src: image.src, alt: imageAlt, title: imageAlt }]}>
				{(onOpenLightbox) => (
					<Fragment>
						<Image
							alt={imageAlt}
							className='h-32 lg:h-100 object-top cursor-pointer'
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
				As an inherent human condition, mobility brings together communicative, technological,
				geographical, economic, cultural, and social forces that transform the surrounding space. In
				fact, space only becomes social meaningful through human agency and activities, such as
				walking and the desire to move in one or another direction. As we walk, we always leave some
				sort of traces behind, which could be both immaterial, like nostalgia or desire, and
				concrete, such as built environment, and marks on the sand.
			</Text>
			<Text>
				All these moments and traces are transitory (space) and temporary (time), which makes
				difficult to understand and analyze their nature and rules. Yet, if we follow our trails we
				might be able to understand our interactions with the surrounding environment and with other
				people; we even might be able to grasp the patterns and rules that govern our movements.
			</Text>
			<Text>
				Human Spatial Movement is an interactive visualization that enables you to discover your
				mobility pattern through time and space. It shows all your Moves data into a map while you
				can filter by date and type of transportation, and encode information by type of
				transportation and duration. You can uncover your digital traces to learn about your
				mobility preferences in everyday life.
			</Text>
			<Text>
				This project was developed as a project for my course in Knowledge Visualization and
				Communication at the SIAT Ph.D. program.
			</Text>
		</div>
	),
}
