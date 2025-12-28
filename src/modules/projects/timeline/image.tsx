import { ImageIcon } from 'lucide-react';
import { useInView } from 'motion/react';
import { type ComponentPropsWithoutRef, useRef } from 'react';
import { cn } from '@/lib/utils';

interface ImageProps extends ComponentPropsWithoutRef<'img'> {
	containerClassName?: string;
}
export function Image({ containerClassName, ...props }: ImageProps) {
	const container = useRef<HTMLDivElement>(null);
	const isInView = useInView(container, { once: true, margin: '20% 0px' });

	if (!isInView) {
		return (
			<div
				ref={container}
				className={cn(
					'bg-muted text-muted-foreground grid place-items-center h-32 rounded-xl',
					props.className,
					containerClassName,
				)}
			>
				<ImageIcon className="size-5" />
			</div>
		);
	}

	return (
		<div ref={container} className={cn('max-w-full', containerClassName)}>
			{isInView ? (
				<img
					{...props}
					alt={props.alt}
					className={cn('object-cover rounded-xl h-32 w-full cover-img', props.className)}
					fetchPriority="high"
					loading="lazy"
				/>
			) : (
				<div
					ref={container}
					className={cn(
						'bg-muted text-muted-foreground grid place-items-center h-32 rounded-xl',
						props.className,
						containerClassName,
					)}
				>
					<ImageIcon className="size-5" />
				</div>
			)}
		</div>
	);
}
