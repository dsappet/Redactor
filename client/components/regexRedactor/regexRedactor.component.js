// import angular from 'angular';
//
// export default {
//     template: require('./regexRedactor.html'),
//
//     bindings : {
//         attrOne : '@?', // fake example binding
//         inputText: '<', // one way binding
//         phrases : '< '
//
//
//     },
//     controller: // regexRedactorController,
//         class regexRedactorController {
//             // I've seen a recommendation to inject like this when using components in ES6 style
//             // some styles have this at the bottom but I prefer it at the top for readability
//             static get $inject() {
//                 return ['$log', '$scope', 'replaceRedactorService']; // keep it alphabetical
//             }
//             constructor($log, $scope,regexRedactorService) {
//                 this.$log = $log;
//                 this.regexRedactorService = regexRedactorService;
//                 $log.info('constructor loaded');
//
//                 $scope.$watch( () => this.inputText, (newV, oldV) =>  this.watchInputText(newV,oldV));
//             }
//             $onInit(){
//                 this.title = 'REGEX REDACTOR';
//                 this.redactedString = '';
//                 this.$log.info('init loaded');
//
//             }
//
//             watchInputText(newV, oldV){
//                 // assuming one phrase for now
//                 this.redactedString = this.regexRedactorService.redact({inputText: newV, phrase :  this.phrases});
//             }
//
//
//
//         }
// }
