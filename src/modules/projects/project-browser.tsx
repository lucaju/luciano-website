import { useEffect, useMemo, useState } from 'react';
import { Empty, EmptyDescription, EmptyHeader, EmptyTitle } from '@/components/ui/empty';
import { projectMatchesYear, projectYears } from '@/modules/projects/project-model';
import { showcaseProjects } from '@/modules/projects/showcase-projects';
import { Timeline } from '@/modules/projects/timeline';

interface Filters {
	tag: string;
	year: string;
}

function readFilters(): Filters {
	const params = new URLSearchParams(window.location.search);
	return { tag: params.get('tag') ?? '', year: params.get('year') ?? '' };
}

function writeFilters(filters: Filters) {
	const params = new URLSearchParams();
	if (filters.tag) params.set('tag', filters.tag);
	if (filters.year) params.set('year', filters.year);
	const query = params.toString();
	const url = query ? `${window.location.pathname}?${query}` : window.location.pathname;
	window.history.pushState(null, '', url);
}

export function ProjectBrowser() {
	const [filters, setFilters] = useState<Filters | null>(null);
	const tag = filters?.tag ?? '';
	const year = filters?.year ?? '';

	useEffect(() => {
		const sync = () => setFilters(readFilters());
		sync();
		window.addEventListener('popstate', sync);
		return () => window.removeEventListener('popstate', sync);
	}, []);

	const tags = useMemo(() => {
		const values = new Set<string>();
		for (const project of showcaseProjects) {
			for (const projectTag of project.tags ?? []) values.add(projectTag);
		}
		return [...values].sort((a, b) => a.localeCompare(b));
	}, []);

	const years = useMemo(() => {
		const values = new Set<number>();
		for (const project of showcaseProjects) {
			for (const projectYear of projectYears(project.date)) values.add(projectYear);
		}
		return [...values].sort((a, b) => b - a);
	}, []);

	const filtered = useMemo(() => {
		return showcaseProjects.filter((project) => {
			if (tag && !(project.tags ?? []).includes(tag)) return false;
			if (year && !projectMatchesYear(project.date, Number(year))) return false;
			return true;
		});
	}, [tag, year]);

	const update = (next: Filters) => {
		writeFilters(next);
		setFilters(next);
	};

	return (
		<div>
			<form className="mb-8 flex flex-wrap gap-4" onSubmit={(event) => event.preventDefault()}>
				<label className="flex flex-col gap-1 text-sm font-medium">
					Tag
					<select
						className="h-10 rounded-md border bg-background px-3"
						onChange={(event) => update({ tag: event.target.value, year })}
						value={tag}
					>
						<option value="">All tags</option>
						{tags.map((option) => (
							<option key={option} value={option}>
								{option}
							</option>
						))}
					</select>
				</label>
				<label className="flex flex-col gap-1 text-sm font-medium">
					Year
					<select
						className="h-10 rounded-md border bg-background px-3"
						onChange={(event) => update({ tag, year: event.target.value })}
						value={year}
					>
						<option value="">All years</option>
						{years.map((option) => (
							<option key={option} value={option}>
								{option}
							</option>
						))}
					</select>
				</label>
			</form>
			{filters && filtered.length === 0 ? (
				<Empty>
					<EmptyHeader>
						<EmptyTitle>No projects match</EmptyTitle>
						<EmptyDescription>Try another tag or year.</EmptyDescription>
					</EmptyHeader>
				</Empty>
			) : (
				<Timeline data={filtered} />
			)}
		</div>
	);
}
