import { Fragment } from 'react/jsx-runtime';
import { Lightbox } from '@/components/ui/lightbox';
import type { ProjectSchema } from '@/modules/projects/timeline';
import { Collection, Item } from '@/modules/projects/timeline/extra';
import { Image } from '@/modules/projects/timeline/image';
import { Text } from '@/modules/projects/timeline/text';
import dhGame1 from './dh-experience-the-game.png';

export const dhExperience: ProjectSchema = {
	title: 'DH experience',
	subTitle: 'A cooperative game',
	place: 'INKE - University of Alberta',
	date: { start: '2013-10-01', end: '2014-10-31' },
	tags: ['DH', 'Game', 'Design'],
	extra: [
		<Collection key="conferences" label="Conferences">
			<Item key="exhibition" type="Exhibition">
				Palmer, S. Z., Rockwell, G., Ruecker, S., Montague, J., Frizzera, L., Gill, A., & O’Donnell, D. (2015).
				<strong>The DH Experience</strong>. Digital Humanities 2015. Sydney, Australia.
			</Item>
			<Item key="conference-paper" type="Conference Paper">
				Montague, J., Frizzera, L., Sperhacke, S., Bernardes, M., Rockwell, G., & Ruecker, S. (2014).{' '}
				<strong>Have you ever been DH-experienced? In Borders Without Boundaries</strong>. Canadian Game Studies
				Association (CGSA) @ Congress 2014. Brock University. St. Catherine, Canada.
			</Item>
		</Collection>,
		<Collection key="blog-posts" label="Blog Posts">
			<Item key="blog-post" type="Blog Post" url="notes/have-you-ever-been-dh-experienced">
				The DH Experience
			</Item>
		</Collection>,
	],
	content: (
		<div className="space-y-1.5">
			<Lightbox images={[{ src: dhGame1.src, alt: 'DH Game', title: 'DH Game' }]}>
				{(onOpenLightbox) => (
					<Fragment>
						<Image
							alt="DH Game"
							className="h-32 lg:h-68 object-top cursor-pointer"
							height={dhGame1.height}
							onClick={() => onOpenLightbox(0)}
							src={dhGame1.src}
							title="DH Game"
							width={dhGame1.width}
						/>
					</Fragment>
				)}
			</Lightbox>
			<Text>
				We have developed a prototype for a cooperative game based on the work of DH practitioners, modelling the
				experience of researching and publishing in a multi-disciplinary academic environment. In The DH Experience,
				players collaborate to collect data from around the world, conduct research, and complete their projects
				appropriately to succeed, competing against time and the system inherent to the game.
			</Text>
			<iframe
				allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
				allowFullScreen
				className="rounded-lg w-full md:h-max aspect-video object-cover"
				loading="lazy"
				referrerPolicy="strict-origin-when-cross-origin"
				src="https://player.vimeo.com/video/90163548?h=7659a9b6d5"
				title="Vimeo video player"
			/>
		</div>
	),
};
