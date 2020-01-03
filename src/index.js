import App from './components/App.svelte';

const app = new App({
  target: document.querySelector('main'),
  props: {
    name: 'World'
  }
});

export default app;