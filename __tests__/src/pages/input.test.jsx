import { render, screen } from "@testing-library/react";

import StyledInput from "../../../src/components/atoms/Input/input";
import "@testing-library/jest-dom";

describe("StyledInput", () => {
  it("renders input components", () => {
    const { container } = render(<StyledInput />);
    expect(container).toMatchSnapshot();
  });
});
