import angular from 'angular';

// The accepted convention previous to using ES6 syntax was that all services were factories
// This is no longer practical with ES6 as classes map to angularjs services so use them! (sorry factories)

export default class regexRedactorService{
    constructor(){

    }

    exposedMethod(){
        return `I'm awake`;
    }
}