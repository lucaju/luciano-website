import { SquareArrowOutUpRight } from 'lucide-react';
import { Fragment } from 'react/jsx-runtime';
import { Lightbox } from '@/components/ui/lightbox';
import type { ProjectSchema } from '@/modules/projects/timeline';
import { Collection, Item } from '@/modules/projects/timeline/extra';
import { Image } from '@/modules/projects/timeline/image';
import { SubHeading } from '@/modules/projects/timeline/sub-heading';
import { Text } from '@/modules/projects/timeline/text';
import leafWriterImage from './leaf-writer.png';

export const leafWriter: ProjectSchema = {
	title: 'LEAF-Writer',
	subTitle: 'The XML & RDF online editor of the Linked Editing Academic Framework',
	place: 'CWRC / LEAF',
	date: { start: '2019-10-01' },
	tags: ['DH', 'XML', 'TEI', 'LOD', 'Web Annotation'],
	extra: [
		<Collection key="links" label="Links">
			<Item type="Link" url="https://leaf-writer.leaf-vre.org">
				leaf-writer.leaf-vre.org
			</Item>
		</Collection>,
		<Collection key="awards" label="Awards">
			<Item type="Award" url="https://tei-c.org/activities/rahtz-prize-for-tei-ingenuity/">
				Rahtz Prize for TEI Ingenuity 2025
			</Item>
			<Item type="Award" url="dhawards.org/dhawards2023/results/">
				DH Awards 2023 — Best DH tool or suite of tools (Nominated)
			</Item>
		</Collection>,
		<Collection key="conferences" label="Conferences">
			<Item type="Conference Paper" pending>
				Cummings, J., Jakacki, D., Brown, S., Ilovan, M., & _Frizzera, L._ (Accepted).{' '}
				<strong>LEAF-Writer Commons: An introduction to a lightweight web-based tags-off TEI+RDF</strong>.
				Digital Humanities 2026. Daejeon, South Korea. Jul 27-31, 2026.
			</Item>
			<Item type="Exhibition" pending>
				Cummings, J., Jakacki, D., Brown, S., Ilovan, M., Frizzera, L., & Rubin-Detlev, K. (Accepted).{' '}
				<strong>
					Implementing TEI Authority File Lookups in LEAF-Writer: Researcher-centric software development in
					precarious funding contexts
				</strong>
				. Digital Humanities. Daejeon, South Korea. Jul 27-31, 2026.
			</Item>
			<Item type="Conference Paper">
				Cummings, J., Frizzera, L., Jakacki, D., Brown, S., Ilovan, M., & Rubin-Detlev, K. (2025).{' '}
				<strong>
					Linking Your *-ographies: Developing project-specific TEI Authority File Lookups for LEAF-Writer
				</strong>
				. TEI Conference. September 15 - 20, 2025, Kraków, Poland.
			</Item>
			<Item type="Conference Paper">
				Jakacki. D., Brown, S., & Frizzera, L. (2024).{' '}
				<strong>The Linked Editing Academic Framework (LEAF) in the multimodal annotation ecosystem</strong>.
				Reimagining Annotation for Multimodal Cultural Heritage. Rennes, France.
			</Item>
			<Item type="Conference Paper">
				Jakacki, D., Brown, S., Cummings. J., Ilovan, M., & Frizzera, L. (2024).{' '}
				<strong>TEI Semantic Encoding with LEAF-Writer</strong>. Canadian Society for Digital Humanities (CSDH)
				@ Congress 2024. McGill University. Montreal, Canada.
			</Item>
		</Collection>,
		<Collection key="symposia" label="Symposia">
			<Item type="Conference Paper">
				Frizzera, L. (2023).{' '}
				<strong>
					LEAF-Writer & NERVE and things in between. Making Links: Connections, Cultures, Contexts
				</strong>
				. May 5 - 7. University of Guelph. Guelph, ON, Canada.
			</Item>
		</Collection>,
		<Collection key="code" label="Code">
			<Item type="Code" url="https://gitlab.com/calincs/cwrc/leaf-writer/leaf-writer">
				LEAF-Writer
			</Item>
		</Collection>,
	],
	content: (
		<div className="space-y-1.5">
			<Lightbox images={[{ src: leafWriterImage.src, alt: 'LEAF-Writer', title: 'LEAF-Writer' }]}>
				{(onOpenLightbox) => (
					<Fragment>
						<Image
							alt="LEAF-Writer"
							className="h-32 lg:h-90 object-top cursor-pointer"
							height={leafWriterImage.height}
							onClick={() => onOpenLightbox(0)}
							src={leafWriterImage.src}
							title="LEAF-Writer"
							width={leafWriterImage.width}
						/>
					</Fragment>
				)}
			</Lightbox>
			<Text>
				LEAF-Writer is an in-browser text markup editor and Web Annotation tool provided as part of the Linked
				Editing Academic Framework (
				<a
					className="hover:underline"
					href="https://www.leaf-vre.org/"
					rel="noopener noreferrer"
					target="_blank"
					title="Linked Editing Academic Framework"
				>
					LEAF
					<SquareArrowOutUpRight className="inline size-3 ml-1 mb-0.5" />
				</a>
				) tool suite. LEAF-Writer has been designed to provide an accessible and easy-to-use on-ramp to text
				encoding for pedagogical and research purposes. It furthers the dissemination, adoption, and engaged use
				of the TEI Guidelines, especially for those who lack local infrastructure or technical support.
			</Text>
			<Text>
				LEAF-Writer is developed through a partnership among research institutions in Canada, the US, and the
				UK, funded by the Social Sciences and Humanities Research Council (
				<a
					className="hover:underline"
					href="https://sshrc-crsh.canada.ca/"
					rel="noopener noreferrer"
					target="_blank"
					title="Social Sciences and Humanities Research Council"
				>
					SSHRC
					<SquareArrowOutUpRight className="inline size-3 ml-1 mb-0.5" />
				</a>
				), the Mellon Foundation, and the National Endowment for the Humanities (NEH).
			</Text>
			<SubHeading>CWRC-Writer</SubHeading>
			<Text>
				LEAF-Writer was built upon a previous iteration of CWRC-Writer, the XML & RDF online editor of the
				Canadian Women Research Collaboratory (
				<a
					className="hover:underline"
					href="https://cwrc.ca/"
					rel="noopener noreferrer"
					target="_blank"
					title="Canadian Women Research Collaboratory"
				>
					CWRC
					<SquareArrowOutUpRight className="inline size-3 ml-1 mb-0.5" />
				</a>
				).
			</Text>
		</div>
	),
};
