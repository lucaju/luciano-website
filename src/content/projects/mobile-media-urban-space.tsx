import image from '@/assets/images/projects/mobile_media_urban_space.png';
import { Lightbox } from '@/components/ui/lightbox';
import type { TimelineEntry } from '@/modules/projects/timeline';
import { Collection, Item } from '@/modules/projects/timeline/extra';
import { Image } from '@/modules/projects/timeline/image';
import { Text } from '@/modules/projects/timeline/text';

const imageAlt = 'Mobile Media: New Mediations in the Urban Space';

export const mobileMediaUrbanSpace: TimelineEntry = {
	title: 'Mobile Media: New Mediations in the Urban Space',
	place: 'University of Alberta',
	date: { start: 2012, end: 2014 },
	tags: ['Nobile Media', 'Place', 'Space', 'Mediation'],
	extra: [
		<Collection key="publications" label="Publications">
			<Item key="journal" type="Journal Article" url="https://doi.org/10.1179/0308018814Z.000000000103">
				Frizzera, L. (2015). <strong>Mobile Media as New Forms of Spatialization</strong>. Interdisciplinary Science
				Reviews, 40(1), 29–43.
			</Item>
			<Item key="thesis" type="Thesis" url="http://hdl.handle.net/10402/era.39842">
				Frizzera, L. (2014). <strong>Mobile Media: New Mediations in the Urban Space</strong> (MA Thesis). University of
				Alberta, Canada. Supervisor: Dr. Geofrrey Rockwell.
			</Item>
		</Collection>,
		<Collection key="conferences" label="Conferences">
			<Item key="conference1" type="Conference Paper">
				Frizzera, L. (2014). <strong>Decoding Location-Based Information: Mobile Media Approach</strong>. INKE:
				Experimental Interfaces for Reading 2.0. IIT. Chicago, USA.
			</Item>
			<Item key="conference2" type="Conference Paper">
				Frizzera, L., Rockwell, G., Ruecker, S., & INKE TEAM. (2013).{' '}
				<strong>Touching the Physical World Through Mobile Media</strong>. Presented in the panel “Touch-a touch-a
				touch-a touch me': Restoring materiality to the reader.” Canadian Society for Digital Humanities (CSDH) @
				Congress 2013. University of Victoria. Victoria, Canada.
			</Item>
		</Collection>,
		<Collection key="symposia" label="Symposia">
			<Item key="speaker" type="Guest Speaker">
				Frizzera, L. (2014). <strong>Mobile Media Spatialization</strong>. Hucon 2014. University of Alberta. Edmonton,
				Canada.
			</Item>
		</Collection>,
	],
	content: (
		<div className="space-y-1.5">
			<Lightbox images={[{ src: image.src, alt: imageAlt, title: imageAlt }]}>
				{(onOpenLightbox) => (
					<Image
						alt={imageAlt}
						className="h-32 lg:h-60 object-top cursor-pointer"
						height={image.height}
						onClick={() => onOpenLightbox(1)}
						src={image.src}
						title={imageAlt}
						width={image.width}
					/>
				)}
			</Lightbox>
			<Text>
				Digital media has become the central nervous system of contemporary society, and the recent popularization of
				mobile media has intensified the dynamic process of mediation and communication in post-modern society to the
				point of a paradigm change: from the monopoly of mass media culture to decentralized transmissions in a
				post-mass media era. These technologies shift the place of mediation, affecting how society explores, perceives,
				and interacts with physical space. As a result, mobile media become an important interface in the production of
				social space: a new type of hybrid space, composed of digital layers that overlap the physical environment, is
				produced.
			</Text>
			<Text>
				Drawing on sociological approaches and media studies theories, this research aimed to understand how mobile
				technology, its social relations, and the relationship with the material and symbolic world in contemporary
				society, is reforming mass media and redefining our perception and experience in everyday urban life, and
				reinforcing the importance of space and place in the development of sociability and the construction of people’s
				identity.
			</Text>
			<Text>
				Thesis submitted in partial fulfillment of the requirements for the degree of Master of Arts in Humanities
				Computing.
			</Text>
		</div>
	),
};
