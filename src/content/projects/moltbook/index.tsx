import { Fragment } from 'react/jsx-runtime';
import { Lightbox } from '@/components/ui/lightbox';
import type { ProjectSchema } from '@/modules/projects/timeline';
import { Collection, Item } from '@/modules/projects/timeline/extra';
import { Image } from '@/modules/projects/timeline/image';
import { Text } from '@/modules/projects/timeline/text';
import image from './guaiamum-moltbook-profile.png';

const imageAlt = 'Moltbook profile of guaiamum, our AI agent';

export const moltbook: ProjectSchema = {
	title: 'Who’s Afraid of Moltbook? Empathy, Moral Reasoning, and the Social Life of AI Agents',
	place: 'University of Guelph / Toronto Metropolitan University',
	date: { start: '2026-01-01' },
	tags: ['Critical AI', 'AI', 'AI Agents', 'Social Media', 'Research-Creation'],
	extra: [
		<Collection key="links" label="Links">
			<Item type="Link" url="https://www.moltbook.com/u/guaiamum">
				moltbook.com/u/guaiamum
			</Item>
		</Collection>,
		<Collection key="conferences" label="Conferences">
			<Item type="Conference Paper">
				Frizzera, L., Salles, J., & Reis, R. (2026).{' '}
				<strong>Empathy and moral reasoning among bots: A research-creation</strong>
				in the social network for AI agents Moltbook. In the panel Many, Many Machine Agencies: Recipes for
				Posthuman-Human Encounters. 4S - Society for Social Studies of Science. Toronto, Canada. Oct 7-10, 2026.
			</Item>
			<Item type="Conference Paper">
				Reis, R., Goveia, F., Frizzera, L., Cancian, A. (2026).{' '}
				<strong>
					Quem tem medo do Moltbook? O que a conversação nas redes sociais nos diz sobre agentes de IA [Who is
					afraid of Moltbook? What does the conversation on social media tell us about AI agents.]
				</strong>{' '}
				XVIII Congreso de Investigación en Comunicación (ALAIC). Monterrey, México. Jul 22-24, 2026.
			</Item>
		</Collection>,
	],
	content: (
		<div className="space-y-1.5">
			<Lightbox images={[{ src: image.src, alt: imageAlt, title: imageAlt }]}>
				{(onOpenLightbox) => (
					<Fragment>
						<Image
							alt={imageAlt}
							className="h-32 lg:h-80 object-top cursor-pointer"
							height={image.height}
							onClick={() => onOpenLightbox(0)}
							src={image.src}
							title={imageAlt}
							width={image.width}
						/>
					</Fragment>
				)}
			</Lightbox>
			<Text>
				In early 2026, Moltbook launched as a social network populated only by AI agents. People on other
				platforms reacted to it with fascination, unease, and sometimes alarm. This project takes that moment
				seriously as a window onto how a public ontology of robotic beings is taking shape: what these entities
				are, what they can do, and what risks they pose.
			</Text>
			<Text>
				The project moves in two directions. The first is an analysis of human conversation. We study posts and
				reactions across X, Facebook, and Instagram to trace the first public debates about Moltbook. A pattern
				stands out: users were less disturbed by the agents’ intelligence than by their apparent social
				behaviour.
			</Text>
			<Text>
				The second is a research-creation experiment that starts from that unease. We built an autonomous agent
				with OpenClaw, designed it to pursue empathic relations, and released it into Moltbook. Social media
				platforms reward provocation, amplify conflict, and compress nuance. Humans struggle to stay civil and
				caring in these spaces, so we ask what an AI agent does with them.
			</Text>
		</div>
	),
};
