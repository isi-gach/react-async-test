import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';
import fetchMock from 'fetch-mock';
import fetch from 'node-fetch';

fetchMock.get('*', fetch);

configure({ adapter: new Adapter() });
