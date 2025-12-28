import nerveImage from '@/assets/images/projects/nerve.png'
import { Lightbox } from '@/components/ui/lightbox'
import { Collection, Item } from '@/modules/projects/timeline/extra'
import type { TimelineEntry } from '@/modules/projects/timeline'
import { Image } from '@/modules/projects/timeline/image'
import { Text } from '@/modules/projects/timeline/text'
import { SquareArrowOutUpRight } from 'lucide-react'
import { Fragment } from 'react/jsx-runtime'

export const nerve: TimelineEntry = {
	title: 'NERVE',
	subTitle: 'Named Entity Reconciliation Vetting Environment',
	place: 'LINCS Project',
	date: { start: 2021 },
	tags: ['DH', 'NLP', 'NER', 'LOD', 'Web Annotation'],
	extra: [
		<Collection label='Links'>
			<Item type='Link' url='https://nerve.lincsproject.ca'>
				nerve.lincsproject.ca
			</Item>
		</Collection>,
		<Collection label='Symposia'>
			<Item type='Conference Paper' pending>
				Frizzera, L. (2026). <strong>NERVE-racking Challenges on XML text editors</strong>.
				Canada-Brazil AI-in-scholcomm symposium. January 21, 2026, University of Victoria, Victoria,
				BC, Canada..
			</Item>
			<Item type='Conference Paper'>
				Frizzera, L. (2023).{' '}
				<strong>
					LEAF-Writer & NERVE and things in between. Making Links: Connections, Cultures, Contexts
				</strong>
				. May 5 - 7. University of Guelph. Guelph, ON, Canada.
			</Item>
			<Item type='Conference Paper'>
				Frizzera, L., Ilovan, M., Zafar, H. (2021).{' '}
				<strong>Nerve Interface. Interactive Demo</strong>. LINCS Conference 2021, April 29 - May 6,
				Via Zoom, Canada.
			</Item>
		</Collection>,
		<Collection label='Code'>
			<Item type='Code' url='https://gitlab.com/calincs/conversion/nerve'>
				NERVE
			</Item>
			<Item type='Code' url='https://gitlab.com/calincs/conversion/lincs-webannotation'>
				LINCS Web Annotation
			</Item>
			<Item type='Code' url='https://gitlab.com/calincs/infrastructure/auth-api'>
				LINCS Auth API
			</Item>
		</Collection>,
	],
	content: (
		<div className='space-y-1.5'>
			<Lightbox images={[{ src: nerveImage.src, alt: 'Nerve', title: 'Nerve' }]}>
				{(onOpenLightbox) => (
					<Fragment>
						<Image
							src={nerveImage.src}
							width={nerveImage.width}
							height={nerveImage.height}
							alt='Nerve'
							title='Nerve'
							className='h-32 lg:h-60 object-top cursor-pointer'
							onClick={() => onOpenLightbox(0)}
						/>
					</Fragment>
				)}
			</Lightbox>
			<Text>
				NERVE is an application that performs Named Entity Recognition (NER), allowing users new to
				Linked Open Data (LOD) to find and match entities entities in a document. NERVE suggests
				relevant Uniform Resource Identifiers (URIs) for entities, so users can match entities to an
				authority in order to turn it into LOD.
			</Text>
			<Text>
				NERVE is part of the Linked Infrastructure for Networked Cultural Scholarship (
				<a
					className='hover:underline'
					href='https://lincsproject.ca'
					rel='noopener noreferrer'
					target='_blank'
					title='Linked Infrastructure for Networked Cultural Scholarship'
				>
					LINCS Project
					<SquareArrowOutUpRight className='inline size-3 ml-1 mb-0.5' />
				</a>
				) and is funded by the Canada Foundation for Innovation (
				<a
					className='hover:underline'
					href='https://www.innovation.ca'
					rel='noopener noreferrer'
					target='_blank'
					title='Canada Foundation for Innovation'
				>
					CFI
					<SquareArrowOutUpRight className='inline size-3 ml-1 mb-0.5' />
				</a>
				)
			</Text>
		</div>
	),
}
