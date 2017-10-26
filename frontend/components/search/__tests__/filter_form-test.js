import React from 'react';
import FilterForm from '../filter_form';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';


const setup = () => {
  const props = {
    minSeating: 2,
    maxSeating: 5,
    updateFilter: jest.fn(),
  };

  const filterFormWrapper = shallow(<FilterForm {...props } />);

  return {
    filterFormWrapper,
    props,
  };
};

describe('FilterForm', () => {
  let minSeatFilter;
  const { filterFormWrapper, props } = setup();
  minSeatFilter = filterFormWrapper.find('input').first();

  test('minSeating filter defaults to the passed in props of minSeating', () => {
    // your code here
  });

  test('updates filter onChange', () => {
    // Your code here
  });

  test ('renders correctly', () => {
    // Snapshot testing here
  });
});
