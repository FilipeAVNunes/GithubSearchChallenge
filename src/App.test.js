import React from "react";
import { shallow } from "enzyme";

import Alert from "./components/layout/Alert";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import Search from "./components/users/search";

describe.only("<Footer />", () => {
  it("assert for className footer", () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.props().className).toEqual("borders footer");
  });
  it("assert for children footer", () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.props().children).toEqual("Developed by Filipe Nunes");
  });
});

describe.only("<Navbar />", () => {
  it("assert for className navbar", () => {
    const wrapper = shallow(<Navbar />);
    expect(wrapper.props().className).toEqual("borders navbar");
  });
  it("assert for children navbar", () => {
    const wrapper = shallow(<Navbar />);
    expect(wrapper.props().children).toEqual("Github Search");
  });
});

describe.only("<Alert />", () => {
  it("assert for alert message props", () => {
    const wrapper = shallow(
      <Alert alert={{ msg: "Please search for a user" }} />
    );
    expect(wrapper.props().children).toEqual("Please search for a user");
  });
});

describe.only("<Search />", () => {
  it("assert for search bar", () => {
    const wrapper = shallow(
      <Search setAlert={jest.fn()} searchUsers={jest.fn()} />
    );
    expect(wrapper.props().children.props.children[0].type).toEqual("input");
    expect(wrapper.props().children.props.children[1].type).toEqual("button");
    expect(wrapper.props().children.type).toEqual("form");
  });
});
