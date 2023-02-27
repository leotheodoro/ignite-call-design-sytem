import type { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@igniteui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis aliquid, blanditiis quia quaerat eum provident officia magnam maiores temporibus iure autem at optio aut, dolor pariatur maxime nihil laboriosam placeat?',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong Text',
    as: 'strong',
  },
}
