import { Lightbox } from '@/components/ui/lightbox';
import type { ProjectSchema } from '@/modules/projects/timeline';
import { Collection, Item } from '@/modules/projects/timeline/extra';
import { Image } from '@/modules/projects/timeline/image';
import { Text } from '@/modules/projects/timeline/text';
import image from './memoria-em-rede.png';

const imageAlt = 'Memória em rede';

export const memoriaEmRede: ProjectSchema = {
	title: 'Memória em Rede',
	subTitle: 'A História da Imprensa Capixaba',
	place: 'Vitória, Brazil',
	date: { start: '2004-10-01', end: '2005-12-31' },
	tags: ['Journalism', 'History', 'Archive', 'Memory'],
	extra: [
		<Collection key="publications" label="Publications">
			<Item
				type="Book Chapter"
				url="https://www.researchgate.net/publication/263467564_Os_primordios_da_Imprensa_no_Espirito_Santo#fullTextFileContent"
			>
				Frizzera, L., & Zanandrea, A. (2005). <strong>Os primórdios da imprensa no Espírito Santo</strong>. Em
				J. A. Martinuzzo (Ed.), Impressões Capixabas: 165 anos de jornalismo no Espírito Santo (1ª ed., pp.
				35–65). Departamento de Imprensa Oficial do Espírito Santo.
			</Item>
			<Item type="Thesis" url="/attachments/memoria_em_rede_web.pdf">
				Frizzera, L., & Zanandrea, A. (2005).{' '}
				<strong>Memória em Rede: a História da Imprensa Andressa Couto Zanandrea Nunes</strong>. Trabalho
				apresentado ao Curso de Graduação em Comunicação Social do Centro de Artes da Universidade Federal do
				Espírito Santo - Ufes, como requisito final para a obtenção do título de bacharel. Orientadores: José
				Antonio Martinuzzo e Ruth de Cássia dos Reis
			</Item>
		</Collection>,
	],
	content: (
		<div className="space-y-1.5">
			<Lightbox images={[{ src: image.src, alt: imageAlt, title: imageAlt }]}>
				{(onOpenLightbox) => (
					<Image
						alt={imageAlt}
						className="h-32 lg:h-88 object-top cursor-pointer"
						height={image.height}
						onClick={() => onOpenLightbox(1)}
						src={image.src}
						title={imageAlt}
						width={image.width}
					/>
				)}
			</Lightbox>
			<Text>
				Vivemos num mundo interconectado, em que as informações fluem cada vez mais rapidamente. Com o
				surgimento da Internet, abriu-se um leque de possibilidades que antes não podiam sequer ser imaginadas.
				As interações que acontecem no ciberespaço não dependem de tempo nem de distâncias. As mais diferentes
				culturas integram-se como nunca. É possível comunicar-se com pessoas em várias partes do mundo, colher
				informações sobre qualquer assunto, trocar experiências e relacionar-se com outras pessoas de diferentes
				culturas. A construção das identidades, a memória e as relações de poder se estendem ao ciberespaço, que
				constitui um novo lugar de memória e também de inteligência coletiva, uma vez que há múltiplas
				possibilidades de acesso, percepção, reconstrução e emissão de mensagens e conteúdos. Devido a essas
				características, o ciberespaço se mostra como o lugar ideal para receber o núcleo da Rede de Memória da
				Imprensa Capixaba (Rede MIC), tão importante para a constituição da identidade local, uma vez que o
				jornalismo influenciou, e conintinua influenciando a construção das identidades. Como há certo
				esquecimento em relação à memória local, faz-se necessário resgatá-la e mostrar a importância da
				imprensa na constituição da sociedade espírito-santense.
			</Text>
			<Text>
				Trabalho de conclusão de curso realizado no curso de Jornalismo da Universidade Federal do Espírito
				Santo (UFES) em 2005 em parceria com Andressa Zanandrea.
			</Text>
			<Text className="italic">
				<strong>English translation:</strong>
				We live in an interconnected world, where information flows increasingly quickly. With the Internet,
				many possibilities opened that could never have been imagined before. The interactions that take place
				in cyberspace do not depend on time or distance. Different cultures are integrating as they never have
				before. It is possible to communicate with people worldwide, obtain information on any subject, share
				experiences, and form relationships with people from different cultures. The construction of identities,
				memory, and power relationships extends to cyberspace, a new place for memory and collective
				intelligence offering multiple possibilities for access, perception, reconstruction, and message and
				content emission. By these characteristics, cyberspace stands as the ideal place for the core of the
				Capixaba’s Press Memory Net (Rede MIC), which is so important for the constitution of the local
				identity, as journalism has influenced and continues to influence the construction of identities. As
				there is a tendency to forget local memory, it is necessary to preserve it and show how the press was
				important in the constitution of Espírito-Santense society.
			</Text>
		</div>
	),
};
