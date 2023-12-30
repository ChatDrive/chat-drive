import { createApp } from 'vue';
import { setupAssets } from './plugins';
import './style.css';
import App from './App.vue';

async function setupApp() {
  // import assets: js、css
  setupAssets();

  const app = createApp(App);

  app.mount('#app');
}

setupApp();
