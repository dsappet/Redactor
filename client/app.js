// vendor stuff
import angular from 'angular';
import uirouter from '@uirouter/angularjs';

// config stuff
import appConfig from './app.config';
import routing from './routes';

// components
import main from './components/main/main.component';
//import regexRedactor from './components/regexRedactor/regexRedactor.component';

//services
import indexRedactorService from './services/redactorServices/indexRedactorService';
import keyPhraseService from './services/keyPhrasesService/keyPhraseService';
import sampleTextService from './services/dataServices/sampleTextService';

// styles
import './app.css';

const MODULE_NAME = 'app';

angular
  .module(MODULE_NAME, [uirouter])
  .config(appConfig)
  .config(routing) // just need the one route config
  .component('main', main)
  //  .component('regexRedactor', regexRedactor)
  .service('indexRedactorService', indexRedactorService)
  .service('keyPhraseService', keyPhraseService)
  .service('sampleTextService', sampleTextService);

export default MODULE_NAME;
