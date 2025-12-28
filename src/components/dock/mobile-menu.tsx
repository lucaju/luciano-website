import { Button } from '@/components/ui/button'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Menu } from 'lucide-react'
import React from 'react'
import { NAVIGATIONS } from '../navigations'
import { AnimatedThemeToggler } from './animated-theme-toggler'

export const MobileMenu = () => {
	const [dropdownOpen, setDropdownOpen] = React.useState(false)
	return (
		<DropdownMenu open={dropdownOpen} onOpenChange={setDropdownOpen}>
			<DropdownMenuTrigger asChild onClick={() => setDropdownOpen((val) => !val)}>
				<Button variant='ghost' size='icon'>
					<Menu className='h-4 w-4' />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align='end'>
				{NAVIGATIONS.map((item) => (
					<DropdownMenuItem key={item.pathname} asChild role='link' className='h-12 w-32'>
						<a href={item.pathname}>
							<item.icon className='size-4' />
							{item.label}
						</a>
					</DropdownMenuItem>
				))}
				<DropdownMenuSeparator />
				<DropdownMenuItem className='px-0'>
					<AnimatedThemeToggler className='w-32 h-7 cursor-pointer justify-start' showLabel />
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
