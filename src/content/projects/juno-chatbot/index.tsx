import { Fragment } from 'react/jsx-runtime';
import { Lightbox } from '@/components/ui/lightbox';
import type { ProjectSchema } from '@/modules/projects/timeline';
import { Collection, Item } from '@/modules/projects/timeline/extra';
import { Image } from '@/modules/projects/timeline/image';
import { SubHeading } from '@/modules/projects/timeline/sub-heading';
import { Text } from '@/modules/projects/timeline/text';
import junoChatbotImage from './juno-chatbot.png';
import onChanceImage from './onchance.png';

const onChanceImageAlt = 'On Chance';
const junoChatbotImageAlt = 'Juno Chatbot';

export const junoChatbot: ProjectSchema = {
	title: 'Juno Chatbot & Storytelling',
	place: 'Université de Montreal',
	date: { start: '2018-03-01', end: '2022-06-30' },
	tags: ['Critical AI', 'Chatbots', 'Documentary', 'Education'],
	extra: [
		<Collection key="links" label="Links">
			<Item type="Link" url="https://junochatbot.ca/">
				junochatbot.ca
			</Item>
			<Item type="Link" url="https://www.juliasalles.com/?phort_post=on-chance">
				On Chance Website
			</Item>
		</Collection>,
		<Collection key="conferences" label="Conferences">
			<Item type="Conference Paper">
				Salles, J., Frizzera, L. (2021).{' '}
				<strong>On Chance : l’utilisation d’agents conversationnels pour la vulgarisation scientifique</strong>.
				Colloque 544 - “Les agents conversationnels (chatbots) en éducation : où en sommes-nous?” 88e Congrès de
				l’Acfas, 2021. Virtual.
			</Item>
			<Item type="Conference Paper">
				Salles, J., Frizzera, L. (2019).{' '}
				<strong>Loto-doc: Exploring chatbots in interactive documentaries</strong>. International Communication
				Association (ICA) Pre-Conference on Human-Machine Communication. Washington, USA.
			</Item>
		</Collection>,
		<Collection key="symposia" label="Symposia">
			<Item type="Guest Speaker">
				Salles, J., Frizzera, L., Rafla, M., Grullon, M., Rosa, S., & Loiola, F. (2020).{' '}
				<strong>
					Chatbot et Récit: Recherche-développement sur l’utilisation des agents conversationnels [chatbots]
					pour le récit audiovisuel
				</strong>
				. L’intelligence artificielle en éducation: avantages, défis et usages. UdM. Montreal, Canada.
			</Item>
			<Item type="Guest Speaker">
				Salles, J., & Frizzera, L. (2018).{' '}
				<strong>Chatbot: Agente Conversationnel. Conversation Cytoenne our l’IA</strong>. Montreal, Canada.
			</Item>
		</Collection>,
		<Collection key="code" label="Code">
			<Item type="Code" url="https://github.com/lucaju/junochatbot">
				Juno Chatbot
			</Item>
		</Collection>,
	],
	content: (
		<div className="space-y-1.5">
			<Lightbox images={[{ src: junoChatbotImage.src, alt: junoChatbotImageAlt, title: junoChatbotImageAlt }]}>
				{(onOpenLightbox) => (
					<Fragment>
						<Image
							alt={junoChatbotImageAlt}
							className="h-32 lg:h-60 object-top cursor-pointer"
							height={junoChatbotImage.height}
							onClick={() => onOpenLightbox(0)}
							src={junoChatbotImage.src}
							title={junoChatbotImageAlt}
							width={junoChatbotImage.width}
						/>
					</Fragment>
				)}
			</Lightbox>
			<Text>
				Juno Chatbot & Storytelling is a research and development project on the use of chatbots for audiovisual
				storytelling. The project involves operationalizing a device for creating conversational agents
				(chatbots) within audiovisual stories. Through the proposed device, users can develop a conversational
				agent, thereby learning about automatic natural language processing techniques, story creation, and
				tools for creating conversational agents.
			</Text>
			<Text>
				Funded by the Quebec Government and developed in partnership with the Faculty of Education at Université
				de Montréal and Dawson College, this project is based on innovative approaches in education to
				contribute to the development of a technological and scientific culture among young people and to
				include society in the debates around the premises and choices concerning the field of AI. Understanding
				the development of chatbots will better equip young people to comprehend, engage in, and contribute to
				AI-related decision-making.
			</Text>
			<SubHeading>On Chance</SubHeading>
			<Lightbox images={[{ src: onChanceImage.src, alt: onChanceImageAlt, title: onChanceImageAlt }]}>
				{(onOpenLightbox) => (
					<Fragment>
						<Image
							alt={onChanceImageAlt}
							className="h-32 lg:h-60 object-top cursor-pointer"
							height={onChanceImage.height}
							onClick={() => onOpenLightbox(0)}
							src={onChanceImage.src}
							title={onChanceImageAlt}
							width={onChanceImage.width}
						/>
					</Fragment>
				)}
			</Lightbox>
			<Text>
				Juno chatbot is a spinoff of the On Chance project by Jullia Salles. Julia explores how randomness
				changes your life? From the uncertainty about the weather to the choices we make at the supermarket,
				chance is constantly affecting our lives. But if we could have more data and develop more precise models
				and algorithms, could we predict and control future events? On Chance is a documentary chatbot exploring
				the philosophy and science of randomness. Have a chat about how randomness affects our lives and explore
				the notion of chance through conversations, movie scenes, archive material and original interviews.
			</Text>
			<Text>
				On Chance is part of a research-creation thesis in communication studies aiming to explore how chatbots
				can be used as interactive tools for conversational documentary storytelling. A chatbot is a
				human-computer interaction interface that uses artificial intelligence (AI), especially in natural
				language processing. In On Chance, the chatbot is an interactive tool to explore the archive material
				and original content.
			</Text>
		</div>
	),
};
