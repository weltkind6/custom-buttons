import type { Meta, StoryObj } from '@storybook/react';
import Button from "../components/Button/Button";
import '../styles/global.css';


const meta: Meta<typeof Button> = {
    component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {
        color: 'primary',
        children: 'Button'
    },
};






