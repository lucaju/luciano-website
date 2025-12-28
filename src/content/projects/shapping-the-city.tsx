import shapingCity1 from '@/assets/images/projects/shaping1.png'
import shapingCity2 from '@/assets/images/projects/shaping2.png'
import shapingCity3 from '@/assets/images/projects/shaping3.png'
import { Lightbox } from '@/components/ui/lightbox'
import { Collection, Item } from '@/modules/projects/timeline/extra'
import type { TimelineEntry } from '@/modules/projects/timeline'
import { Image } from '@/modules/projects/timeline/image'
import { Text } from '@/modules/projects/timeline/text'
import { Fragment } from 'react/jsx-runtime'

const altText = 'Shaping the City'

export const shapingTheCity: TimelineEntry = {
	title: 'Shaping the City',
	place: 'Machine Agencies',
	date: { start: 2012, end: 2013 },
	tags: ['Map', 'Interactive'],
	extra: [
		<Collection label='Conferences'>
			<Item type='Exhibition'>
				Pedraça, S., & Frizzera, L. (2013). <strong>Edmonton’s Dynamic Shapes</strong>. Digital
				Poster HASTAC 2013. York University. York, Canada.
			</Item>
		</Collection>,
		<Collection label='Code'>
			<Item type='Code' url='https://github.com/lucaju/Shaping-the-City'>
				Shaping the City
			</Item>
		</Collection>,
	],
	content: (
		<div className='space-y-1.5'>
			<Text>
				We are looking for ways to visualize and interpret the shape of the city’s map in a
				different perspective. Shaping the City deconstruct the map of the city, detaching the
				blocks from their original geo-location and reorganize them according to whatever other
				information they carry on: size, community, period, population density, income, number of
				trees, venues, type of terrain, tweets and so on. It is a form of counter-mapping, in which
				other relevant data takes priority over geographical locations.
			</Text>
			<Lightbox
				images={[
					{ src: shapingCity2.src, alt: altText, title: altText },
					{ src: shapingCity1.src, alt: altText, title: altText },
					{ src: shapingCity3.src, alt: altText, title: altText },
				]}
			>
				{(onOpenLightbox) => (
					<Fragment>
						<Image
							alt='Shaping City'
							className='h-32 lg:h-66 object-top cursor-pointer'
							height={shapingCity2.height}
							onClick={() => onOpenLightbox(1)}
							src={shapingCity2.src}
							title='Shaping City'
							width={shapingCity2.width}
						/>
						<div className='grid gap-1 grid-cols-2'>
							<Image
								alt={altText}
								className='h-32 lg:h-60 object-top cursor-pointer'
								height={shapingCity1.height}
								onClick={() => onOpenLightbox(0)}
								src={shapingCity1.src}
								title={altText}
								width={shapingCity1.width}
							/>
							<Image
								alt={altText}
								className='h-32 lg:h-60 object-top cursor-pointer'
								height={shapingCity3.height}
								onClick={() => onOpenLightbox(2)}
								src={shapingCity3.src}
								title={altText}
								width={shapingCity3.width}
							/>
						</div>
					</Fragment>
				)}
			</Lightbox>
			<Text>
				Shaping the City is a prototype tool for researchers interested in history, geography and
				urban planning, which the goal is to enable comparison between different datasets using the
				shapes of the city as the main structure. It is also a playful curiosity-driven interactive
				visualization, in which the user is invited to explore, discover and learn more about how
				the city was planned and contrasting to how it has been evolving.
			</Text>
			<Text>
				In the current version, we have mapped the core area of Edmonton, which includes 114
				neighbourhoods and more than 4.000 shapes. The shapes are grouped by neighbourhoods and by
				the year when they were established. Although a small portion of them lack the period data,
				the overall experience is not affected. In the next phase, currently in progress, 95% of
				Edmonton area will be covered
			</Text>
		</div>
	),
}
