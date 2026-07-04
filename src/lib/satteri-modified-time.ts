import { statSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { defineMdastPlugin } from 'satteri';
import type { MdastVisitorContext } from 'satteri';

interface AstroPluginData {
	frontmatter: Record<string, unknown>;
}

function applyLastModified(ctx: MdastVisitorContext): void {
	const fileURL = ctx.fileURL;
	if (!fileURL) return;

	const astro = ctx.data.astro as AstroPluginData | undefined;
	if (!astro) return;

	const { mtime } = statSync(fileURLToPath(fileURL));
	astro.frontmatter.lastModified = mtime.toISOString();
}

export function satteriModifiedTime() {
	return () => {
		let applied = false;

		const applyOnce = (ctx: MdastVisitorContext) => {
			if (applied) return;
			applied = true;
			applyLastModified(ctx);
		};

		return defineMdastPlugin({
			name: 'satteri-modified-time',
			yaml(_node, ctx) {
				applyOnce(ctx);
			},
			toml(_node, ctx) {
				applyOnce(ctx);
			},
			heading(_node, ctx) {
				applyOnce(ctx);
			},
			paragraph(_node, ctx) {
				applyOnce(ctx);
			},
		});
	};
}
