import { ComponentProps } from "react"

import styles from "./ButtonStyles.module.scss"

interface PrimaryButtonProps extends ComponentProps<'button'> {
  children: React.ReactNode,
  fullWidth?: boolean
}

export const PrimaryButton = ({ 
  children,
  fullWidth = false, 
  ...props 
}: PrimaryButtonProps) => {
  return (
    <button {...props} className={`${styles.primaryButton} ${fullWidth && styles.primaryButtonFullWidth}`}>
      {children}
    </button>
  )
}
