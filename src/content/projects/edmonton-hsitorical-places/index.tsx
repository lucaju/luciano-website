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
				A proposal of an iPhone app with the main object to explore historical places and events in Edmonton.
				With this app people can walk in the urban environment using old maps, discovering and learning the
				history of the city.
			</Text>
			<Text>
				The historical maps available in the user location will be overlaid the current map. The point of
				interests will be shown on the screen based on the map chosen by the user, revealing the past of that
				location. A slider control lets the users switch back to the present, give them a grasp what is nearby
				in this days. By choosing a location, the app will show facts and pictures, where available. Using
				social networking, the user can see which of his friends visited that place in the past. The app also
				let users share their location and the historical information using Facebook and Twitter, make comments
				and take pictures using built-in tools. Discover the past to make a better future.
			</Text>
			<Text>
				Audience: Edmontonians and potential tourists. Content: Historical Maps and facts. Prototype Platform:
				Adobe Flash.
			</Text>
		</div>
	),
};
