import { showcaseProjects } from '@/modules/projects/showcase-projects';
import { Timeline } from '@/modules/projects/timeline';

export function ProjectPage({ slug }: { slug: string }) {
	const project = showcaseProjects.find((item) => item.slug === slug);
	if (!project) return null;
	return <Timeline data={[project]} linkTitles={false} />;
}
