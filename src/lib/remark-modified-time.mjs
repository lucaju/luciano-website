import { statSync } from 'node:fs';

export const remarkModifiedTime = () => {
	return (_tree, file) => {
		const filepath = file.history[0];
		const result = statSync(filepath);
		file.data.astro.frontmatter.lastModified = result.mtime.toISOString();
	};
};
