import { JSDOM } from 'jsdom';

const jsdom = new JSDOM();
global.window = jsdom.window;
global.document = window.document;
global.navigator = window.navigator;
