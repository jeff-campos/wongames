import { Story, Meta } from '@storybook/react/types-6-0'
import Radio, { RadioProps } from '.'

export default {
  title: 'Form/Radio',
  component: Radio,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark'
    }
  },
  args: {
    labelColor: 'black'
  },
  argTypes: {
    onCheck: { action: 'checked' },
    labelColor: {
      type: 'select',
      options: ['black', 'white']
    }
  }
} as Meta

export const Default: Story<RadioProps> = (args) => (
  <>
    <div style={{ padding: 10 }}>
      <Radio
        {...args}
        label="primeiro"
        labelFor="primeiro"
        id="primeiro"
        name="nome"
        value="primeiro"
        defaultChecked
      />
    </div>
    <div style={{ padding: 10 }}>
      <Radio
        {...args}
        label="segundo"
        labelFor="segundo"
        id="segundo"
        name="nome"
        value="segundo"
      />
    </div>
    <div style={{ padding: 10 }}>
      <Radio
        {...args}
        label="terceiro"
        labelFor="terceiro"
        id="terceiro"
        name="nome"
        value="terceiro"
      />
    </div>
  </>
)
