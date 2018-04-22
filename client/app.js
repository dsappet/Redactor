// vendor stuff
import angular from 'angular';
import uirouter from '@uirouter/angularjs';

// config stuff
import appConfig from './app.config';
import routing from './routes';

// components
import main from './components/main/main.component';
import regexRedactor from './components/regexRedactor/regexRedactor.component';

//services
import replaceRedactorService from './services/replaceRedactorService/replaceRedactorService';

// styles
import './app.css';

let app = () => {
    return {
        template: require('./app.html'), // oh look we can use require because of webpack ... cool
        controller: 'AppCtrl',
        controllerAs: 'app'
    }
};

class AppCtrl {
    constructor() {
        this.title = 'meh';
    }
}

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [uirouter])
    .config(appConfig)
    .config(routing) // just need the one route config
    .directive('app', app) // dummy
    .controller('AppCtrl', AppCtrl) // dummy
    .component('main', main)
    .component('regexRedactor', regexRedactor)
    .service('replaceRedactorService', replaceRedactorService)
;

export default MODULE_NAME;