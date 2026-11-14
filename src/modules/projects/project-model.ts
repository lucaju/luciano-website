import { compareAsc, format, isSameYear, parseISO } from 'date-fns';
import slug from 'slug';

export interface ProjectDateRange {
	start: string;
	end?: string;
}

const OPEN_ENDED = new Date('2999-12-31');

export function projectSlug(title: string) {
	return slug(title);
}

export function assignProjectSlugs<T extends { title: string }>(projects: readonly T[]): Array<T & { slug: string }> {
	const seen = new Map<string, string>();

	return projects.map((project) => {
		const nextSlug = projectSlug(project.title);
		const previousTitle = seen.get(nextSlug);
		if (previousTitle) {
			throw new Error(`Duplicate project slug "${nextSlug}" for "${project.title}" and "${previousTitle}"`);
		}
		seen.set(nextSlug, project.title);
		return { ...project, slug: nextSlug };
	});
}

export function sortProjects<T extends { date: ProjectDateRange }>(projects: readonly T[]): T[] {
	return projects.toSorted((a, b) => {
		const endA = a.date.end ? parseISO(a.date.end) : OPEN_ENDED;
		const endB = b.date.end ? parseISO(b.date.end) : OPEN_ENDED;
		const byEnd = compareAsc(endB, endA);
		if (byEnd !== 0) return byEnd;
		return compareAsc(parseISO(b.date.start), parseISO(a.date.start));
	});
}

export function formatProjectYears(date: ProjectDateRange) {
	const startDate = parseISO(date.start);
	if (!date.end) return `${format(startDate, 'yyyy')} +`;
	const endDate = parseISO(date.end);
	if (isSameYear(startDate, endDate)) return format(startDate, 'yyyy');
	return `${format(startDate, 'yyyy')} - ${format(endDate, 'yyyy')}`;
}

export function projectMatchesYear(date: ProjectDateRange, year: number, today = new Date()) {
	const start = Number(date.start.slice(0, 4));
	const end = date.end ? Number(date.end.slice(0, 4)) : today.getFullYear();
	return year >= start && year <= end;
}

export function projectYears(date: ProjectDateRange, today = new Date()) {
	const start = Number(date.start.slice(0, 4));
	const end = date.end ? Number(date.end.slice(0, 4)) : today.getFullYear();
	const years: number[] = [];
	for (let value = start; value <= end; value += 1) years.push(value);
	return years;
}

export function projectMetaDescription(project: {
	title: string;
	place?: string;
	date: ProjectDateRange;
	tags?: string[];
}) {
	const place = project.place ? ` at ${project.place}` : '';
	const tags = project.tags?.length ? ` Tags: ${project.tags.join(', ')}.` : '';
	return `${project.title}${place}, ${formatProjectYears(project.date)}.${tags}`;
}
