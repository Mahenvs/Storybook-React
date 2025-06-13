import { Meta, StoryObj } from "@storybook/react";
import ClaimStatus from "./ClaimStatus";

const meta: Meta<typeof ClaimStatus> = {
  title: "Components/ClaimTimeline",
  component: ClaimStatus,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof ClaimStatus>;

export const Default: Story = {
  args: {
    statusList: [
      { status: "Submitted", date: "2024-06-01", flag: true },
      { status: "Under Review", date: "2024-06-03", flag: true },
      { status: "Approved", date: "2024-06-05", flag: true },
    ],
  },
};

export const WithRejected: Story = {
  args: {
    statusList: [
      { status: "Submitted", date: "2024-06-01", flag: true },
      { status: "Under Review", date: "2024-06-03", flag: true },
      { status: "NA", flag: false },
    ],
  },
};

export const SingleStatus: Story = {
  args: {
    statusList: [{ status: "Submitted", date: "2024-06-01", flag: true }],
  },
};

export const Horizontal: Story = {
  args: {
    direction: "horizontal",
    statusList: [
      { status: "Submitted", date: "2024-06-01", flag: true },
      { status: "Under Review", date: "2024-06-03", flag: true },
      { status: "Approved", date: "2024-06-05", flag: true },
    ],
  },
};

export const Vertical: Story = {
  args: {
    direction: "vertical",
    statusList: [
      { status: "Submitted", date: "2024-06-01", flag: true },
      { status: "Under Review", date: "2024-06-03", flag: true },
      { status: "Approved", date: "2024-06-05", flag: true },
    ],
  },
};
