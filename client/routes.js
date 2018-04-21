
// angular inject
routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {

    $stateProvider
        .state('regexRedactor',
            {
                url : '/',
                template: '<regex-redactor attrOne="blah blah"></regex-redactor>'
            })

}