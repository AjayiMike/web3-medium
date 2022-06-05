import { FC, useMemo } from 'react'
import Image from 'next/image'

interface Props {
    uri: string | null,
    handle: string
    size?: number
}

const Avatar: FC<Props> = ({ uri, handle, size }) => {

	const avatarUrl = useMemo(() => {
		if (!uri) return `https://avatar.tobi.sh/${handle}.png`
		return uri
	}, [uri, handle])

	return (
		<div className="relative">
			<div className="absolute inset-0 w-10 h-10 rounded-full bg-white/60 animate-pulse" />
			<Image src={avatarUrl} alt={`handle lens avatar`} width={ size ?? 60} height={ size ?? 60} className="rounded-full" />
		</div>
	)
}

export default Avatar
