import { Lightbox } from '@/components/ui/lightbox';
import type { ProjectSchema } from '@/modules/projects/timeline';
import { Collection, Item } from '@/modules/projects/timeline/extra';
import { Image } from '@/modules/projects/timeline/image';
import { Text } from '@/modules/projects/timeline/text';
import image from './sbf-msma.png';

const imageAlt = 'SBF-MSMA';

export const sbfMsma: ProjectSchema = {
	title: 'SBF-MSMA',
	subTitle: 'Digital Archive for Minoritized Communities in Post-Secondary Theatre Education',
	place: 'University of Waterloo',
	date: { start: '2024-08-01', end: '2025-12-31' },
	tags: ['DH', 'Archive', 'EDIA', 'Theatre Education'],
	extra: [
		<Collection key="links" label="Links">
			<Item type="Link" url="https://cwrc.ca/group/sbf-msma">
				SBF-MSMA Project Page
			</Item>
		</Collection>,
		<Collection key="publications" label="Publications">
			<Item type="Journal Article" pending>
				Frizzera, L. & Brown, S. [In review].{' '}
				<strong>
					Beyond Platform Capitalism: Designing a Community-Driven Archive for Post-secondary Theatre Education
				</strong>
				. Special Staging Better Futures / Mettre en scène de meilleurs avenirs ,Theatre Research in Canada.
			</Item>
		</Collection>,
		<Collection key="conferences" label="Conferences">
			<Item type="Conference Paper">
				Frizzera, L. (2025).{' '}
				<strong>
					Archiving Better Futures: Platform Governance and Data Sovereignty in Community-Driven Archive Collections
				</strong>
				. In the panel “Inside Looking Out: Mobilizing Community-Driven Research Methods across Staging Better Futures,
				Governance, Ethics, Platforms.” Canadian Association for Theatre (CATR). Online. May 26-27, 2025.
			</Item>
		</Collection>,
	],
	content: (
		<div className="space-y-1.5">
			<Lightbox images={[{ src: image.src, alt: imageAlt, title: imageAlt }]}>
				{(onOpenLightbox) => (
					<Image
						alt={imageAlt}
						className="h-32 md:h-82 lg:h-110 object-top cursor-pointer"
						height={image.height}
						onClick={() => onOpenLightbox(1)}
						src={image.src}
						title={imageAlt}
						width={image.width}
					/>
				)}
			</Lightbox>
			<Text>
				This research acknowledges that significant knowledge about equitable theatre education already exists within
				marginalized communities but has been systematically undervalued and under-resourced. As a DH Postdoctoral
				Fellow at Staging Better Futures/Mettre en scène de meilleurs avenirs (SBF/MSMA), I worked on the design and
				implementation of a multilingual, accessible digital archive platform that incorporates decolonization,
				anti-racism, equity, diversity, inclusion, and accessibility (EDIA) values into its technical governance. This
				platform prioritizes data sovereignty, enabling communities to organize their cultural materials using their own
				taxonomies and knowledge frameworks, rather than relying on Western-centric archival practices.
			</Text>
			<Text>
				Working in partnership with the Canadian Writing Research Collaboratory (
				<a href="https://cwrc.ca" target="_blank" rel="noopener">
					CWRC
				</a>
				), my objectives are to challenge dominant archival infrastructures, create new frameworks for community
				knowledge sovereignty, and develop a multimedia repository of pedagogical resources that focuses on
				community-driven practices to produce new forms of knowledge and new ways of knowing.
			</Text>
		</div>
	),
};
