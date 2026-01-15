import { Lightbox } from '@/components/ui/lightbox';
import type { ProjectSchema } from '@/modules/projects/timeline';
import { Image } from '@/modules/projects/timeline/image';
import { Text } from '@/modules/projects/timeline/text';
import pm1 from './pm1.png';
import pm2 from './pm2.png';
import pm3 from './pm3.png';
import pm4 from './pm4.png';
import pm5 from './pm5.png';
import pm6 from './pm6.png';
import pm7 from './pm7.png';

const altText = 'Primeira Mão Tablet Edition';

export const primeiraMaoTablet: ProjectSchema = {
	title: 'Primeira Mão Tablet Edition',
	place: 'Universidade Federal do Espírito Santo',
	date: { start: '2010-09-01', end: '2011-04-30' },
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
				I taught a course on graphic design for newspapers and magazines between 2010 and 2011 as a volunteer
				professor in the Department of Social Communication at Universidade Federal do Espírito Santo. In the
				first term, Daniela Martins, professor of the Print Newspaper course at that time, and I led an
				initiative to create the first Primeira Mão digital edition for tablets. Primeira Mão is the course’s
				newspaper lab, printed since 1990. During 3 months, the students worked on the print and digital
				editions simultaneously. Their job was to write the stories and design the entire edition.
			</Text>
			<Text>
				For the digital edition layout, we had to create two different versions to take advantage of the
				rotation features on tablets: portrait and landscape views. We used Adobe InDesign and the Digital
				Edition plug-in to design the pages for both print and digital editions. At that time, the digital
				edition was available only for iPad in beta.
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
				The students had a chance to experiment with different ways of storytelling using features available in
				Adobe’s tools: video, sound, scrolling, slideshows, and Internet connectivity. We also collaborated with
				Daniela Zanetti, Assistant Professor for New Media at the time, to include her students' work in this
				edition. They created five ads using the same tool.
			</Text>
			<Text>
				Unfortunately, by the end of the term, when the edition was almost finished, Adobe closed the beta tool,
				and we were not allowed to publicize Primeira Mão’s first digital edition. However, the students had the
				opportunity to work with this new tool and experiment with different forms of storytelling on tablets.
			</Text>
			<iframe
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				allowFullScreen
				className="rounded-lg w-full md:h-max aspect-video object-cover"
				loading="lazy"
				referrerPolicy="strict-origin-when-cross-origin"
				src="https://www.youtube.com/embed/_PDoCUqSaO0?si=raU83109vsH5lkxh"
				title="YouTube video player"
			/>
		</div>
	),
};
