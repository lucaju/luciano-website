import { SquareArrowOutUpRight } from 'lucide-react';
import { Fragment } from 'react/jsx-runtime';
import image from '@/assets/images/projects/comparative_ai_policy_and_regulation_1.png';
import { Lightbox } from '@/components/ui/lightbox';
import type { TimelineEntry } from '@/modules/projects/timeline';
import { Collection, Item } from '@/modules/projects/timeline/extra';
import { Image } from '@/modules/projects/timeline/image';
import { Text } from '@/modules/projects/timeline/text';

const imageAlt = 'Comparative AI Policy and Regulation';

export const comparative_ai_policy_and_regulation: TimelineEntry = {
	title: 'Comparative AI Policy and Regulation',
	place: 'Machine Agencies / The Tech Lobby',
	date: { start: 2024 },
	tags: ['Critical AI', 'AI', 'Policy', 'Regulation'],
	extra: [
		<Collection key="publications" label="Publications">
			<Item type="Journal Article" pending>
				Frizzera, L., & McKelvey, F. [In Review]. <strong>AI Lobbying and the Future of Canadian Copyright</strong>.
				Canadian Journal of Communication. Special TechLobby edition.
			</Item>
			<Item url="https://doi.org/10.1080/1369118X.2025.2565328" type="Journal Article">
				McKelvey, F., Simon, B., & Frizzera, L. (2025).{' '}
				<strong>Generative AI and the Information Commons: Controversy, Copyright, and Closure</strong>. Information,
				Communication & Society, 1-22.
			</Item>
		</Collection>,
		<Collection key="conferences" label="Conferences">
			<Item type="Conference Paper" pending>
				Frizzera, L., Pedraça, S., Salles, J., Therrien, C. (Submitted).{' '}
				<strong>Mapping Stakeholder Discourse in Brazil’s AI Regulatory Framework</strong>. Canadian Communication
				Association (CCA). Windsor, ON, Canada. Jun 2-4, 2026.
			</Item>
			<Item type="Conference Paper">
				Frizzera, L. & McKelvey, F. (2025). <strong>AI Lobbying and the Future of Canadian Copyright</strong>. In the
				panel “The Tech Lobby: Big Tech Companies and Canadian Communications and Digital Media Policy.” Canadian
				Communication Association (CCA) @ Congress 2025. George Brown College, Toronto, Canada. Jun 2-5, 2025.
			</Item>
			<Item type="Conference Paper">
				McKelvey, F., Simon, B., & Frizzera, L. (2024).{' '}
				<strong>Generative AI and the Information Commons: Controversy, Copyright, and Closure</strong>. Association of
				Internet Researchers (AoIR). Sheffield University. Sheffield, UK. Oct 30 - Nov 2, 2024.
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
							className="h-32 lg:h-100 object-top cursor-pointer"
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
				This research examines AI policy and regulation across Canada, the United States, and Brazil. I am investigating
				how these countries structure public consultation processes, legislative debates, and stakeholder engagement in
				AI governance. Using a mixed-methods approach that combines policy document analysis, discourse analysis, and
				stakeholder mapping, my objective is to identify key policy actors and analyze their lobbying strategies,
				coalition-building efforts, and framing techniques.
			</Text>
			<Text>
				While all three countries share concerns about algorithmic bias, privacy protection, and democratic
				accountability, they have distinct national approaches shaped by different political cultures: Canada emphasizes
				human rights and a risk management approach, the US focuses on technological leadership and national security,
				and Brazil prioritizes digital inclusion and data sovereignty.
			</Text>

			<Text>
				This research is made in partnership with{' '}
				<a
					className="hover:underline"
					href="https://machineagencies.milieux.ca/"
					rel="noopener noreferrer"
					target="_blank"
					title="Machine Agencies"
				>
					Machine Agencies
					<SquareArrowOutUpRight className="inline size-3 ml-1 mb-0.5" />
				</a>
				and{' '}
				<a
					className="hover:underline"
					href="https://techlobby.ca/"
					rel="noopener noreferrer"
					target="_blank"
					title="The Tech Lobby"
				>
					The Tech Lobby
					<SquareArrowOutUpRight className="inline size-3 mx-1 mb-0.5" />
				</a>
				.
			</Text>
		</div>
	),
};
