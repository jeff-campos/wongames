import { Story, Meta } from '@storybook/react/types-6-0'
import Heading, { HeadingProps } from '.'

export default {
  title: 'Heading',
  component: Heading,
  argTypes: {
    children: {
      type: 'string'
    },
    color: {
      control: {
        type: 'select',
        options: ['white', 'black']
      }
    },
    lineColor: {
      control: {
        type: 'select',
        options: ['primary', 'secondary']
      }
    },
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium']
      }
    }
  }
} as Meta

export const Default: Story<HeadingProps> = (args) => <Heading {...args} />

Default.args = {
  children: 'Most Populars',
  color: 'black'
}
