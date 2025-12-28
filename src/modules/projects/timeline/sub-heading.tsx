import { cn } from '@/lib/utils'
import type { ComponentPropsWithoutRef } from 'react'

export function SubHeading(props: ComponentPropsWithoutRef<'h4'>) {
	return (
		<h4
			{...props}
			className={cn(
				'text-lg sm:text-xl text-balance lg:text-2xl font-semibold pb-1 pt-2',
				props.className,
			)}
		/>
	)
}
