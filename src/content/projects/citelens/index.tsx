import { Fragment } from 'react/jsx-runtime';
import { Lightbox } from '@/components/ui/lightbox';
import type { ProjectSchema } from '@/modules/projects/timeline';
import { Collection, Item } from '@/modules/projects/timeline/extra';
import { Image } from '@/modules/projects/timeline/image';
import { Text } from '@/modules/projects/timeline/text';
import image from './citelens.png';

export const citeLens: ProjectSchema = {
	title: 'CiteLens',
	place: 'INKE - University of Alberta',
	date: { start: '2012-11-01', end: '2014-03-31' },
	tags: ['DH', 'Design', 'Citation'],
	extra: [
		<Collection key="conferences" label="Conferences">
			<Item type="Conference Paper">
				Ilovan, M., Frizzera, L., Windsor, J., Michura, P., Sondheim, D., Rockwell, G., Ruecker, S. & INKE
				Research Group (2014). <strong>CiteLens: splicing text analysis with citation analysis</strong>.
				Presented in the panel “The lifecycle of the interface.” Canadian Society for Digital Humanities (CSDH)
				@ Congress 2014. Brock University. St. Catherine, Canada.
			</Item>
			<Item type="Conference Paper">
				Ilovan, M., Frizzera, L., Michura, P., Rockwell, G., Sondheim, D., Ruecker, S., Windsor, J., & INKE
				TEAM. (2012). <strong>Visualizing Citation Patterns in Humanist Monographs</strong>. Presented in the
				panel “Designing Interactive Reading Environments for the Online Scholarly Edition.” Digital Humanities
				2012. Hamburg, Germany.
			</Item>
			<Item type="Conference Paper">
				Ilovan, M., Frizzera, L., Michura, P., Rockwell, G., Ruecker, S., Sondheim, D., Windsor, J., & NKE TEAM.
				(2012). <strong>Exploring humanist citation practice through visualization</strong>. Society for Digital
				Humanities (SDH-SEMI) @ Congress 2012. University of Waterloo. Waterloo, Canada.
			</Item>
		</Collection>,
		<Collection key="code" label="Code">
			<Item type="Code" url="https://github.com/lucaju/CiteLens">
				CiteLens
			</Item>
		</Collection>,
	],
	content: (
		<div className="space-y-1.5">
			<Lightbox images={[{ src: image.src, alt: 'CiteLens', title: 'CiteLens' }]}>
				{(onOpenLightbox) => (
					<Fragment>
						<Image
							alt="CiteLens"
							className="h-32 lg:h-56 object-top cursor-pointer"
							height={image.height}
							onClick={() => onOpenLightbox(0)}
							src={image.src}
							title="CiteLens"
							width={image.width}
						/>
					</Fragment>
				)}
			</Lightbox>
			<Text>
				From 2012 to 2014, I collaborated with Mihaela Ilovan and Jenniffer Windsor, under the supervision of
				Geoffrey Rockwell and Stan Ruecker, to develop a prototype tool to visualize citations in the
				Humanities: CiteLens. The tool is a proof-of-concept that points to the complexity of citation in the
				Humanities. Unlike the hard sciences, where academic research most often builds on previous research in
				small increments, in the Humanities and parts of the Social Sciences, the use of sources can vary in
				degree, mode, and depth. CiteLens attempts to expose this complexity and provide insights into how
				humanist scholars use citations in their work.
			</Text>
			<iframe
				allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
				allowFullScreen
				className="rounded-lg w-full md:h-max aspect-video object-cover"
				loading="lazy"
				referrerPolicy="strict-origin-when-cross-origin"
				src="https://player.vimeo.com/video/87746427?h=afc635822f"
				title="Vimeo video player"
			/>
		</div>
	),
};
