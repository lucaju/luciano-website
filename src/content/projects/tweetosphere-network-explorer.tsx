import image from '@/assets/images/projects/Vancouver_Transit_Debate.png';
import { Lightbox } from '@/components/ui/lightbox';
import type { TimelineEntry } from '@/modules/projects/timeline';
import { Collection, Item } from '@/modules/projects/timeline/extra';
import { Image } from '@/modules/projects/timeline/image';
import { Text } from '@/modules/projects/timeline/text';

const imageAlt = 'The Cartography of #TransitReferendum in Vancouver';

export const tweetosphereNetworkExplorer: TimelineEntry = {
	title: 'Tweetosphere Network Explorer',
	subTitle: 'The Cartography of #TransitReferendum in Vancouver',
	place: 'SFU',
	date: { start: 2014, end: 2015 },
	tags: ['Social Media', 'Data Visualization', 'Civic Engagement'],
	extra: [
		<Collection key="links" label="Links">
			<Item type="Link" url="https://vancouver-transit-referendum.lucianofrizzera.com">
				Tweetosphere Network Explorer
			</Item>
		</Collection>,
		<Collection key="conferences" label="Conferences">
			<Item type="Conference Paper">
				Frizzera, L., & Bartram, L. (2015).{' '}
				<strong>Interactive Social Media Cartography: #TransitReferendum in Vancouver</strong>. I-Society.
				London, UK.
			</Item>
		</Collection>,
		<Collection key="blog-posts" label="Blog Posts">
			<Item type="Blog Post" url="notes/the-cartography-of-transitreferendum-in-vancouver">
				The Cartography of #TransitReferendum in Vancouver
			</Item>
		</Collection>,
		<Collection key="code" label="Code">
			<Item type="Code" url="https://github.com/lucaju/transit-debate">
				Tweet Transit Debate
			</Item>
		</Collection>,
	],
	content: (
		<div className="space-y-1.5">
			<Lightbox images={[{ src: image.src, alt: imageAlt, title: imageAlt }]}>
				{(onOpenLightbox) => (
					<Image
						alt={imageAlt}
						className="h-32 lg:h-110 object-top cursor-pointer"
						height={image.height}
						onClick={() => onOpenLightbox(0)}
						src={image.src}
						title={imageAlt}
						width={image.width}
					/>
				)}
			</Lightbox>
			<Text>
				Conventionally, civic engagement takes the form of deliberative and decision-making processes, such as
				elections, referendums, and public consultations. Yet, it should not be reduced to the single act of
				voting, recognized as the “democratic duty.” Instead, debates about collective issues and public affairs
				occur daily on the streets, in the workplace, at home, and, more recently, through digital social media.
			</Text>
			<Text>
				Drawing on computational methods used in large-scale controversy analysis, this project explored the
				dynamics of social media networks and their impacts on society, which becomes crucial to understanding
				civic engagement in contemporary social and political movements. Through a visual network and semantic
				analysis, we propose mapping and investigating how digital social media platforms, particularly Twitter,
				have been utilized not only to disseminate information about the Vancouver Transit Referendum but also
				to encourage civic engagement on mobility and public transportation in a highly contentious and
				controversial environment.
			</Text>
			<Text>
				Between January and may 2015 Metro Vancouver was immersed in a debate about public investments in
				transit for the next 30 years. The topic became controversial when Mayor’s Council proposed to increase
				the sales taxes to fund the project, and a referendum was called to decide about the adoption of this
				new revenue sources for Metro Vancouver transportation. From Feb 11 to March 11, we captured this
				conversation on Twitter to investigate how digital social media platforms have been used to broadcast
				information of public interest, as well as promote civic engagement. This project maps, visualizes, and
				explores public opinion and interactions among people using social media.
			</Text>
		</div>
	),
};
