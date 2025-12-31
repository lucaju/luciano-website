import { Fragment } from 'react/jsx-runtime';
import image from '@/assets/images/projects/Mapping-Campus-Antiracism-Protest.png';
import { Lightbox } from '@/components/ui/lightbox';
import type { TimelineEntry } from '@/modules/projects/timeline';
import { Collection, Item } from '@/modules/projects/timeline/extra';
import { Image } from '@/modules/projects/timeline/image';
import { Text } from '@/modules/projects/timeline/text';

const imageAlt = 'Mapping Campus Antiracism Protest';

export const mappingCampusAntiracismProtest: TimelineEntry = {
	title: 'Mapping Campus Antiracism Protest',
	place: 'University of Toronto',
	date: { start: 2018, end: 2018 },
	tags: ['Machine Learning', 'Visualization', 'Politics', 'Antiracism'],
	extra: [
		<Collection key="code" label="Code">
			<Item type="Code" url="https://github.com/alexhanna/campus-antiracism">
				Campus Antiracism
			</Item>
		</Collection>,
	],
	content: (
		<div className="space-y-1.5">
			<Lightbox images={[{ src: image.src, alt: imageAlt, title: imageAlt }]}>
				{(onOpenLightbox) => (
					<Fragment>
						<Image
							alt={imageAlt}
							className="h-32 lg:h-100 object-top cursor-pointer"
							height={image.height}
							onClick={() => onOpenLightbox(0)}
							src={image.src}
							title={imageAlt}
							width={image.width}
						/>
					</Fragment>
				)}
			</Lightbox>
			<Text>
				I developed a prototype for interactive interface visualization on Campus Antiracism Protest. The data
				was collected by Alex Hanna and Ellen Berrey (University of Toronto) using a machine learning algorithm
				developed for this task. The source of data is a collection of student association lead and university
				focused newspapers. The prototype visualization has a subset of the dataset with about 200 records of
				protests in the USA and Canada between 2012 and 2016.
			</Text>
		</div>
	),
};
