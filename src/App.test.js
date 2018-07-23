import React from 'react';
import { mount } from 'enzyme';
import fetchMock from 'fetch-mock';
import App from './App';

it('renders without crashing', async () => {
  fetchMock.get('*', { message: 'Hello world' });
  const wrapper = mount(<App />);
  await new Promise(r => setTimeout(r, 0));
  await fetchMock.flush();
  wrapper.update();
  expect(wrapper.text()).toBe('Hello world')
});
