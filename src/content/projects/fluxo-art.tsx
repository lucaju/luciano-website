import image from '@/assets/images/projects/fluxo-material.png'
import { Lightbox } from '@/components/ui/lightbox'
import type { TimelineEntry } from '@/modules/projects/timeline'
import { Image } from '@/modules/projects/timeline/image'
import { Text } from '@/modules/projects/timeline/text'

const imageAlt = 'Fluxo.Art Material'

export const fluxoArt: TimelineEntry = {
	title: 'Fluxo.Art',
	subTitle: 'Communication / Media Studio',
	place: 'Vitória, Brazil',
	date: { start: 2006, end: 2011 },
	tags: ['Entrepreneurship', 'Communication', 'Media', 'Design', 'Web Development', 'Advertising'],
	content: (
		<div className='space-y-1.5'>
			<Lightbox images={[{ src: image.src, alt: imageAlt, title: imageAlt }]}>
				{(onOpenLightbox) => (
					<Image
						alt={imageAlt}
						className='h-32 lg:h-90 object-top cursor-pointer'
						height={image.height}
						onClick={() => onOpenLightbox(1)}
						src={image.src}
						title={imageAlt}
						width={image.width}
					/>
				)}
			</Lightbox>
			<Text>
				I founded a communication agency named Fluxo Art with some friends. I primarily worked as a
				graphic designer and web developer, but I was also involved in many aspects of a start-up
				company, from managerial decisions to the conceptualization of the material we produced. I
				have produced several visual communication pieces for different media types, from logos and
				brand identity to editorial design, from flyers and banners to billboards, from websites to
				mobile apps, and from advertising material for print and web to entire election campaigns.
			</Text>
		</div>
	),
}
