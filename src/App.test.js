import React from 'react';
import { mount } from 'enzyme';
import fetchMock from 'fetch-mock';
import App from './App';

describe('Full render test', () => {
  let app;
  jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;

  afterEach(() => app.unmount());

  it('renders without crashing', async () => {
    app = mount(<App />);
    await fetchMock.flush();
    await new Promise(r => setTimeout(r, 0));
    expect(app.text()).toBe('Hello world');
  });
});
