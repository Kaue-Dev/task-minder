import { ComponentProps } from "react"

interface LabelProps extends ComponentProps<'label'> {
  children: React.ReactNode
}

export const Label = ({ children, ...props }: LabelProps) => {
  return (
    <label {...props}>
      {children}
    </label>
  )
}