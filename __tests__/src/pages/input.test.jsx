import { render, screen } from "@testing-library/react";
import { shallow } from 'enzyme';

import StyledInput from "../../../src/components/atoms/Input/input";
import "@testing-library/jest-dom";


describe("StyledInput", () => {
  it("renders input components", () => {
    const { container } = render(<StyledInput />);
    console.log(container, 'componentmmm')
    expect(container).toMatchSnapshot();
  });
});
