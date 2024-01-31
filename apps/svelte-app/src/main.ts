// import './app/app.element';

import App from './app/App.svelte';

const app = new App({
    target: document.body,
    props: {
      name: 'Nx with Svelte',
    },
  });
// const app = new App({
//   target: document.getElementById('app'),
// });

export default app;