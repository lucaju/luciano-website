import type { ComponentPropsWithoutRef } from 'react';
import { cn } from '@/lib/utils';

export function Text(props: ComponentPropsWithoutRef<'p'>) {
	return <p {...props} className={cn('text-sm lg:text-base text-muted-foreground text-pretty', props.className)} />;
}
