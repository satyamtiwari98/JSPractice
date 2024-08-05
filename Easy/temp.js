import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter as Router } from "react-router-dom";
import { TreeView } from "./Treeview";

const mockNode = {
  table_list: [
    {
      business_group: {
        business_group_name: "Group 1",
        applist: [
          {
            app_name: "App 1",
            table_names: ["Table 1", "Table 2"],
          },
        ],
      },
    },
  ],
};

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
  useParams: () => ({ menuid: "Group 1" }),
}));

describe("TreeView Component", () => {
  it("renders without crashing", () => {
    render(
      <Router>
        <TreeView node={mockNode} isCollapsed={false} />
      </Router>
    );
    expect(screen.getByTestId("main")).toBeInTheDocument();
  });

  it("renders the dropdown with correct options", () => {
    render(
      <Router>
        <TreeView node={mockNode} isCollapsed={false} />
      </Router>
    );
    const dropdown = screen.getByTestId("dropdowns");
    expect(dropdown).toHaveTextContent("Group 1");
  });

  it("changes selected business group on dropdown change", () => {
    render(
      <Router>
        <TreeView node={mockNode} isCollapsed={false} />
      </Router>
    );
    const dropdown = screen.getByTestId("dropdowns");
    fireEvent.change(dropdown, { target: { value: "Group 1" } });
    expect(dropdown).toHaveTextContent("Group 1");
  });

  it("navigates to correct path on table click", () => {
    const mockNavigate = jest.fn();
    jest.mock("react-router-dom", () => ({
      ...jest.requireActual("react-router-dom"),
      useNavigate: () => mockNavigate,
    }));

    render(
      <Router>
        <TreeView node={mockNode} isCollapsed={false} />
      </Router>
    );

    const table = screen.getByText("Table 1");
    fireEvent.click(table);
    expect(mockNavigate).toHaveBeenCalledWith(
      "/tablemanage/table/Group 1/App 1/Table 1"
    );
  });

  it("renders collapsed view when isCollapsed is true", () => {
    render(
      <Router>
        <TreeView node={mockNode} isCollapsed={true} />
      </Router>
    );

    const collapsedContent = screen.getByText("Group 1");
    expect(collapsedContent).toBeInTheDocument();
  });
});
