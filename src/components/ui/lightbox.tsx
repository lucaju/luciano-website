import { motion } from 'motion/react';
import { type ReactNode, useCallback, useEffect, useRef, useState } from 'react';
import { Carousel, type CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './carousel';
import { Dialog, DialogContent, DialogTitle } from './dialog';

export type LightboxImage = { src: string; alt: string; title?: string };

export type LightboxProps = {
	images: LightboxImage[];
	children: (onOpenLightbox: (index: number) => void) => ReactNode;
};

const navButtonClass =
	'size-11 border-white/20 bg-black/45 text-white shadow-md backdrop-blur-sm hover:bg-black/60 hover:text-white disabled:border-white/10 disabled:bg-black/25 disabled:text-white/40';

export function Lightbox(props: LightboxProps) {
	const [open, setOpen] = useState(false);
	const [startIndex, setStartIndex] = useState(0);
	const [api, setApi] = useState<CarouselApi | null>(null);
	const [selected, setSelected] = useState(0);
	const focusContainerRef = useRef<HTMLDivElement>(null);

	const onOpenLightbox = useCallback(
		(requested: number) => {
			const clamped = Math.min(Math.max(0, requested), Math.max(0, props.images.length - 1));
			setStartIndex(clamped);
			setSelected(clamped);
			setOpen(true);
		},
		[props.images.length],
	);

	useEffect(() => {
		if (!api) return;
		const sync = () => setSelected(api.selectedScrollSnap());
		sync();
		api.on('select', sync);
		api.on('reInit', sync);
		return () => {
			api.off('select', sync);
			api.off('reInit', sync);
		};
	}, [api]);

	useEffect(() => {
		if (!open || !api) return;
		const clamped = Math.min(Math.max(0, startIndex), Math.max(0, props.images.length - 1));
		api.scrollTo(clamped, true);
		setSelected(clamped);
	}, [open, startIndex, api, props.images.length]);

	const slide = props.images[selected];
	const titleLabel = slide?.title ?? slide?.alt ?? 'Image gallery';
	const showCounter = props.images.length > 1;

	return (
		<>
			<Dialog open={open} onOpenChange={setOpen}>
				<DialogContent
					overlayClassName="bg-black/88 backdrop-blur-sm"
					showCloseButton
					className={[
						// DialogContent defaults include sm:max-w-lg (512px); tw-merge does not drop it when only max-w-none is set
						'fixed inset-0 left-0 top-0 z-50 flex h-dvh max-h-dvh w-full max-w-none sm:max-w-none',
						'translate-x-0 translate-y-0 gap-0 rounded-none border-0 bg-transparent p-0 shadow-none',
						'data-[state=open]:zoom-in-100 data-[state=closed]:zoom-out-100',
						'**:data-[slot=dialog-close]:top-[max(1rem,env(safe-area-inset-top))] **:data-[slot=dialog-close]:right-[max(1rem,env(safe-area-inset-right))]',
						'**:data-[slot=dialog-close]:z-20 **:data-[slot=dialog-close]:text-white **:data-[slot=dialog-close]:opacity-90 **:data-[slot=dialog-close]:ring-offset-black',
						'**:data-[slot=dialog-close]:hover:opacity-100 **:data-[slot=dialog-close]:focus-visible:ring-white/40',
					].join(' ')}
					onOpenAutoFocus={(e) => {
						e.preventDefault();
						focusContainerRef.current?.focus();
					}}
				>
					<div
						ref={focusContainerRef}
						tabIndex={-1}
						className="relative flex h-full min-h-0 w-full flex-col outline-none"
					>
						{/* Full-screen hit target: DialogContent is above the overlay, so overlay clicks never fire without this */}
						<button
							type="button"
							tabIndex={-1}
							aria-label="Close gallery"
							className="absolute inset-0 z-0 m-0 cursor-default border-0 bg-transparent p-0"
							onClick={() => setOpen(false)}
						/>
						<div className="relative z-10 flex min-h-0 min-w-0 flex-1 flex-col pointer-events-none">
							{showCounter ? (
								<p
									className="pointer-events-none absolute top-[max(1rem,env(safe-area-inset-top))] left-1/2 z-1 -translate-x-1/2 text-sm tabular-nums text-white/75"
									aria-live="polite"
								>
									{selected + 1} / {props.images.length}
								</p>
							) : null}

							<div className="flex min-h-0 min-w-0 flex-1 flex-col items-center justify-center px-14 pb-6 pt-14 sm:px-16">
								<Carousel
									setApi={setApi}
									opts={{
										startIndex: Math.min(Math.max(0, startIndex), Math.max(0, props.images.length - 1)),
										loop: props.images.length > 1,
										active: open,
									}}
									className="relative mx-auto w-full max-w-[70dvw] pointer-events-auto"
								>
									<CarouselContent className="ml-0">
										{props.images.map((image, i) => (
											<CarouselItem key={image.src} className="basis-full pl-0">
												<div className="flex min-h-0 w-full items-center justify-center">
													<img
														alt={image.alt}
														className="max-h-[70dvh] max-w-[70dvw] rounded-sm object-contain"
														decoding="async"
														fetchPriority={i === selected ? 'high' : 'low'}
														loading={i === selected ? 'eager' : 'lazy'}
														src={image.src}
													/>
												</div>
											</CarouselItem>
										))}
									</CarouselContent>
									{props.images.length > 1 ? (
										<>
											<CarouselPrevious
												variant="outline"
												size="icon-lg"
												className={`${navButtonClass} absolute top-1/2 left-[max(0.5rem,env(safe-area-inset-left))] -translate-y-1/2 sm:left-3`}
											/>
											<CarouselNext
												variant="outline"
												size="icon-lg"
												className={`${navButtonClass} absolute top-1/2 right-[max(0.5rem,env(safe-area-inset-right))] -translate-y-1/2 sm:right-3`}
											/>
										</>
									) : null}
								</Carousel>
							</div>

							<motion.div
								key={selected}
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 0.2 }}
								className="pointer-events-none shrink-0 px-6 pb-[max(1.25rem,env(safe-area-inset-bottom))] pt-1"
							>
								<DialogTitle
									className={
										slide?.title
											? 'mx-auto max-w-prose text-center text-sm font-normal leading-snug text-white/85'
											: 'sr-only'
									}
								>
									{titleLabel}
								</DialogTitle>
							</motion.div>
						</div>
					</div>
				</DialogContent>
			</Dialog>

			{props.children(onOpenLightbox)}
		</>
	);
}
