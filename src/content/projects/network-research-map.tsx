import image from '@/assets/images/blog/layout_feature-e1514655283655.png'
import { Lightbox } from '@/components/ui/lightbox'
import { Collection, Item } from '@/modules/projects/timeline/extra'
import type { TimelineEntry } from '@/modules/projects/timeline'
import { Image } from '@/modules/projects/timeline/image'
import { Text } from '@/modules/projects/timeline/text'
import { Fragment } from 'react/jsx-runtime'

export const networkResearchMap: TimelineEntry = {
	title: 'Network Research Map',
	subTitle: 'Visualizing research connections in arts, humanities, and social sciences',
	place: 'KIAS - University of Alberta',
	date: { start: 2017, end: 2019 },
	tags: ['Network Visualization', 'Design', 'Research Map'],
	extra: [
		<Collection label='Links'>
			<Item type='Link' url='https://netvis.lucianofrizzera.com/'>
				Research Map
			</Item>
		</Collection>,
		<Collection label='Conferences'>
			<Item type='Conference Paper'>
				Frizzera, L., Cselinacz, M., Ilovan, M., Ensslin, A., & Rockwell, G. (2020).{' '}
				<strong>
					Knowing Ourselves: Building an Interactive Researcher Map at the University of Alberta
				</strong>
				. Canadian Society for Digital Humanities (CSDH) @ Congress 2020. London, Canada.
			</Item>
		</Collection>,
		<Collection label='Code'>
			<Item type='Code' url='https://github.com/lucaju/netvisjs'>
				Netvis
			</Item>
		</Collection>,
	],
	content: (
		<div className='space-y-1.5'>
			<Lightbox images={[{ src: image.src, alt: 'Netviz', title: 'Netviz' }]}>
				{(onOpenLightbox) => (
					<Fragment>
						<Image
							alt='Netviz'
							className='h-32 lg:h-90 object-top cursor-pointer'
							height={image.height}
							onClick={() => onOpenLightbox(0)}
							src={image.src}
							title='Netviz'
							width={image.width}
						/>
					</Fragment>
				)}
			</Lightbox>
			<Text>
				The University of Alberta's Office of the Vice President (Research) and the Kule Institute
				for Advanced Study are collaborating to develop a picture of the richness and variety of
				social sciences, humanities and fine arts (SSHA) research at the University of Alberta. To
				that end, we developed a digital Research Map (in beta) based on the websites of all SSHA
				departments and their full-time faculty members. The tool maps faculty members and their
				research keywords as well as the connections between them and includes a web-based search
				interface with network data visualization. We hope this will help us identify new
				interdisciplinary connections in support of building research capacity and help research
				administrators appreciate the heterogeneous network of research undertaken at the University
				of Alberta.
			</Text>
		</div>
	),
}
