import * as Tooltip from '@radix-ui/react-tooltip'

import { styled } from '../../styles'

export const TooltipContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '$20',
})

export const TooltipText = styled('p', {
  fontFamily: '$default',
  fontWeight: '$regular',
  fontSize: '$md',
  color: '$white',
  lineHeight: '$base',
})

export const TooltipContent = styled(Tooltip.Content, {
  borderRadius: '5px',
  padding: '$3 $4',
  backgroundColor: '$gray900',

  color: '$gray100',

  fontFamily: 'Inter',

  fontWeight: 500,
  fontSize: '$sm',
  lineHeight: '$short',

  textAlign: 'center',
  letterSpacing: '-0.09px',
})

export const TooltipArrow = styled(Tooltip.Arrow, {
  fill: '$gray900',
  marginTop: '-1px',
})
