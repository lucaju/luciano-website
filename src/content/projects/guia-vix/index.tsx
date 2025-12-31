import { Fragment } from 'react/jsx-runtime';
import { Lightbox } from '@/components/ui/lightbox';
import type { ProjectSchema } from '@/modules/projects/timeline';
import { Image } from '@/modules/projects/timeline/image';
import { Text } from '@/modules/projects/timeline/text';
import guiaVix1 from './app-icon.png';
import guiaVix4 from './screen-gastronomia.png';
import guiaVix3 from './screen-home.jpg';
import guiaVix2 from './screen-mapa.png';

const altText = 'Guia Vix - City Guide App';

export const guiaVix: ProjectSchema = {
	title: 'Guia Vix',
	place: 'Fluxo.art',
	date: { start: '2009-05-01', end: '2012-10-31' },
	tags: ['Mobile App', 'Design', 'Turism'],
	content: (
		<div className="space-y-1.5">
			<Text>
				In my last trip abroad I was amazed by how digital mobile city guide can be useful for exploring urban
				environments. At the same time, I realize that my own city does not have such piece of technology. So, I
				decided to create my first iPhone app as a city guide.
			</Text>
			<Lightbox
				images={[
					{ src: guiaVix1.src, alt: altText, title: altText },
					{ src: guiaVix2.src, alt: altText, title: altText },
					{ src: guiaVix3.src, alt: altText, title: altText },
					{ src: guiaVix4.src, alt: altText, title: altText },
				]}
			>
				{(onOpenLightbox) => (
					<Fragment>
						<Image
							alt={altText}
							className="h-32 lg:h-120 object-top cursor-pointer"
							height={guiaVix1.height}
							onClick={() => onOpenLightbox(0)}
							src={guiaVix1.src}
							title={altText}
							width={guiaVix1.width}
						/>
						<div className="grid gap-1 grid-cols-3">
							<Image
								alt={altText}
								className="h-32 lg:h-60 object-top cursor-pointer"
								height={guiaVix2.height}
								onClick={() => onOpenLightbox(1)}
								src={guiaVix2.src}
								title={altText}
								width={guiaVix2.width}
							/>
							<Image
								alt={altText}
								className="h-32 lg:h-60 object-top cursor-pointer"
								height={guiaVix3.height}
								onClick={() => onOpenLightbox(2)}
								src={guiaVix3.src}
								title={altText}
								width={guiaVix3.width}
							/>
							<Image
								alt={altText}
								className="h-32 lg:h-60 object-top cursor-pointer"
								height={guiaVix4.height}
								onClick={() => onOpenLightbox(3)}
								src={guiaVix4.src}
								title={altText}
								width={guiaVix4.width}
							/>
						</div>
					</Fragment>
				)}
			</Lightbox>

			<Text>
				Guia Vix is a Vitória’s (Brazil) city guide iPhone App. The idea was to bridge the gap between the old
				print version and the new tourist behaviour. The app has information about the city, types of
				transportation and a geolocation database of more than 200 venues (bars, restaurants, nightclubs) and
				point of interests (beaches, arts, museum). A detail page provides the main information for each venus,
				including phone numbers, full address, map location and web site url. The user can explorer the arounds
				using the feature “Nearby” that geo-locate the user and show the points of interest in 1 km distance.
			</Text>
			<Text>
				This project was built with the help of Samia Pedraça, Marina Machado, and Daigo Matsuoka. The app was
				available for one year as an experimental project. However, my choice to pursue a Master degree abroad
				made difficult to maintain a very locally-driven project up and running. We shut down the app at the end
				of 2012.
			</Text>
		</div>
	),
};
