import { Fragment } from 'react/jsx-runtime';
import nagasakiKittyImage from '@/assets/images/projects/AyakoRED.png';
import { Lightbox } from '@/components/ui/lightbox';
import type { TimelineEntry } from '@/modules/projects/timeline';
import { Collection, Item } from '@/modules/projects/timeline/extra';
import { Image } from '@/modules/projects/timeline/image';
import { Text } from '@/modules/projects/timeline/text';

export const nagasakiKitty: TimelineEntry = {
	title: 'Nagasaki Kitty',
	subTitle: 'A War Story',
	place: 'Concordia University',
	date: { start: 2016, end: 2017 },
	tags: ['Video Game', 'Design', 'WWII'],
	extra: [
		<Collection key="links" label="Links">
			<Item type="Link" url="http://nagasaki-kitty.ca/">
				nagasaki-kitty.ca
			</Item>
		</Collection>,
		<Collection key="conferences" label="Conferences">
			<Item type="Conference Paper">
				Scheiding, R., Sugiarto, M., Pedraça, S., & Frizzera, L. (2017).{' '}
				<strong>Nagasaki Kitty: A War Story</strong>. Canadian Game Studies Association (CGSA) @ Congress 2017.
				Ryerson University. Toronto, Canada.
			</Item>
			<Item type="Exhibition">
				Scheiding, R., Sugiarto, M., Pedraça, S., & Frizzera, L. (2017).{' '}
				<strong>Nagasaki Kitty: A War Story. Game Demo.</strong>
				Canadian Game Studies Association (CGSA) @ Congress 2017. Ryerson University. Toronto, Canada.
			</Item>
		</Collection>,
		<Collection key="exhibitions" label="Exhibitions">
			<Item type="Exhibition">
				Scheiding, R., Sugiarto, M., Pedraça, S., & Frizzera, L. (2017).{' '}
				<strong>Nagasaki Kitty: A War Story. Video Game.</strong>
				http://nagasaki-kitty.ca. Digital Dynamics 2018: Interactions (January 26 - May 13, 2018). THE MUSEUM.
				Kitchener, Canada.
			</Item>
		</Collection>,
	],
	content: (
		<div className="space-y-1.5">
			<Lightbox images={[{ src: nagasakiKittyImage.src, alt: 'Nagasaki Kitty', title: 'Nagasaki Kitty' }]}>
				{(onOpenLightbox) => (
					<Fragment>
						<Image
							alt="Nagasaki Kitty"
							className="h-32 lg:h-80 object-top cursor-pointer"
							height={nagasakiKittyImage.height}
							onClick={() => onOpenLightbox(0)}
							src={nagasakiKittyImage.src}
							title="Nagasaki Kitty"
							width={nagasakiKittyImage.width}
						/>
					</Fragment>
				)}
			</Lightbox>
			<Text>
				Video games based on historic wars have tended to focus on depictions of the combat and violence
				experienced by soldiers. This has led to a climate where non-combat casualties have been ignored and
				marginalized within the traditional narrative framework of war games. As a result, both women and
				children have been largely underrepresented in war games despite the fact that they typically represent
				the majority of casualties. One specific example of this phenomenon can be found in Pacific War
				(1941-1945) games that ignore the victims of bombings, especially the atomic bombings of Hiroshima and
				Nagasaki. The hibakusha (bomb affected persons) of Hiroshima and Nagasaki have been ignored in the
				representation of the war, especially in North America. The goal of this project is to create an
				educational war game that focuses on the experiences of hibakusha after the bombing of Nagasaki in order
				to better incorporate their stories into North American understandings of the atomic bombs.
			</Text>
			<Text>
				I had the opportunity to participate as a programmer in the development of this short -story video game.
				This work was a collaboration with Ryan Scheiding, Marilyn Sugiarto, Samia Pedraça, and Mimi Okabe. The
				project was presented and previewed at the Canadian Games Studies Association (CGSA) 2017 conference in
				Toronto, Canada.
			</Text>
		</div>
	),
};
