import * as ToastComponent from '@radix-ui/react-toast'

import { X } from 'phosphor-react'
import { ComponentProps } from 'react'
import {
  ToastClose,
  ToastDescription,
  ToastHeader,
  ToastRoot,
  ToastTitle,
  ToastViewPort,
} from './styles'

export interface ToastProps extends ComponentProps<typeof ToastRoot> {
  title?: string
  text?: string
}

export function Toast({ title, text, ...props }: ToastProps) {
  return (
    <ToastComponent.Provider>
      <ToastRoot {...props}>
        <ToastHeader>
          <ToastTitle>{title}</ToastTitle>
          <ToastClose asChild>
            <X width={20} height={20} />
          </ToastClose>
        </ToastHeader>
        <ToastDescription>{text}</ToastDescription>
      </ToastRoot>

      <ToastViewPort />
    </ToastComponent.Provider>
  )
}

Toast.displayName = 'Toast'
