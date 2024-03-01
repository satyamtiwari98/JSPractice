export const menuItems = [
  {
    label: "Item 1",
    children: [
      { label: "Sub Item 1.1" },
      { label: "Sub Item 1.2" },
      { label: "Sub Item 1.3" },
    ],
  },
  {
    label: "Item 2",
    children: [
      { label: "Sub Item 2.1" },
      {
        label: "Sub Item 2.2",
        children: [
          { label: "Sub Sub Item 2.2.1" },
          { label: "Sub Sub Item 2.2.2" },
        ],
      },
      { label: "Sub Item 2.3" },
    ],
  },
];
