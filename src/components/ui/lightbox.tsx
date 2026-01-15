import { useCallback, useState } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './carousel';
import { Dialog, DialogContent } from './dialog';

type LigthboxProps = {
	images: Array<{ src: string; alt: string; title?: string }>;
	children: (onOpenLightbox: (index: number) => void) => React.ReactNode;
};

export function Lightbox(props: LigthboxProps) {
	const [open, setOpen] = useState(false);
	const [index, setIndex] = useState(0);

	const onOpenLightbox = useCallback((index: number) => {
		setIndex(index);
		setTimeout(() => {
			setOpen(true);
		}, 250);
	}, []);

	return (
		<>
			<Dialog open={open} onOpenChange={setOpen}>
				<DialogContent className="sm:max-w-4xl bg-transparent border-0 shadow-none p-8">
					<Carousel key={index} opts={{ startIndex: index, active: true }}>
						<CarouselContent>
							{props.images.map((image) => (
								<CarouselItem key={image.src} className="flex justify-center">
									<img
										alt={image.alt}
										className="lg:w-full rounded-sm object-center object-contain"
										fetchPriority="low"
										src={image.src}
									/>
								</CarouselItem>
							))}
						</CarouselContent>
						{props.images.length > 1 && (
							<>
								<CarouselPrevious />
								<CarouselNext />
							</>
						)}
					</Carousel>
				</DialogContent>
			</Dialog>

			{props.children(onOpenLightbox)}
		</>
	);
}
