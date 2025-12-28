import pm1 from '@/assets/images/projects/IMG_0038-e1514564918156.png';
import pm2 from '@/assets/images/projects/IMG_0039.png';
import pm3 from '@/assets/images/projects/IMG_0040.png';
import pm4 from '@/assets/images/projects/IMG_0041.png';
import pm5 from '@/assets/images/projects/IMG_0042.png';
import pm6 from '@/assets/images/projects/IMG_0043.png';
import pm7 from '@/assets/images/projects/IMG_0044.png';
import { Lightbox } from '@/components/ui/lightbox';
import type { TimelineEntry } from '@/modules/projects/timeline';
import { Image } from '@/modules/projects/timeline/image';
import { Text } from '@/modules/projects/timeline/text';

const altText = 'Primeira Mão Tablet Edition';

export const primeiraMaoTablet: TimelineEntry = {
	title: 'Primeira Mão Tablet Edition',
	place: 'Universidade Federal do Espírito Santo',
	date: { start: 2010, end: 2011 },
	tags: ['Journalism', 'Design', 'Tablet'],
	content: (
		<div className="space-y-1.5">
			<Lightbox images={[{ src: pm1.src, alt: altText, title: altText }]}>
				{(onOpenLightbox) => (
					<Image
						alt={altText}
						className="h-32 lg:h-120 object-top cursor-pointer"
						height={pm1.height}
						onClick={() => onOpenLightbox(0)}
						src={pm1.src}
						title={altText}
						width={pm1.width}
					/>
				)}
			</Lightbox>
			<Text>
				I taught a course on graphic design for newspaper and magazines between 2010 and 2011, while I was a voluntary
				professor in the Department of Social Communication at Universidade Federal do Espírito Santo. In the first term
				Daniela Martins, professor of the Print Newspaper course at that time, and I led an initiative to create the
				first Primeira Mão digital edition for tablets. Primeira Mão is the course’s newspaper lab, printed since 1990.
				During 3 months the students worked in the print and digital edition at the same time. Their job was to write
				the stories as well as design the whole edition.
			</Text>
			<Text>
				For the digital edition layout, we had to create two different version in order to take advantages of rotation
				features in tablets: portrait and landscape views. We used Adobe Indesign and the Digital Edition plugging in
				order to design the pages for both print and digital editions. At that time, the digital edition was available
				for beta test and only for iPad.
			</Text>
			<Lightbox
				images={[
					{ src: pm2.src, alt: altText, title: altText },
					{ src: pm3.src, alt: altText, title: altText },
					{ src: pm4.src, alt: altText, title: altText },
					{ src: pm5.src, alt: altText, title: altText },
					{ src: pm6.src, alt: altText, title: altText },
					{ src: pm7.src, alt: altText, title: altText },
				]}
			>
				{(onOpenLightbox) => (
					<div className="grid gap-1 grid-cols-3">
						<Image
							alt={altText}
							className="h-32 lg:h-60 object-top cursor-pointer"
							height={pm2.height}
							onClick={() => onOpenLightbox(1)}
							src={pm2.src}
							title={altText}
							width={pm2.width}
						/>
						<Image
							alt={altText}
							className="h-32 lg:h-60 object-top cursor-pointer"
							height={pm3.height}
							onClick={() => onOpenLightbox(2)}
							src={pm3.src}
							title={altText}
							width={pm3.width}
						/>
						<Image
							alt={altText}
							className="h-32 lg:h-60 object-top cursor-pointer"
							height={pm4.height}
							onClick={() => onOpenLightbox(3)}
							src={pm4.src}
							title={altText}
							width={pm4.width}
						/>
						<Image
							alt={altText}
							className="h-32 lg:h-60 object-top cursor-pointer"
							height={pm5.height}
							onClick={() => onOpenLightbox(4)}
							src={pm5.src}
							title={altText}
							width={pm5.width}
						/>
						<Image
							alt={altText}
							className="h-32 lg:h-60 object-top cursor-pointer"
							height={pm6.height}
							onClick={() => onOpenLightbox(5)}
							src={pm6.src}
							title={altText}
							width={pm6.width}
						/>
						<Image
							alt={altText}
							className="h-32 lg:h-60 object-top cursor-pointer"
							height={pm7.height}
							onClick={() => onOpenLightbox(6)}
							src={pm7.src}
							title={altText}
							width={pm7.width}
						/>
					</div>
				)}
			</Lightbox>
			<Text>
				The students got a chance to experiment different ways of storytelling using features available in Adobe’s tool:
				Video, sound, scrolling, slideshow, and connection to the Internet. We also collaborated with Daniela Zanetti,
				professor of Advertisement for New Media at the time, in order to put the work of her students in this edition.
				They created five ads using the same tool.
			</Text>
			<Text>
				Unfortunately, by the end of the term, when the edition was almost finished, Adobe close the beta tool and we
				were not allowed to public launched Primeira Mão first digital edition. However, the students had the
				opportunity to works with this new tool and experiment different forms of storytelling in tablets.
			</Text>
			<iframe
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				allowFullScreen
				className="rounded-lg w-full"
				height="267"
				loading="lazy"
				referrerPolicy="strict-origin-when-cross-origin"
				src="https://www.youtube.com/embed/_PDoCUqSaO0?si=raU83109vsH5lkxh"
				title="YouTube video player"
			/>
		</div>
	),
};
