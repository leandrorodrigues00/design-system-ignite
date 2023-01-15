import type { Meta, StoryObj } from '@storybook/react'
import { Tooltip, TooltipProps } from '@ignis-design-system/react'

export default {
  title: 'Overlay/Tooltip',
  component: Tooltip,

  args: {
    text: 'October 26 - Available',
    side: 'bottom',
    sideOffset: 5,
  },

  argTypes: {
    side: {
      options: ['top', 'right', 'bottom', 'left'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}

export const ActiveStatus: StoryObj<TooltipProps> = {
  args: {
    isOpen: true,
  },
}
