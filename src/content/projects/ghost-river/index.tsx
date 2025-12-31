import { Lightbox } from '@/components/ui/lightbox';
import type { ProjectSchema } from '@/modules/projects/timeline';
import { Collection, Item } from '@/modules/projects/timeline/extra';
import { Image } from '@/modules/projects/timeline/image';
import { Text } from '@/modules/projects/timeline/text';
import ghost_river_image from './ghost-river.webp';

export const ghostRiver: ProjectSchema = {
	title: 'Ghost River',
	subTitle: 'Stories of a River and the Story of a Collector and the River it Swallowed',
	place: 'Concordia University',
	date: { start: '2019-07-01', end: '2020-01-31' },
	tags: ['Ethnography', 'Counter Mapping', 'GIS'],
	extra: [
		<Collection key="links" label="Links">
			<Item type="Link" url="https://www.ethnographylabconcordia.ca/projects/ghost-river">
				Project Homepage
			</Item>
		</Collection>,
		<Collection key="code" label="Code">
			<Item type="Code" url="https://github.com/lucaju/ghostriver">
				Ghost River
			</Item>
		</Collection>,
	],
	content: (
		<div className="space-y-1.5">
			<Lightbox images={[{ src: ghost_river_image.src, alt: 'Ghost River', title: 'Ghost River' }]}>
				{(onOpenLightbox) => (
					<Image
						alt="Ghost River"
						className="h-32 lg:h-120 object-top cursor-pointer"
						height={ghost_river_image.height}
						onClick={() => onOpenLightbox(1)}
						src={ghost_river_image.src}
						title="Ghost River"
						width={ghost_river_image.width}
					/>
				)}
			</Lightbox>
			<Text>
				This research project questions how discourses and practices of modernity and development have led to
				the physical transformations of the Saint-Pierre River, and how these relate to the different material
				practices, representations, and symbolic nature of the river.
			</Text>
			<Text>
				Using historical-geographical materialism methodologies, an ethnographic inquiry into human, non-human
				and infrastructure actors, and counter mapping we seek to develop a recursive (re)shaping of the water
				infrastructure that has absorbed and exhausted the Saint-Pierre River. Such methodologies allowed us to
				identify how infrastructure was used to colonize and lay claim to the area, as well as illustrate
				alternatives to the incremental destruction of sustaining habitats. Through the creation of a counter
				map and ethnography of the river and water infrastructure, we will contest the homogenization of the
				space as it represented in zoning regulations, land-use maps, and property regimes to offer new means of
				expressing hydro-social relationships in place.
			</Text>
		</div>
	),
};
