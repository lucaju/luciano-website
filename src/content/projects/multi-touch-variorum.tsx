import mtv1 from '@/assets/images/projects/IMG_3385.jpg'
import mtv2 from '@/assets/images/projects/IMG_3386.jpg'
import mtv3 from '@/assets/images/projects/IMG_3395.jpg'
import mtv4 from '@/assets/images/projects/IMG_3399.jpg'
import mtv5 from '@/assets/images/projects/IMG_3402.jpg'
import mtv6 from '@/assets/images/projects/IMG_3403.jpg'
import mtv7 from '@/assets/images/projects/IMG_3404.jpg'
import { Lightbox } from '@/components/ui/lightbox'
import { Collection, Item } from '@/modules/projects/timeline/extra'
import type { TimelineEntry } from '@/modules/projects/timeline'
import { Image } from '@/modules/projects/timeline/image'
import { Text } from '@/modules/projects/timeline/text'
import { Fragment } from 'react/jsx-runtime'

export const multiTouchVariorum: TimelineEntry = {
	title: 'Multi-Touch Variorum',
	subTitle: 'Designing for Multi-Touch Surfaces as Social Reading Environments',
	place: 'INKE - University of Alberta',
	date: { start: 2012, end: 2013 },
	tags: ['DH', 'Tangible Interaction', 'Design', 'Variorum'],
	extra: [
		<Collection label='Publications'>
			<Item type='Journal Article' url='http://dh2013.unl.edu/abstracts/ab-318.html'>
				Frizzera, L., Vela, S., Sondheim, D., Michura, P., Ilovan, M., Rockwell, G., Ruecker, S., &
				the INKE TEAM. (2013).{' '}
				<strong>Designing for Multitouch Surfaces as Social Reading Environments</strong>. 35–37.
			</Item>
		</Collection>,
		<Collection label='Conferences'>
			<Item type='Conference Paper'>
				Frizzera, L., Vela, S., Sondheim, D., Michura, P., Ilovan, M., Rockwell, G., Ruecker, S., &
				INKE TEAM. (2013).{' '}
				<strong>Designing for Multitouch Surfaces as Social Reading Environments</strong>. Presented
				in the panel “The Design of New Knowledge Environments.” Digital Humanities 2013. University
				of Nebraska. Lincoln, USA.
			</Item>
		</Collection>,
		<Collection label='Blog Posts'>
			<Item
				type='Blog Post'
				url='/blog/mtv-designing-for-multi-touch-surfaces-as-social-reading-environments'
			>
				MTV: Designing for Multi-Touch Surfaces as Social Reading Environments
			</Item>
		</Collection>,
	],
	content: (
		<div className='space-y-1.5'>
			<Text>
				In 2012, I developed the Multi-touch Variorum (MtV), a prototype interface for social
				reading of complex literary works, such as Shakespeare’s variorum editions. The interface
				was designed for use on a multi-touch table that can accommodate up to four researchers
				standing around its edges, allowing them to tap, flick, and rotate through different
				editions of texts using natural gestures. The development process required a complete
				rethink of digital interface design. The initial version unconsciously followed desktop
				conventions with fixed orientations and static panels. Early tests revealed the need for a
				fundamental redesign to support collaborative interaction from different sides of the
				device.
			</Text>
			<Lightbox
				images={[
					{ src: mtv1.src, alt: 'Multi-Touch Variorum', title: 'Multi-Touch Variorum' },
					{ src: mtv2.src, alt: 'Multi-Touch Variorum', title: 'Multi-Touch Variorum' },
					{ src: mtv3.src, alt: 'Multi-Touch Variorum', title: 'Multi-Touch Variorum' },
					{ src: mtv4.src, alt: 'Multi-Touch Variorum', title: 'Multi-Touch Variorum' },
					{ src: mtv5.src, alt: 'Multi-Touch Variorum', title: 'Multi-Touch Variorum' },
					{ src: mtv6.src, alt: 'Multi-Touch Variorum', title: 'Multi-Touch Variorum' },
					{ src: mtv7.src, alt: 'Multi-Touch Variorum', title: 'Multi-Touch Variorum' },
				]}
			>
				{(onOpenLightbox) => (
					<Fragment>
						<Image
							alt='Multi-Touch Variorum'
							className='h-32 lg:h-90 object-top cursor-pointer'
							height={mtv1.height}
							onClick={() => onOpenLightbox(0)}
							src={mtv1.src}
							title='Multi-Touch Variorum'
							width={mtv1.width}
						/>
						<div className='grid gap-1 grid-cols-3'>
							<Image
								alt='Multi-Touch Variorum'
								className='h-32 lg:h-60 object-top cursor-pointer'
								height={mtv2.height}
								onClick={() => onOpenLightbox(1)}
								src={mtv2.src}
								title='Multi-Touch Variorum'
								width={mtv2.width}
							/>
							<Image
								alt='Multi-Touch Variorum'
								className='h-32 lg:h-60 object-top cursor-pointer'
								height={mtv3.height}
								onClick={() => onOpenLightbox(2)}
								src={mtv3.src}
								title='Multi-Touch Variorum'
								width={mtv3.width}
							/>
							<Image
								alt='Multi-Touch Variorum'
								className='h-32 lg:h-60 object-top cursor-pointer'
								height={mtv4.height}
								onClick={() => onOpenLightbox(3)}
								src={mtv4.src}
								title='Multi-Touch Variorum'
								width={mtv4.width}
							/>
							<Image
								alt='Multi-Touch Variorum'
								className='h-32 lg:h-60 object-top cursor-pointer'
								height={mtv5.height}
								onClick={() => onOpenLightbox(4)}
								src={mtv5.src}
								title='Multi-Touch Variorum'
								width={mtv5.width}
							/>
							<Image
								alt='Multi-Touch Variorum'
								className='h-32 lg:h-60 object-top cursor-pointer'
								onClick={() => onOpenLightbox(5)}
								height={mtv6.height}
								src={mtv6.src}
								title='Multi-Touch Variorum'
								width={mtv6.width}
							/>
							<Image
								alt='Multi-Touch Variorum'
								className='h-32 lg:h-60 object-top cursor-pointer'
								height={mtv7.height}
								onClick={() => onOpenLightbox(6)}
								src={mtv7.src}
								title='Multi-Touch Variorum'
								width={mtv7.width}
							/>
						</div>
					</Fragment>
				)}
			</Lightbox>
			<Text>
				Creating a genuinely “social” reading interface proved more challenging than simply
				enlarging a touchscreen. We had to solve practical problems, such as making reading panels
				movable and rotatable for each user, while implementing a lock function to distinguish
				between gestures meant to move panels and interact with text. Furthermore, we grappled with
				defining what “social” means in a humanities context, ultimately developing two distinct
				interface approaches: a “Lazy Susan” design with a central rotating ring of shared editions
				that encourages conversation around a shared digital workspace.
			</Text>
			<iframe
				allow='autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share'
				allowFullScreen
				className='rounded-lg w-full'
				height='267'
				loading='lazy'
				referrerPolicy='strict-origin-when-cross-origin'
				src='https://player.vimeo.com/video/70527973?h=36e12598a6'
				title='Vimeo video player'
			></iframe>
		</div>
	),
}
