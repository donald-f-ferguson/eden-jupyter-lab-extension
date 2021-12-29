import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

/**
 * Initialization data for the first-extension extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'first-extension:plugin',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension first-extension is activated!');
  }
};

export default plugin;
