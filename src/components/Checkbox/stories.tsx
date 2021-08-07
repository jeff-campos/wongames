import { Story, Meta } from '@storybook/react/types-6-0'
import Checkbox, { CheckboxProps } from '.'

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'fullscreen'
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

export const Default: Story<CheckboxProps> = (args) => (
  <>
    <div style={{ padding: 10 }}>
      <Checkbox
        {...args}
        name="category"
        label="Action"
        labelFor="action"
        isChecked
      />
    </div>
    <div style={{ padding: 10 }}>
      <Checkbox
        {...args}
        name="category"
        label="Adventure"
        labelFor="adventure"
      />
    </div>
    <div style={{ padding: 10 }}>
      <Checkbox
        {...args}
        name="category"
        label="Strategy"
        labelFor="strategy"
      />
    </div>
  </>
)
