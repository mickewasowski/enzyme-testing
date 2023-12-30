import React from "react";
import { shallow } from "enzyme";
import CounterButton from './CounterButton';

it('expect to render CounterButton component', () => {
  const mockColor = 'cyan';
  expect(shallow(<CounterButton color={mockColor} />)).toMatchSnapshot();
});

it('correctly updates the counter', () => {
  const mockColor = 'cyan';
  const wrapper = shallow(<CounterButton color={mockColor} />);

  wrapper.find('[id="counter"]').simulate('click');
  expect(wrapper.state()).toEqual({ count: 1 });
  expect(wrapper.props().color).toEqual('cyan');
});

