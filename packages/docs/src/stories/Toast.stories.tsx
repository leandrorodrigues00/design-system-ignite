import type { Meta, StoryObj } from '@storybook/react'
import { Button, Toast, ToastProps } from '@ignis-design-system/react'
import { useEffect, useRef, useState } from 'react'

const ExposedToast = (props: ToastProps) => {
  const [open, setOpen] = useState(false)

  const timerRef = useRef(0)

  useEffect(() => {
    return () => clearTimeout(timerRef.current)
  }, [])

  return (
    <>
      <Button
        onClick={() => {
          setOpen(false)
          window.clearTimeout(timerRef.current)
          timerRef.current = window.setTimeout(() => {
            setOpen(true)
          }, 100)
        }}
      >
        Schedule
      </Button>

      <Toast open={open} onOpenChange={setOpen} {...props} />
    </>
  )
}
export default {
  title: 'Feedback/Toast',
  component: ExposedToast,
  args: {
    text: 'Wednesday, October 23 at 4pm',
    title: 'Scheduling done',
  },
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}

export const millisecondsToAutoClose: StoryObj<ToastProps> = {
  args: {
    duration: 1000,
  },
}
