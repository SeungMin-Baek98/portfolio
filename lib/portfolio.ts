import { projects } from '@/data/projects';

export function getAllProjects() {
	return projects;
}

export function getFeaturedProjects() {
	return projects.filter(project => project.featured);
}

export function getProjectBySlug(slug: string) {
	return projects.find(project => project.slug === slug);
}

export function getProjectParams() {
	return projects.map(project => ({
		slug: project.slug
	}));
}
