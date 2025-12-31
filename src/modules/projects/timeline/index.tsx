'use client';

import { compareAsc, format, isSameYear, parseISO } from 'date-fns';
import { Link2 } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import type React from 'react';
import { useEffect, useRef, useState } from 'react';
import slug from 'slug';
import { z } from 'zod';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Highlighter } from '@/components/ui/highlighter';
import { cn } from '@/lib/utils';

const projectSchema = z.object({
	title: z.string(),
	subTitle: z.string().optional(),
	place: z.string().optional(),
	date: z.object({
		start: z.iso.date(),
		end: z.iso.date().optional(),
	}),
	tags: z.array(z.string()).optional(),
});
export type ProjectSchema = z.infer<typeof projectSchema> & { extra?: React.ReactNode[]; content?: React.ReactNode };

const CopyClipboardMessageDelay = 2500;

export const Timeline = ({ data }: { data: ProjectSchema[] }) => {
	const ref = useRef<HTMLDivElement>(null);
	const containerRef = useRef<HTMLDivElement>(null);
	const [height, setHeight] = useState(0);

	// biome-ignore lint/correctness/useExhaustiveDependencies: only needs to run once on mount or when ref changes
	useEffect(() => {
		if (ref.current) {
			const rect = ref.current.getBoundingClientRect();
			setHeight(rect.height);
		}
	}, [ref]);

	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ['start 10%', 'end 50%'],
	});

	const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
	const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

	return (
		<div className="w-full" ref={containerRef}>
			<div ref={ref} className="relative pb-20">
				{data
					.toSorted((a, b) => {
						const resultEndDate = compareAsc(
							b.date.end ?? new Date('2999-12-31'),
							a.date.end ?? new Date('2999-12-31')
						);
						if (resultEndDate !== 0) return resultEndDate;
						const resultStartDate = compareAsc(b.date.start, a.date.start);
						return resultStartDate;
					})
					.map((item) => (
						<Entry key={item.title} item={item} />
					))}
				<div
					style={{ height: `${height}px` }}
					className="hidden md:block absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-0% via-neutral-200 dark:via-neutral-700 to-transparent to-99%  mask-[linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
				>
					<motion.div
						style={{
							height: heightTransform,
							opacity: opacityTransform,
						}}
						className="absolute inset-x-0 top-0 w-[2px] bg-linear-to-t from-purple-500 via-blue-500 to-transparent from-0% via-10% rounded-full"
					/>
				</div>
			</div>
		</div>
	);
};

const Entry = ({ item }: { item: ProjectSchema }) => {
	const [hover, setHover] = useState(false);
	const [supportsClipboard, setSupportsClipboard] = useState(false);

	useEffect(() => {
		setSupportsClipboard(!!navigator.clipboard?.writeText);
	}, []);

	return (
		// biome-ignore lint/a11y/noStaticElementInteractions: false positive
		<div
			id={slug(item.title)}
			className="flex justify-start pt-10 md:pb-40 md:gap-10"
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => setHover(false)}
		>
			<div className="sticky flex flex-col md:flex-row z-40 top-40 self-start md:w-full">
				<div className="hidden md:flex h-10 absolute left-3 md:left-3 w-10 rounded-full bg-background items-center justify-center">
					{supportsClipboard ? (
						<CopyClipboard hover={hover} title={item.title} />
					) : (
						<div className="aize-4 rounded-full bg-neutral-300 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
					)}
				</div>

				<div className="hidden md:flex flex-col md:pl-16 -mt-0.5 gap-2">
					<h2 className="text-xl md:text-4xl font-bold text-neutral-700 dark:text-neutral-300 ">
						{item.title}
					</h2>
					<ItemMetadata key={item.title} item={item} />
				</div>
			</div>

			<div className="relative pl-4 pr-4 md:pl-4 w-full">
				<MobileComponent title={item.title}>
					<div className="md:hidden block mb-4 space-y-3">
						<ItemMetadata key={item.title} item={item} />
					</div>
				</MobileComponent>
				{item.content}
			</div>
		</div>
	);
};

const MobileComponent = ({ children, title }: React.PropsWithChildren & { title: string }) => {
	const [supportsClipboard, setSupportsClipboard] = useState(false);
	useEffect(() => {
		setSupportsClipboard(!!navigator.clipboard?.writeText);
	}, []);

	return (
		<div className="md:hidden block mb-4">
			<div className="flex items-start justify-start">
				<h2 className="text-2xl text-left font-bold text-neutral-700 dark:text-neutral-300">{title}</h2>
				{supportsClipboard && <CopyClipboardMobile title={title} />}
			</div>
			{children}
		</div>
	);
};

const CopyClipboard = ({ hover, title }: { hover: boolean; title: string }) => {
	const [copied, setCopied] = useState(false);
	return (
		<>
			<Button
				className={cn(
					'size-4.5 rounded-full border border-neutral-300 dark:border-neutral-700 ',
					(hover || copied) && 'size-7 rounded-md'
				)}
				onClick={() => {
					navigator.clipboard.writeText(`${window.location.origin}/projects#${slug(title)}`);
					setCopied(true);
					setTimeout(() => {
						setCopied(false);
					}, CopyClipboardMessageDelay);
				}}
				size="icon"
				title="Copy link to this project"
				variant="secondary"
			>
				<Link2
					className={cn(
						'opacity-0 transition duration-200',
						(hover || copied) && 'opacity-100',
						copied && 'opacity-50 -rotate-5'
					)}
				/>
			</Button>

			{copied && (
				<div className="relative">
					<div className="absolute w-max text-sm -rotate-5 -translate-x-12 -translate-y-12">
						<Highlighter action="underline" color="#FF9800" padding={-8}>
							Link copied!
						</Highlighter>
					</div>
				</div>
			)}
		</>
	);
};

const CopyClipboardMobile = ({ title }: { title: string }) => {
	const [copied, setCopied] = useState(false);
	return (
		<Button
			className="size-8 mt-0.25 ml-1"
			onClick={async () => {
				await navigator.clipboard.writeText(`${window.location.origin}/projects#${slug(title)}`);
				setCopied(true);
				setTimeout(() => {
					setCopied(false);
				}, CopyClipboardMessageDelay);
			}}
			title="Copy link to this project"
			variant={copied ? 'headless' : 'ghost'}
		>
			{copied && (
				<div className="w-6 h-4">
					<div className="absolute text-sx -rotate-5 -translate-x-12 -translate-y-8">
						<Highlighter action="underline" color="#FF9800" padding={-8}>
							Link copied!
						</Highlighter>
					</div>
				</div>
			)}
			<Link2 className={cn('transition duration-200', copied && '-translate-x-1  opacity-50 -rotate-5')} />
		</Button>
	);
};

const ItemMetadata = ({ item }: { item: ProjectSchema }) => {
	const startDate = parseISO(item.date.start);

	const dateInfo = () => {
		if (!item.date.end) return `${format(startDate, 'yyyy')} +`;
		const endDate = parseISO(item.date.end);
		if (isSameYear(startDate, endDate)) return format(startDate, 'yyyy');
		return `${format(startDate, 'yyyy')} - ${format(endDate, 'yyyy')}`;
	};

	return (
		<>
			{item.subTitle && (
				<h3 className="text-xl font-bold text-neutral-500 dark:text-neutral-500 text-balance">
					{item.subTitle}
				</h3>
			)}

			<p className="text-sm md:text-md text-neutral-500 dark:text-neutral-500 ">
				{item.place && <span>{item.place} | </span>}
				<span>{dateInfo()}</span>
			</p>

			{item.tags && (
				<div className="flex flex-col items-center gap-2">
					<div className="flex w-full flex-wrap gap-2">
						{item.tags.map((tag) => (
							<Badge
								key={tag}
								className="border border-neutral-300 dark:border-neutral-700 cursor-default"
								variant="secondary"
							>
								{tag}
							</Badge>
						))}
					</div>
				</div>
			)}

			{item.extra && (
				<div className="flex flex-col gap-2 mt-2">
					{item.extra.map((Extra, index) => (
						// biome-ignore lint/suspicious/noArrayIndexKey: no need to control the key for dynamic content
						<div key={index}>{Extra}</div>
					))}
				</div>
			)}
		</>
	);
};
