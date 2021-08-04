import { Story, Meta } from '@storybook/react/types-6-0'
import Checkbox, { CheckboxProps } from '.'

export default {
  title: 'Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark'
    }
  },
  argTypes: {
    onCheck: { action: 'checked' }
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
