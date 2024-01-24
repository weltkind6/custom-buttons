import type { Meta, StoryObj } from '@storybook/react';
import Button from "../components/Button/Button";
import '../styles/global.css';


const meta: Meta<typeof Button> = {
    component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    name: 'Primary',
    render: () => <Button
        color='primary'
        children='primary'
        size="S"
    />
};


export const Secondary: Story = {
    name: 'Secondary',
    render: () => <Button
        color='secondary'
        children='secondary'
        size="M"
    />
};

export const Success: Story = {
    name: 'Success',
    render: () => <Button
        color='success'
        children='success'
        size="L"
    />
};

export const Danger: Story = {
    name: 'Danger',
    render: () => <Button
        color='danger'
        children='danger'
    />
};


