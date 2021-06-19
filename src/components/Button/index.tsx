import React from 'react'
import * as S from './styles'

export type ButtonProps = {
  children?: React.ReactNode
  icon?: React.ReactNode
  fullWidth?: boolean
  size?: 'small' | 'medium' | 'large'
  onClick?: () => (event: React.MouseEvent<HTMLButtonElement>) => void
}

const Button = ({
  children,
  size = 'medium',
  fullWidth = false,
  icon,
  ...rest
}: ButtonProps) => (
  <S.Wrapper size={size} fullWidth={fullWidth} hasIcon={!!icon} {...rest}>
    {!!icon && icon}
    {!!children && <span>{children}</span>}
  </S.Wrapper>
)

export default Button
