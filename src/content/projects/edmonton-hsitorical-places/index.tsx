import { Lightbox } from '@/components/ui/lightbox';
import type { ProjectSchema } from '@/modules/projects/timeline';
import { Image } from '@/modules/projects/timeline/image';
import { Text } from '@/modules/projects/timeline/text';
import image from './mobile-app-mockup.png';

const imageAlt = 'Edmonton Historical Places';

export const edmontonHistoricalPlaces: ProjectSchema = {
	title: 'Edmonton Historical Places',
	place: 'University of Alberta',
	date: { start: '2012-01-01', end: '2012-04-30' },
	tags: ['Mobile App', 'Design', 'Historical Map'],
	content: (
		<div className="space-y-1.5">
			<Lightbox images={[{ src: image.src, alt: imageAlt, title: imageAlt }]}>
				{(onOpenLightbox) => (
					<Image
						alt={imageAlt}
						className="h-32 lg:h-170 object-top cursor-pointer"
						height={image.height}
						onClick={() => onOpenLightbox(0)}
						src={image.src}
						width={image.width}
						title={imageAlt}
					/>
				)}
			</Lightbox>
			<Text>
				A proposal for an iPhone app with the primary objective of exploring historical places and events in Edmonton.
				With this app, people can walk through the urban environment using old maps, discovering and learning the city’s
				history.
			</Text>
			<Text>
				The historical maps available in the user location will be overlaid on the current map. The points of interest
				will be shown on the screen based on the user-selected map, revealing the location's past. A slider control lets
				the users switch back to the present, giving them a grasp of what is nearby these days. By choosing a location,
				the app will show facts and pictures, where available. Using social networking, the user can see which of their
				friends visited that place in the past. The app also lets users share their location and historical information
				via Facebook and Twitter, comment, and take pictures using built-in tools. Discover the past to make a better
				future.
			</Text>
		</div>
	),
};
