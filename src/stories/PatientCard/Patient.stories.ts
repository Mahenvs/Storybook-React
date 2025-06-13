import { StoryObj } from "@storybook/react";

import PatientCard from "./Patient";

const meta = {
  title: "Components/Patient Card",
  component: PatientCard,
  tags: ["autodocs"],
  argTypes: {
    status: {
      control: "Select",
      options: ["active", "New Patient", "deceased"],
    },
    gender: {
      control: "Select",
      options: ["Male", "Female", "Other"],
    },
  },
};
export default meta;
type Story = StoryObj<typeof PatientCard>;
export const NewPatient: Story = {
  args: {
    name: "Shyam",
    age: 25,
    status: "New Patient",
    gender: "Male",
    lastVisitDate: new Date(),
  },
};

export const Deceased: Story = {
  args: {
    name: "Kareena",
    age: 72,
    gender: "Female",
    status: "Deceased",
    lastVisitDate: new Date("2023-05-12"),
  },
};

export const Active: Story = {
  args: {
    name: "Smith",
    age: 45,
    gender: "Male",
    status: "Active",
    lastVisitDate: new Date("2020-05-12"),
  },
};
