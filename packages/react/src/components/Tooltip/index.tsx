import * as TooltipComponent from '@radix-ui/react-tooltip'
import { ComponentProps } from 'react'

import {
  TooltipArrow,
  TooltipContainer,
  TooltipContent,
  TooltipText,
} from './styles'

export interface TooltipProps
  extends ComponentProps<typeof TooltipComponent.Provider> {
  text: string
  isOpen?: boolean
  side: 'top' | 'right' | 'bottom' | 'left'
  sideOffset: number
}

export function Tooltip({ text, isOpen, side, sideOffset }: TooltipProps) {
  return (
    <TooltipContainer>
      <TooltipComponent.Provider>
        <TooltipComponent.Root open={isOpen}>
          <TooltipComponent.Trigger asChild>
            <TooltipText>
              A popup that displays information related to an element when the
              element receives keyboard focus or the mouse hovers over it.
            </TooltipText>
          </TooltipComponent.Trigger>

          <TooltipContent side={side} sideOffset={sideOffset}>
            {text}
            <TooltipArrow width={16} height={8} />
          </TooltipContent>
        </TooltipComponent.Root>
      </TooltipComponent.Provider>
    </TooltipContainer>
  )
}

Tooltip.displayName = 'Tooltip'
