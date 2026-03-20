import { Fragment } from 'react/jsx-runtime';
import { Lightbox } from '@/components/ui/lightbox';
import type { ProjectSchema } from '@/modules/projects/timeline';
import { Image } from '@/modules/projects/timeline/image';
import { Text } from '@/modules/projects/timeline/text';
import twitterVersusMode1 from './twvm-screenshot-1.jpg';
import twitterVersusMode2 from './twvm-screenshot-2.jpg';
import twitterVersusMode3 from './twvm-screenshot-3.jpg';
import twitterVersusMode4 from './twvm-screenshot-4.jpg';

const altText = 'Twitter Versus Mode';

export const tvm: ProjectSchema = {
	title: 'Twitter Versus Mode',
	date: { start: '2010-05-01', end: '2011-02-28' },
	tags: ['Visualization', 'Social Media', 'Twitter'],
	content: (
		<div className="space-y-1.5">
			<Lightbox
				images={[
					{ src: twitterVersusMode4.src, alt: altText, title: altText },
					{ src: twitterVersusMode1.src, alt: altText, title: altText },
					{ src: twitterVersusMode2.src, alt: altText, title: altText },
					{ src: twitterVersusMode3.src, alt: altText, title: altText },
				]}
			>
				{(onOpenLightbox) => (
					<Fragment>
						<Image
							alt="twitter-versus-mode"
							className="h-32 lg:h-86 object-top cursor-pointer"
							height={twitterVersusMode4.height}
							onClick={() => onOpenLightbox(0)}
							src={twitterVersusMode4.src}
							title="twitter-versus-mode"
							width={twitterVersusMode4.width}
						/>
						<div className="grid gap-1 grid-cols-3">
							<Image
								alt={altText}
								className="h-32 lg:h-60 object-top cursor-pointer"
								height={twitterVersusMode1.height}
								onClick={() => onOpenLightbox(1)}
								src={twitterVersusMode1.src}
								title={altText}
								width={twitterVersusMode1.width}
							/>
							<Image
								alt={altText}
								className="h-32 lg:h-60 object-top cursor-pointer"
								height={twitterVersusMode2.height}
								onClick={() => onOpenLightbox(2)}
								src={twitterVersusMode2.src}
								title={altText}
								width={twitterVersusMode2.width}
							/>
							<Image
								alt={altText}
								className="h-32 lg:h-60 object-top cursor-pointer"
								height={twitterVersusMode3.height}
								onClick={() => onOpenLightbox(3)}
								src={twitterVersusMode3.src}
								title={altText}
								width={twitterVersusMode3.width}
							/>
						</div>
					</Fragment>
				)}
			</Lightbox>
			<Text>
				Twitter Versus Mode is my first attempt to connect Twitter and Flash. It is basically a tool that compares two
				keywords. Once the user hits “go”, the script accesses Twitter’s API to search the last 1,000 tweets that
				mention at least one of the two selected keywords. A colour-coded square represents each tweet. An animation
				that illustrates the flow of tweets reconstructs the timeline. The content of a tweet can be seen by hovering
				over a square on Twitter, showing the text and the user’s avatar. There is an option to reorder the tweets by
				keywords. Since Twitter closed its API and implemented strict access rules, this prototype stopped working. But
				you can still see some screenshots.
			</Text>
		</div>
	),
};
