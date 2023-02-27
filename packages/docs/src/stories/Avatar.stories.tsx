import type { StoryObj, Meta } from '@storybook/react'
import { Avatar, AvatarProps } from '@igniteui/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/leotheodoro.png',
    alt: 'Leonardo Theodoro',
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
    alt: '',
  },
}
