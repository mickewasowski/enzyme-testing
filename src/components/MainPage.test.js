import React from 'react';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';
import MainPage from './MainPage';

let wrapper;

beforeEach(() => {
  const mockProps = {
    onRequestRobots: jest.fn(),
    robots: [],
    searchField: '',
    isPending: false
  }
  wrapper = shallow(<MainPage {...mockProps}/>)
 })

it('renders without crashing', () => {
  expect(wrapper).toMatchSnapshot();
});

it('fileters Robots', () => {
  const mockProps = {
    onRequestRobots: jest.fn(),
    robots: [],
    searchField: 'a',
    isPending: false
  }
  wrapper = shallow(<MainPage {...mockProps}/>)
  expect(wrapper.instance().filterRobots()).toEqual([]);
});

it('fileters Robots correctly 2', () => {
  const filteredRobots2 = [{
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz'
  }]
  const mockProps2 = {
    onRequestRobots: jest.fn(),
    robots: [{
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz'
    }],
    searchField: 'Leanne',
    isPending: false
  }
  wrapper = shallow(<MainPage {...mockProps2}/>)
  expect(wrapper.instance().filterRobots()).toEqual(filteredRobots2);
});

it('fileters Robots correctly 3', () => {
  const filteredRobots3 = [{
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz'
  }]
  const mockProps3 = {
    onRequestRobots: jest.fn(),
    robots: [{
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz'
    }],
    searchField: 'Xavier',
    isPending: false
  }
  wrapper = shallow(<MainPage {...mockProps3}/>)
  expect(wrapper.instance().filterRobots()).toEqual([]);
});
