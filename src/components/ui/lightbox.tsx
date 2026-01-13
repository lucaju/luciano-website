import { useCallback, useState } from 'react';
import { Carousel, CarouselContent, CarouselItem } from './carousel';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from './dialog';

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
				<DialogContent className="sm:max-w-2xl">
					<DialogHeader>
						<DialogTitle>Photo Details</DialogTitle>
						{props.images.length > 1 && (
							<DialogDescription>Swipe to scroll through the images</DialogDescription>
						)}
					</DialogHeader>

					<Carousel key={index} opts={{ startIndex: index, active: true }}>
						<CarouselContent>
							{props.images.map((image) => (
								<CarouselItem key={image.src} className="">
									<img
										alt={image.alt}
										className=" h-8- lg:h-144 lg:w-full object-center lg:object-scale-down object-contain"
										fetchPriority="low"
										src={image.src}
									/>
								</CarouselItem>
							))}
						</CarouselContent>
					</Carousel>
				</DialogContent>
			</Dialog>

			{props.children(onOpenLightbox)}
		</>
	);
}
