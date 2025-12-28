import { LineShadowText } from '@/components/ui/line-shadow-text'

export function Delightful({ text }: { text: string }) {
	return <LineShadowText shadowColor='var(--color-orange-500)'>{text}</LineShadowText>
}
