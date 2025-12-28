import ymxLogo from '@/assets/images/blog/d76876e7-96e9-49a5-a5cf-72e94297706e.jpg'
import { Lightbox } from '@/components/ui/lightbox'
import type { TimelineEntry } from '@/modules/projects/timeline'
import { Image } from '@/modules/projects/timeline/image'
import { Text } from '@/modules/projects/timeline/text'
import { Fragment } from 'react/jsx-runtime'

export const ymx: TimelineEntry = {
	title: 'YMX',
	subTitle: 'Migration, Land, and Loss after Mirabel',
	place: 'Concordia University',
	date: { start: 2017, end: 2017 },
	tags: ['Migration', 'Data visualization'],
	content: (
		<div className='space-y-1.5'>
			<Lightbox images={[{ src: ymxLogo.src, alt: 'YMX', title: 'YMX' }]}>
				{(onOpenLightbox) => (
					<Fragment>
						<Image
							alt='YMX'
							className='h-32 lg:h-80 object-top cursor-pointer'
							onClick={() => onOpenLightbox(0)}
							src={ymxLogo.src}
							height={ymxLogo.height}
							title='YMX'
							width={ymxLogo.width}
						/>
					</Fragment>
				)}
			</Lightbox>
			<Text>
				Inspired by the acquisition of two Solari split-flap information displays from Mirabel
				Airport by Matt Soar, Associate Professor of Communication Studies at Concordia University,
				the Montréal Signs Project put together the installation{' '}
				<b>YMX: Migration, Land, and Loss after Mirabel</b> by Cheryl Sim. Sim’s exhibition speaks
				to the parallel stories of displacement and forced migration: those dispossessed of their
				land to build the airport and the thousands of people who arrived at Mirabel escaping war,
				disaster, or economic adversity.
			</Text>
			<Text>
				I had the opportunity to work with Matt Soar and Cheryl Sim on this project helping them to
				visualize the immigration data provided by the Canadian Government. Some of the
				visualizations were present in the exhibition.
			</Text>
			<Text>
				The exhibition took place at the Galerie POPOP (Belgo Building), Montreal, between March 29
				and April 13, 2017.
			</Text>
		</div>
	),
}
