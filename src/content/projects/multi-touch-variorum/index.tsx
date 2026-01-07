import { Lightbox } from '@/components/ui/lightbox';
import type { ProjectSchema } from '@/modules/projects/timeline';
import { Collection, Item } from '@/modules/projects/timeline/extra';
import { Image } from '@/modules/projects/timeline/image';
import { Text } from '@/modules/projects/timeline/text';

export const multiTouchVariorum: ProjectSchema = {
	title: 'Multi-Touch Variorum',
	subTitle: 'Designing for Multi-Touch Surfaces as Social Reading Environments',
	place: 'INKE - University of Alberta',
	date: { start: '2012-12-01', end: '2013-12-31' },
	tags: ['DH', 'Tangible Interaction', 'Design', 'Variorum'],
	extra: [
		<Collection key="publications" label="Publications">
			<Item type="Proceedings" url="http://dh2013.unl.edu/abstracts/ab-318.html">
				Frizzera, L., Vela, S., Sondheim, D., Michura, P., Ilovan, M., Rockwell, G., Ruecker, S., & the INKE
				TEAM. (2013). <strong>Designing for Multitouch Surfaces as Social Reading Environments</strong>. 35–37.
			</Item>
		</Collection>,
		<Collection key="conferences" label="Conferences">
			<Item type="Conference Paper">
				Frizzera, L., Vela, S., Sondheim, D., Michura, P., Ilovan, M., Rockwell, G., Ruecker, S., & INKE TEAM.
				(2013). <strong>Designing for Multitouch Surfaces as Social Reading Environments</strong>. Presented in
				the panel “The Design of New Knowledge Environments.” Digital Humanities 2013. University of Nebraska.
				Lincoln, USA.
			</Item>
		</Collection>,
		<Collection key="blog-posts" label="Blog Posts">
			<Item type="Blog Post" url="/blog/mtv-designing-for-multi-touch-surfaces-as-social-reading-environments">
				MTV: Designing for Multi-Touch Surfaces as Social Reading Environments
			</Item>
		</Collection>,
	],
	content: (
		<div className="space-y-1.5">
			<iframe
				allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
				allowFullScreen
				className="rounded-lg w-full"
				height="267"
				loading="lazy"
				referrerPolicy="strict-origin-when-cross-origin"
				src="https://player.vimeo.com/video/70527973?h=36e12598a6"
				title="Vimeo video player"
			/>
			<Text>
				In 2012, I developed the Multi-touch Variorum (MtV), a prototype interface for social reading of complex
				literary works, such as Shakespeare’s variorum editions. The interface was designed for use on a
				multi-touch table that can accommodate up to four researchers standing around its edges, allowing them
				to tap, flick, and rotate through different editions of texts using natural gestures. The development
				process required a complete rethink of digital interface design. The initial version unconsciously
				followed desktop conventions with fixed orientations and static panels. Early tests revealed the need
				for a fundamental redesign to support collaborative interaction from different sides of the device.
			</Text>
			<Text>
				Creating a genuinely “social” reading interface proved more challenging than simply enlarging a
				touchscreen. We had to solve practical problems, such as making reading panels movable and rotatable for
				each user, while implementing a lock function to distinguish between gestures meant to move panels and
				interact with text. Furthermore, we grappled with defining what “social” means in a humanities context,
				ultimately developing two distinct interface approaches: a “Lazy Susan” design with a central rotating
				ring of shared editions that encourages conversation around a shared digital workspace.
			</Text>
		</div>
	),
};
