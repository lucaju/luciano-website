import { FileText, Home, Laptop, PenSquare } from 'lucide-react';

export const NAVIGATIONS = [
	{ label: 'Home', pathname: '/', icon: Home },
	{ label: 'Projects', pathname: '/projects', icon: Laptop },
	{ label: 'Blog', pathname: '/blog', icon: PenSquare },
	{ label: 'CV', pathname: '/cv', icon: FileText },
];

export const SOCIALS = [
	{ label: 'LinkedIn', pathname: 'https://www.linkedin.com/in/lucianofrizzera/' },
	{ label: 'ORCID', pathname: 'https://orcid.org/0000-0001-7244-4178' },
	{ label: 'Lattes', pathname: 'https://lattes.cnpq.br/9750577302387968' },
];

export const REPOS = [
	{ label: 'GitHub', pathname: 'https://github.com/lucaju' },
	{ label: 'GitLab', pathname: 'https://gitlab.com/lucaju' },
];
