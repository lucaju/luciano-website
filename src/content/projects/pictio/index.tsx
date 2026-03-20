import { SquareArrowOutUpRight } from 'lucide-react';
import type { ProjectSchema } from '@/modules/projects/timeline';
import { Collection, Item } from '@/modules/projects/timeline/extra';
import { Text } from '@/modules/projects/timeline/text';

export const pictio: ProjectSchema = {
	title: 'Pict.io',
	subTitle: 'A collaborative game for humans and machines',
	place: 'Machine Agencies',
	date: { start: '2018-12-01', end: '2019-11-30' },
	tags: ['AI', 'HCI', 'Game', 'Design'],
	extra: [
		<Collection key="links" label="Links">
			<Item type="Link" url="https://www.gamepictio.com/">
				gamepictio.com
			</Item>
		</Collection>,
		<Collection key="conferences" label="Conferences">
			<Item type="Conference Paper">
				Frizzera, L., Zamboni, J., Salles, J. (2019).{' '}
				<strong>PICT.IO: Developing a Collaborative Game for Humans and Machines</strong>. Canadian Games Studies
				Association (CGSA) @ Congress 2019. UBC. Vancouver, Canada.
			</Item>
			<Item type="Conference Paper">
				Salles, J., Frizzera, L., & Zamboni, J. (2018). <strong>Pict.io: A Human-Machine Collaborative Game</strong>.
				Camp Serrapilheira. Rio de Janeiro, Brazil.
			</Item>
		</Collection>,
		<Collection key="symposia" label="Symposia">
			<Item type="Guest Speaker">
				Frizzera, L., Zamboni, J., Salles, J. (2018). <strong>Pict.io: A Human-Machine Collaborative Game</strong>.
				Conversation Cytoenne our l’IA. Montreal, Canada.
			</Item>
		</Collection>,
		<Collection key="exhibitions" label="Exhibitions">
			<Item type="Exhibition">Munich, Germany (May 22, 2019).</Item>
			<Item type="Exhibition">
				Québec Numérique. (April 6-7, 2019). Musée de la Civilisation de la ville de Québec. Quebec City, Canada.
			</Item>
			<Item type="Exhibition">La Charrette: Art+Tech (March 23-24, 2019). La Factry. Montreal, Canada.</Item>
			<Item type="Exhibition">
				Let’s Talk About Artificial Intelligence (March 19, 2019). 4TH SPACE. Montreal, Canada.
			</Item>
			<Item type="Exhibition">London, UK (November 2018)</Item>
			<Item type="Exhibition">Mini-Maker Faire (November 16-17, 2018), Concordia University. Montreal, Canada.</Item>
			<Item type="Exhibition">Hackathon AI (November 11, 2018). ConcordAI. Concordia University, November 2018.</Item>
			<Item type="Exhibition">
				Discover ConcordAI (October 7, 2018). ConcordAI. Concordia University, November 2018.
			</Item>
			<Item type="Exhibition">
				Camp Serrapilheira de divulgação científica (4-7 de setembro de 2018), Museu do Amanhã, Rio de Janeiro, Brasil.
			</Item>
			<Item type="Exhibition">
				Conversations citoyennes sur l’IA (16 juin 2018). Frontier AI. Université de Montréal, Montréal, Canada.
			</Item>
		</Collection>,
		<Collection key="code" label="Code">
			<Item type="Code" url="https://github.com/lucaju/pictio">
				Pict.io
			</Item>
		</Collection>,
	],
	content: (
		<div className="space-y-1.5">
			<iframe
				allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
				allowFullScreen
				className="rounded-lg w-full md:h-max aspect-video object-cover"
				loading="lazy"
				referrerPolicy="strict-origin-when-cross-origin"
				src="https://www.youtube.com/embed/ffwH93X_pKg?si=mCHF2rCzMnsZF6bR"
				title="Vimeo video player"
			/>
			<Text>
				The field of Artificial Intelligence regularly establishes a competitive relationship between humans and
				machines, which leads to the avoidance of mistakes. This research considers the creation of a collaborative and
				“mistake-friendly” drawing game for humans and machines. The game PICT.IO is inspired by the popular
				game Pictionary, a widely played drawing game in which one person receives a written message and must convey it
				to their team using drawings.
			</Text>
			<Text>
				Using Digital Methods and hacking techniques, we draw on and build upon Google’s{' '}
				<a
					className="hover:underline"
					href="https://quickdraw.withgoogle.com/"
					rel="noopener noreferrer"
					target="_blank"
					title="Quick, Draw!"
				>
					Quick, Draw!
					<SquareArrowOutUpRight className="inline size-3 ml-1 mb-0.5" />
				</a>
				, which uses machine learning to guess what players are drawing. In PICT.IO, each team consists of two humans
				and one machine, collaborating and communicating with limited resources, using drawings or speech to solve
				visual challenges.
			</Text>
			<Text>
				The research indicates that allowing for more space for AI mistakes is a crucial condition for the emergence of
				human-machine collaboration and an engaging, trustworthy, and enjoyable gameplay experience. The game is played
				by two teams. Each team is composed of two humans and one machine. The goal of the game is to make the team's
				pawn be the first to go all the way through the board’s path.
			</Text>
		</div>
	),
};
