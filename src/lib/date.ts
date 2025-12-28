export function formatDate(date: string | Date | number) {
	try {
		const fmt = new Intl.DateTimeFormat('en-CA', {
			day: 'numeric',
			weekday: 'short',
			month: 'long',
			year: 'numeric',
		});

		return fmt.format(new Date(date));
		// biome-ignore lint/correctness/noUnusedVariables: in case error is needed
	} catch (error) {
		if (import.meta.env.DEV) {
			console.info('Invalid date value, or Intl.Config value');
		}
		return '-';
	}
}

export function dateToISO(date: string | Date | number) {
	try {
		return new Date(date).toISOString();
		// biome-ignore lint/correctness/noUnusedVariables: in case error is needed
	} catch (error) {
		if (import.meta.env.DEV) {
			console.info('Invalid date value');
		}
		return '-';
	}
}
