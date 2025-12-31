import { Fragment } from 'react/jsx-runtime';
import { Lightbox } from '@/components/ui/lightbox';
import type { ProjectSchema } from '@/modules/projects/timeline';
import { Collection, Item } from '@/modules/projects/timeline/extra';
import { Image } from '@/modules/projects/timeline/image';
import { Text } from '@/modules/projects/timeline/text';
import image from './dancing-with-fitbit.jpg';

const imageAlt = 'Dancing with Fitbit';

export const dancingWithFitbit: ProjectSchema = {
	title: 'Dancing with Fitbit',
	place: 'Concordia University',
	date: { start: '2018-08-01', end: '2019-12-31' },
	tags: ['Tracking', 'Surveillance', 'Subjectivation', 'Fitbit'],
	extra: [
		<Collection key="links" label="Links">
			<Item type="Link" url="https://dancing-with-fitbit.lucianofrizzera.com">
				Project Homepage
			</Item>
		</Collection>,
		<Collection key="publications" label="Publications">
			<Item type="Journal Article" url="https://doi.org/10.1080/14794713.2019.1677026">
				Durocher, M., Thulin, S., Salles, J., & Frizzera, L. (2019).{' '}
				<strong>
					Step, step, rest, step: Challenging age-related norms and biometric bodies through self-tracking
					data-rematerialization
				</strong>
				. International Journal of Performance Arts and Digital Media, 1–18.
			</Item>
		</Collection>,
		<Collection key="code" label="Code">
			<Item type="Code" url="https://github.com/lucaju/dancing-with-fitbit">
				Dancing with Fitbit
			</Item>
			<Item type="Code" url="https://github.com/lucaju/fitbit-node">
				Fitbit Data Collector
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
							className="h-32 lg:h-120 object-top cursor-pointer"
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
				Florence, a choreographer and dance professor in her late fifties, has tracked herself with a Fitbit
				Charge HR watch at all times for one week. Throughout this period, she took notes on her experience and
				the thoughts that emerged from it in a journal. After the week of tracking, she created and performed a
				choreography inspired by this lived experience. The data collected by the self-tracking device were then
				used in the creation of a soundtrack, and the production of visual effects. These two “re-workings” of
				the Fitbit data were integrated into an edited video, and used to create this web-based interactive
				platform. This research and creation project aimed to explore how the data and the lived self-tracking
				experience could be used to generate subversive forms of data materialization through choreography,
				sound, and visuals. We aimed to critique injunctions related to aging bodies and “successful aging”
				normativity.
			</Text>
			<Text>
				The creative process also became the hub for technical and theoretical explorations on the bodies
				produced through the Fitbit device and related activities (mediatized bodies, regulated bodies,
				standardized bodies, lived bodies, etc.) as well as on what constitutes “data.” We conceive the data as
				being culturally mediated. The mediation processes that participate in data production inform the ways
				in which it is produced, treated, and rendered effective. Our critical approach aimed to “re-work” the
				“bio” metric bodies produced by Fitbit, to deconstruct the narratives and temporalities that are
				embedded and generated in their production.
			</Text>
		</div>
	),
};
