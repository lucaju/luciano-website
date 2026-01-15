import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { NAVIGATIONS } from '../navigations';
import { buttonVariants } from '../ui/button';
import { Separator } from '../ui/separator';
import { Dock, DockIcon } from '.';
import { AnimatedThemeToggler } from './animated-theme-toggler';
import { MobileMenu } from './mobile-menu';

export interface FloatingNavbarProps extends React.HTMLAttributes<HTMLElement> {
	/**
	 * The offset in pixels before the navbar starts hiding/showing
	 * @default 50
	 */
	scrollThreshold?: number;
	/**
	 * Whether to show the navbar when scrolling up
	 * @default true
	 */
	showOnScrollUp?: boolean;
	/**
	 * Whether to hide the navbar when scrolling down
	 * @default true
	 */
	hideOnScrollDown?: boolean;
}

export function DockNavigation({
	scrollThreshold = 200,
	showOnScrollUp = true,
	hideOnScrollDown = true,
}: FloatingNavbarProps) {
	const [isVisible, setIsVisible] = useState(true);
	const [lastScrollY, setLastScrollY] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollY = window.scrollY;
			const scrollDifference = currentScrollY - lastScrollY;

			// Show/hide based on scroll direction and threshold
			if (currentScrollY < scrollThreshold) {
				setIsVisible(true);
			} else if (scrollDifference > 0) {
				// Scrolling down
				hideOnScrollDown && setIsVisible(false);
			} else if (scrollDifference < 0) {
				// Scrolling up
				showOnScrollUp && setIsVisible(true);
			}

			setLastScrollY(currentScrollY);
		};

		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => window.removeEventListener('scroll', handleScroll);
	}, [lastScrollY, scrollThreshold, showOnScrollUp, hideOnScrollDown]);

	return (
		<div className="fixed inset-x-0 top z-100 mx-auto flex flex-col h-full max-h-12">
			{/* <div className="fixed top-0 inset-x-0 h-16 bg-background to-transparent backdrop-blur-lg [-webkit-mask-image:linear-gradient(to_bottom,black,transparent)] dark:bg-background" /> */}

			<Dock
				className={cn(
					'z-50 pointer-events-auto relative mx-auto flex min-h-full h-full items-center px-1 bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] transition-all duration-300 ease-in-out',
					isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 h-auto'
				)}
			>
				<DockIcon size={140} magnification={200}>
					<a href="/" className={cn(buttonVariants({ variant: 'headless', size: 'lg' }), 'cursor-default')}>
						Luciano Frizzera
					</a>
				</DockIcon>

				<Separator orientation="vertical" className="h-full" />

				{NAVIGATIONS.map((item) => (
					<DockIcon key={item.pathname} className="hidden md:flex">
						<a href={item.pathname} className={cn(buttonVariants({ variant: 'ghost', size: 'lg' }))}>
							<item.icon className="size-4" />
							{item.label}
						</a>
					</DockIcon>
				))}

				<Separator orientation="vertical" className="hidden md:flex h-full" />

				<DockIcon size={48} magnification={60} distance={10} className="hidden md:flex ">
					<AnimatedThemeToggler className="cursor-pointer" />
				</DockIcon>

				<DockIcon size={36} magnification={36} distance={0} className="flex md:hidden">
					<MobileMenu />
				</DockIcon>
			</Dock>
		</div>
	);
}
