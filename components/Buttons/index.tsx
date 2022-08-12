type Props = { text: string; href: string; size?: 'normal' | 'small' }

const sizes = { normal: 'py-3', small: 'py-2' }

export function Tertiary({ text, href, size = 'normal' }: Props) {
  return (
    <a
      href={href}
      className={`bg-white font-bold text-neutral-800 rounded-md px-6 ring-neutral-800 ring-1 focus:ring-2 focus:outline-none ${sizes[size]}`}
    >
      {text}
    </a>
  )
}

export function Secondary({ text, href, size = 'normal' }: Props) {
  return (
    <a
      href={href}
      className={`bg-white font-bold text-wild-strawberry rounded-md px-6 ring-wild-strawberry ring-1 focus:ring-2 focus:outline-none ${sizes[size]}`}
    >
      {text}
    </a>
  )
}

export function Primary({ text, href, size = 'normal' }: Props) {
  return (
    <a
      href={href}
      className={`text-white bg-hero rounded-md px-6 border border-hero ${sizes[size]}`}
    >
      {text}
    </a>
  )
}