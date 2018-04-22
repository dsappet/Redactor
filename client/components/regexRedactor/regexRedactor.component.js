import angular from 'angular';

export default {
    template: require('./regexRedactor.html'),

    bindings : {
        attrOne : '@', // fake example binding
        inputText: '<', // one way binding


    },
    controller: // regexRedactorController,
        class regexRedactorController {
            // I've seen a recommendation to inject like this when using components in ES6 style
            // some styles have this at the bottom but I prefer it at the top for readability
            static get $inject() {
                return ['$log','regexRedactorService']; // keep it alphabetical
            }
            constructor($log,regexRedactorService) {
                this.$log = $log;
                this.regexRedactorService = regexRedactorService;
                $log.info('constructor loaded');
            }
            $onInit(){
                this.title = 'REGEX REDACTOR';
                this.$log.info('init loaded');
                this.$log.info(this.regexRedactorService.exposedMethod());
            }



        }
}
