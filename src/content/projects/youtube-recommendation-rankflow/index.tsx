import { Fragment } from 'react/jsx-runtime';
import { Lightbox } from '@/components/ui/lightbox';
import type { ProjectSchema } from '@/modules/projects/timeline';
import { Collection, Item } from '@/modules/projects/timeline/extra';
import { Image } from '@/modules/projects/timeline/image';
import { SubHeading } from '@/modules/projects/timeline/sub-heading';
import { Text } from '@/modules/projects/timeline/text';
import image from './rankflow.png';

const altText = 'YouTube Recommendation Rankflow visualization';

export const youtubeRecommendationRankflow: ProjectSchema = {
	title: 'YouTube Recommendation Rankflow',
	place: 'Concordia University / Universidade Federal do Espírito Santo',
	date: { start: '2018-04-01', end: '2022-07-30' },
	tags: ['AI', 'Recommendation Systems', 'Visualization', 'Politics', 'YouTube'],
	extra: [
		<Collection key="links" label="Links">
			<Item type="Link" url="https://rankflow-brasil-2018.lucianofrizzera.com/">
				Visualization: 2018 Brazil Elections
			</Item>
			<Item type="Link" url="https://rankflow-quebec-elections-2018.lucianofrizzera.com">
				Visualization: 2018 Quebec Elections
			</Item>
			<Item type="Link" url="http://rankflow-ontario-elections-2018.lucianofrizzera.com">
				Visualization: 2018 Ontario Elections
			</Item>
		</Collection>,
		<Collection key="publications" label="Publications">
			<Item type="Journal Article" url="https://doi.org/10.21878/compolitica.2020.10.1.333">
				Reis, R., Zanetti, D., & Frizzera, L. (2020).{' '}
				<strong>
					A conveniência dos algoritmos: O papel do YouTube nas eleições brasileiras de 2018 [The convenience
					of the algorithms: The role of YouTube in the 2018 Brazilian elections]
				</strong>
				. Compolítica, 10(1), 35–58.
			</Item>
			<Item
				type="Proceedings"
				url="http://compolitica.org/novo/wp-content/uploads/2019/05/gt4_Reis_Zanetti_Frizzera.pdf?fbclid=IwAR2BlbZ0StjKc5aFF8Jg-qVe1DkWPRTlqrHtBt5gYKgVCtOx2JsBUeTbJnM"
			>
				Reis, R., Zanetti, D., Frizzera, L. (2019).{' '}
				<strong>Algorithms and Disinformation: The role of YouTube in Brazilian politics</strong>. Congresso da
				Associação Brasileira de Pesquisadores em Comunicação e Política (ComPolitica). Brasilia, Brazil. ISSN
				2447-4797.
			</Item>
		</Collection>,
		<Collection key="conferences" label="Conferences">
			<Item type="Conference Paper">
				Reis, R., Zanetti, D., Frizzera, L. (2019).{' '}
				<strong>Algorithms and Disinformation: The role of YouTube in Brazilian politics</strong>. Congresso da
				Associação Brasileira de Pesquisadores em Comunicação e Política. Brasilia, Brazil.
			</Item>
			<Item type="Conference Paper">
				Frizzera, L., McKelvey, F. (2019).{' '}
				<strong>The Political Narrative of YouTube Recommendation System: 2018 Ontario election</strong>.
				Canadian Communication Association (CCA) @ Congress 2019. UBC. Vancouver, Canada.
			</Item>
		</Collection>,
		<Collection key="code" label="Code">
			<Item type="Code" url="https://github.com/lucaju/rankflow">
				Youtube Recommendation Rankflow
			</Item>
			<Item type="Code" url="https://github.com/lucaju/youtube-recom">
				Youtube Recommendation Analysis Tools
			</Item>
		</Collection>,
	],
	content: (
		<div className="space-y-1.5">
			<Lightbox images={[{ src: image.src, alt: altText, title: altText }]}>
				{(onOpenLightbox) => (
					<Fragment>
						<Image
							alt={altText}
							className="h-32 lg:h-60 object-top cursor-pointer"
							height={image.height}
							onClick={() => onOpenLightbox(0)}
							src={image.src}
							title={altText}
							width={image.width}
						/>
					</Fragment>
				)}
			</Lightbox>
			<Text>
				What videos does YouTube recommend when serching for party leaders during elections party? an analytical
				tool that examines YouTube’s recommendation systems, influencer culture, and the creative economy
			</Text>
			<Text>
				The study sought to investigate how the YouTube platform operates, focusing on algorithmic activity and
				the strategies employed by both human and automated (robot) actors within federal and regional
				elections. The aim was to understand the impact of this system of mediation on society and to demystify
				preconceptions about ideologically neutral technologies in highly disputed political events. The
				research focuses on three case studies: 1) the 2018 Ontario (Canada) election, 2) the 2018 Quebec
				(Canada) election, and 3) the 2018 Brazilian Federal Election. The data collection was carried out
				during the 2018 campaign periods in Ontario (May and June), Quebec (Auguest and September) and in Brazil
				(August and October).
			</Text>
			<Text>
				The data collection was carried out using a Python script thatautomates YouTube search operations based
				on specified keywords (e.g., candidate names), allowing us to gather video-related data and the relative
				ranking position displayed to the user. Once the keywords were defined, the tool retrieved links for the
				top four results for each keyword and then examined the recommendation section. This process was
				repeated four times, each time collecting recommended videos to simulate a user interacting with
				algorithmic suggestions.
			</Text>
			<Text>
				The rankflow allows the analysis of the evolution of each video in the rank, find trends, and observe
				what has been recommended. This might give us some insights about how YouTube rank system works, what
				are the most prominent videos on specific topics, and what narrative this rank bring to the political
				debate in Canada.
			</Text>
			<SubHeading>Youtube Recommendation Scraper</SubHeading>
			<Text>
				As a way to make the data collection process easier and more efficient, we designed a web application
				with a ease-to-use UI to allow others researchers to collect data from YouTube's recommendation system.
				Due to funding restriction the project was paused, but the code is available on GitHub.
			</Text>
		</div>
	),
};
