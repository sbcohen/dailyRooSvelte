import '@babel/polyfill';
import App from './App.svelte';

const app = new App({
  target: document.getElementById('app'),
  props: {
    name: 'Stefanie'
  }
});
