import React from 'react'
import * as Icons from 'lucide-react'

interface IconProps {
  name: keyof typeof Icons
  size?: number
  color?: string
}

export const Icon = ({
  name,
  size = 18,
  color = "var(--neutral-50)",
}: IconProps) => {

  const IconComponent = Icons[name] as React.ElementType

  if (!IconComponent) {
    console.log(`Icon ${name} not found`)
    return null
  }

  return <IconComponent size={size} color={color} />
}
