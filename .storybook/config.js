import { configure, setAddon } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';
import { setDefaults } from '@storybook/addon-info';

setOptions({
  name: 'React-Pose Act',
  url: 'https://www.npmjs.com/package/react-pose-act',
  goFullScreen: false,
  showLeftPanel: true,
  showDownPanel: true,
  showSearchBox: false,
  downPanelInRight: false,
  sortStoriesByKind: true,
});
// addon-info
setDefaults({
  inline: true,
  header:false,
  source:false
});
const req = require.context('../src', true, /.stories.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
