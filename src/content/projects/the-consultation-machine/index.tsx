import { Fragment } from 'react/jsx-runtime';
import { Lightbox } from '@/components/ui/lightbox';
import type { ProjectSchema } from '@/modules/projects/timeline';
import { Collection, Item } from '@/modules/projects/timeline/extra';
import { Image } from '@/modules/projects/timeline/image';
import { SubHeading } from '@/modules/projects/timeline/sub-heading';
import { Text } from '@/modules/projects/timeline/text';
import image from './the-consultation-machine.png';

const imageAlt = 'The Consultation Machine';

export const theConsultationMachine: ProjectSchema = {
	title: 'The Consultation Machine',
	place: 'Machine Agencies',
	date: { start: '2024-03-01', end: '2025-04-30' },
	tags: ['Critical AI', 'AI', 'Policy', 'HCI'],
	extra: [
		<Collection key="links" label="Links">
			<Item type="Link" url="https://consultation-machine.vercel.app">
				consultation-machine.vercel.app
			</Item>
		</Collection>,
		<Collection key="publications" label="Publications">
			<Item type="Journal Article" pending>
				McKelvey, F., Jones, M., Marinov, R., Frizzera, L., & Wester, M. [In Print].{' '}
				<strong>
					The Consultation Machine: Experiments in AI Futures, Literacies and Public Participation
				</strong>
				. Imaginations: Journal of Cross-Cultural Image Studies.
			</Item>
		</Collection>,
		<Collection key="conferences" label="Conferences">
			<Item type="Conference Paper">
				McKelvey, F., Jones, M., Marinov, R., & Frizzera, L. (2024). <strong>The Consultation Machine</strong>.
				Canadian Communication Association (CCA) @ Congress 2024. McGill University. Montreal, Canada.
			</Item>
		</Collection>,
		<Collection key="exhibitions" label="Exhibitions">
			<Item type="Exhibition">
				Frizzera, L., & McKelvey, F. (2025). <strong>Milieux’s Basilisk</strong>. Interactive Installation
				(intervention). Shipwreck Montreal. Montreal, April 11-12, 2025.
			</Item>
			<Item type="Exhibition">
				Frizzera, L. (2024). <strong>The Consultation Machine</strong>. Interactive Installation. LAB | Wilding
				AI, MUTEK Forum, Montreal, August 23, 2024.
			</Item>
		</Collection>,
		<Collection key="code" label="Code">
			<Item type="Code" url="https://github.com/lucaju/consultation-machine">
				The Consultation Machine
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
							className="h-32 lg:h-50 object-top cursor-pointer"
							height={image.height}
							onClick={() => onOpenLightbox(0)}
							src={image.src}
							width={image.width}
							title={imageAlt}
						/>
					</Fragment>
				)}
			</Lightbox>
			<Text>
				Drawing on Digital Methods, the Consultation Machine is a “prototype” for a public workshop to engage in
				and debate AI futures. Our efforts devolved from sincere attempts to use strategic foresight to shape AI
				policy, to AI-assisted future-making, and finally to the consultation machine. Our contribution
				documents these three different prototypes to explain the evolution of their design, shaped by
				participatory methods, and to reflect on the results.
			</Text>
			<Text>
				We contribute to a growing body of literature examining how AI influences democratic policy-making in
				technoscientific capitalist systems, where democracy may yet become just another ‘problem’ to be
				streamlined and automated by algorithmic solutions. We offer both critical reflections on the challenges
				of designing workshops to democratize AI futures and a template for a novel workshop format, the
				Consultation Machine, which we hope will inspire imitators and new collective imaginations.
			</Text>
			<SubHeading>MUTEK</SubHeading>
			<Text>This project was exhibited as an interactive installation at the 2024 MUTEK Forum in Montréal.</Text>
			<SubHeading>Shipwreck Montreal</SubHeading>
			<Text>
				A sci-fi version of this project was exhibited as an intervention and interactive installation at the
				2025 Shipwreck exhibition in Montréal.
			</Text>
		</div>
	),
};
