import { Fragment } from 'react/jsx-runtime';
import { Lightbox } from '@/components/ui/lightbox';
import type { ProjectSchema } from '@/modules/projects/timeline';
import { Collection, Item } from '@/modules/projects/timeline/extra';
import { Image } from '@/modules/projects/timeline/image';
import { Text } from '@/modules/projects/timeline/text';
import image1 from './kaggle1.png';
import image2 from './kaggle2.png';
import image3 from './kaggle3.png';
import image4 from './kaggle4.png';

export const kaggle: ProjectSchema = {
	title: 'Artificial Intelligence & Algorithmic Mediations',
	subTitle: 'Affect, Power, and Subjectivation on Kaggle',
	place: 'Concordia University',
	date: { start: '2020-01-01', end: '2024-08-31' },
	tags: ['AI', 'Algorithmic Mediation', 'Political Economy', 'Subjectivation', 'Kaggle'],
	extra: [
		<Collection key="publications" label="Publications">
			<Item type="Journal Article" pending>
				<span>
					Frizzera, L. [Manuscript in production].{' '}
					<strong>
						AI, Free Labour, and Virtual Medals: A Critical History of Kaggle’s Crowdsourcing Model for
						Machine Learning Development
					</strong>
					. New Media & Society.
				</span>
			</Item>
			<Item type="Book Chapter" pending>
				<span>
					Frizzera, L. [In Review]. <strong>Spurious Correlations in Artificial Intelligence</strong>. In
					Sharp, K., & Murthy, D. (Eds.), Encoding Realities, Decoding Power. Duke University Press
				</span>
			</Item>
			<Item type="Journal Article" url="https://journals.sfu.ca/stream/index.php/stream/issue/view/39/19">
				Frizzera, L. (2025).{' '}
				<strong>
					Nurturing Ab/Normal Bodies and Speculative Futures: How AI Mistakes Somebody’s Hair for a Bomb
				</strong>
				. Stream: Interdisciplinary Journal of Communication. 17(1), 19-29.
			</Item>
			<Item type="Proceedings" url="https://doi.org/10.5210/spir.v2024i0.13942">
				Frizzera. L. (2025).{' '}
				<strong>Predictions of the Self: AI and the Political Economy of Subjectivation</strong>. AoIR Selected
				Papers of Internet Research.
			</Item>
			<Item
				type="Proceedings"
				url="https://sistemas.intercom.org.br/pdf/link_aceite/nacional/17/100820241908316705ad5fd6498.pdf"
			>
				Frizzera, L. (2024).{' '}
				<strong>
					Exploração cognitiva, Medalhas virtuais e IA: Um olhar crítico sobre o Kaggle, a maior plataforma de
					competições de aprendizado de máquina
				</strong>
				. Anais do 47º Congresso Brasileiro de Ciências da Comunicação. 27 e 29 de agosto de 2024. Intercom
				2024. ISSN: 2175-4683.
			</Item>
			<Item type="Thesis" url="https://spectrum.library.concordia.ca/id/eprint/994134/">
				Frizzera, L. (2024).{' '}
				<strong>
					Artificial Intelligence and Algorithmic Mediations: Affect, Power, and Subjectivation on Kaggle
				</strong>{' '}
				[PhD Dissertation, Concordia University]. Concordia University, Canada. Supervisor: Dr. Fenwick
				McKelvey.
			</Item>
		</Collection>,
		<Collection key="conferences" label="Conferences">
			<Item type="Conference Paper">
				Frizzera, L. (2025).{' '}
				<strong>Work, Play, and Un/predictive Models: The gamification of AI development on Kaggle.</strong>
				In the panel Archives of AI: (De)Platformisation, Data Infrastructures and Endings in Software
				Development. 4S - Society for Social Studies of Science. September 2-6, 2025. Seattle, USA.
			</Item>
			<Item type="Conference Paper">
				Frizzera, L. (2025).{' '}
				<strong>
					You are what AI tells you to eat: Feature Engineering and Hyper-Nudging in Online Grocery Shopping.
				</strong>{' '}
				Canadian Communication Association (CCA) @ Congress 2025. George Brown College, Toronto, Canada. Jun
				2-5, 2025.
			</Item>
			<Item type="Conference Paper">
				Frizzera, L. (2025).{' '}
				<strong>
					Spurious Correlations in Artificial Intelligence: Ab/Normal Bodies and Speculative Futures
				</strong>
				. Mini-conference Encoding Realities, Decoding Power: Exploring New Formations of Gender, Race, and
				Sexuality within Artificial Identities. University of Texas at Austin, US. Feb 27.
			</Item>
			<Item type="Conference Paper">
				Frizzera, L. (2024).{' '}
				<strong>Predictions of the Self: AI and The Political Economy of Subjectivation</strong>. Association of
				Internet Researchers (AoIR). Sheffield University. Sheffield, UK.
			</Item>
			<Item type="Conference Paper">
				Frizzera, L. (2024).{' '}
				<strong>
					Exploração cognitiva, Medalhas virtuais e IA: Um olhar crítico sobre o Kaggle, a maior plataforma de
					competições de aprendizado de máquina
				</strong>
				. Intercom 2024. Univali, Balneário Camboriú, Brasil.
			</Item>
			<Item type="Conference Paper">
				Frizzera, L. (2024).{' '}
				<strong>
					Nurturing Ab/Normal Bodies and Speculative Futures: How AI Mistakes Somebody’s Hair for a Bomb.
				</strong>{' '}
				Canadian Communication Association (CCA) @ Congress 2024. McGill University. Montreal, Canada.
			</Item>
			<Item type="Conference Paper">
				Frizzera, L. (2023).{' '}
				<strong>
					AI, Competitions, and Virtual Medals: A Critical Look at Kaggle’s Data Science Community
				</strong>
				. International Communication Association (ICA), Philosophy, Theory and Critique division. Toronto,
				Canada.
			</Item>
			<Item type="Conference Paper">
				Frizzera, L. (2023).{' '}
				<strong>From deepfake to shallow truths: algorithmic subjectivation and the uncanny self</strong>.
				Canadian Communication Association (CCA) @ Congress 2023. York University. York, Canada.
			</Item>
		</Collection>,
		<Collection key="guest-speaker" label="Guest Speaker">
			<Item type="Guest Speaker">
				Frizzera, L. (2025).{' '}
				<strong>Correlações Espúrias na IA: A Normalização do Corpo e seus Futuros Especulativos.</strong>
				Ciclo de conferências. Programa de pós-graduação em Comunicação e Territorialidades. Universidade
				Federal do Espírito Santo. Vitória, Brasil. 14 de outubro de 2025.
			</Item>
			<Item type="Guest Speaker">
				Frizzera, L. (2025). <strong>Affect, Power, and Subjectivation in AI Technosolutionism.</strong>{' '}
				Department of Media Culture. City University of New York (CUNY). May 30, 2025. New York. NY, US.
			</Item>
			<Item type="Guest Speaker">
				Frizzera, L. (2024). <strong>Affect, Power, and Subjectivation on Kaggle’s AI Competitions.</strong>{' '}
				Center of Digital Humanities Research (CoDHR) Speaker Series. September 17. Texas A&M. College Station,
				TX, US.
			</Item>
		</Collection>,
	],
	content: (
		<div className="space-y-1.5">
			<Lightbox images={[{ src: image1.src, alt: 'Kaggle Homepage', title: 'Kaggle Homepage' }]}>
				{(onOpenLightbox) => (
					<Image
						alt="Kaggle Homepage"
						className="h-32 lg:h-60 object-top cursor-pointer"
						height={image1.height}
						onClick={() => onOpenLightbox(1)}
						src={image1.src}
						title="Kaggle Homepage"
						width={image1.width}
					/>
				)}
			</Lightbox>
			<Text>
				Over the past decade, the widespread investment in digital infrastructure and the extensive digitization
				of individual behaviour have provided the basis for the rapid development of machinelearning techniques
				and Artificial Intelligence (AI). AI datafy our body and our identity, producing live databases full of
				calculated linkages between humans and nonhumans. It creates a new cartography of biopower that
				sometimes produces technologies, but always produces subjects. This research examines the political
				economy of subjectivation in the “making of” machine-learning algorithms and AI by closely examining the
				relations of power, affect, and subjectivation on Kaggle, the world’s largest data science community.
				Conceived as a gamified platform for crowdsourced machine-learning challenges, Kaggle is a networked
				public where users are under constant pressure to produce new and improved algorithms.
			</Text>
			<Text>
				This research first engages with Kaggle as a company and platform, offering a narrative of its history
				and a detailed description of how it works. Combining discourse analysis, software studies, and digital
				methods, this research aims to understand how code, data, digital infrastructures, crowdsourced labour,
				and political-economic interests are mobilized to create instruments of control that shape, modulate,
				and mediate individual behaviour. This phenomenon, which I call modes of automatic subjectivation,
				points toward the possibility of using subjective and impersonal materials to reorganize life in its
				broadest sense according to a specific system of power and privileges involving gender, race, sexuality,
				and social class.
			</Text>
			<Text>
				This dissertation argues that these modes of subjectivation are designed to control the “production of
				possibilities” and to reinforce specific types of socioeconomic relations, which, in turn, reproduce
				current conditions of existence. Furthermore, this research argues that the data science community has a
				notable compulsion toward cost reduction, indifference toward human life, an obsession with controlling
				populations and individual bodies, and a desire to produce a predictable future for economic gain.
				Ultimately, this research identifies algorithmic media based on AI Technology as a core asset in the
				attention economy and as a source of power that can be used as an interface to prescribe individual
				behaviour.
			</Text>
			<Lightbox
				images={[
					{ src: image2.src, alt: 'Internet Archive', title: 'Internet Archive' },
					{ src: image3.src, alt: 'Kaggle Timeline', title: 'Kaggle Timeline' },
					{ src: image4.src, alt: 'Kaggle Competitions', title: 'Kaggle Competitions' },
				]}
			>
				{(onOpenLightbox) => (
					<Fragment>
						<div className="grid gap-1 grid-cols-3">
							<Image
								alt="Internet Archive"
								className="h-32 lg:h-60 object-top cursor-pointer"
								height={image2.height}
								onClick={() => onOpenLightbox(1)}
								src={image2.src}
								title="Internet Archive"
								width={image2.width}
							/>
							<Image
								alt="Kaggle Timeline"
								className="h-32 lg:h-60 object-top cursor-pointer"
								height={image3.height}
								onClick={() => onOpenLightbox(0)}
								src={image3.src}
								title="Kaggle Timeline"
								width={image3.width}
							/>
							<Image
								alt="Kaggle Competitions"
								className="h-32 lg:h-60 object-top cursor-pointer"
								height={image4.height}
								onClick={() => onOpenLightbox(2)}
								src={image4.src}
								title="Kaggle Competitions"
								width={image4.width}
							/>
						</div>
					</Fragment>
				)}
			</Lightbox>
			<Text>
				Dissertation submitted in partial fulfillment of the requirements for the degree of Doctor of Philosophy
				in Communication Studies.
			</Text>
		</div>
	),
};
