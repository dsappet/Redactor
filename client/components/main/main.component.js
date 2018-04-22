import angular from 'angular';

export default {
    template: require('./main.html'),

    bindings : {

    },

    controller:
        class mainController {
            // I've seen a recommendation to inject like this when using components in ES6 style
            // some styles have this at the bottom but I prefer it at the top for readability
            static get $inject() {
                return ['$log']; // keep it alphabetical
            }
            constructor($log) {
                this.$log = $log;
            }
            $onInit(){
                this.title = 'TOP SECRET FILE REDACTORATORINATOR';
                // preload some lorem ipsum
                this.inputText = `

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id libero id ante facilisis lacinia pulvinar sed magna. Donec maximus ligula vel tellus aliquam, sed condimentum mauris pulvinar. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin id ipsum vel ligula gravida hendrerit. Phasellus quis vehicula mauris, vitae accumsan libero. Maecenas aliquet ex ut blandit laoreet. Sed ultricies, lorem id hendrerit luctus, tellus est consequat ante, sed blandit massa nunc at felis. Cras a viverra quam. Curabitur ligula lacus, tempor a malesuada vitae, sagittis in sem. Vivamus ac venenatis ipsum. Sed malesuada vulputate malesuada.

Donec imperdiet ante lorem, pulvinar convallis tortor pharetra vitae. Pellentesque condimentum fringilla diam vel accumsan. Phasellus iaculis sed orci non consectetur. Proin commodo nibh vel orci porttitor ultrices. Maecenas pretium, dolor et gravida condimentum, lorem neque tempor augue, interdum efficitur ligula augue gravida eros. Quisque molestie orci vel nisi hendrerit pretium et eu dolor. Quisque quis felis sed velit pulvinar condimentum. Sed nec massa non tellus luctus tincidunt vitae nec turpis. Maecenas a suscipit risus. Ut facilisis pharetra arcu, vitae lobortis ante maximus dictum. Ut bibendum, neque quis condimentum vestibulum, velit neque sollicitudin elit, et viverra est erat id nisl. Nullam vel purus ac eros commodo porta vitae vitae massa. Curabitur eleifend, purus eget sollicitudin faucibus, mauris quam hendrerit nunc, at congue nibh diam non ipsum. Quisque a diam nec tellus pulvinar aliquet vel non velit. Proin id aliquet nisi.

Maecenas tincidunt odio eu sapien auctor porta. Aliquam in porttitor turpis. Sed volutpat euismod justo, a fermentum sem eleifend a. Nullam luctus ornare quam ut vehicula. Mauris sed sodales nisl, ac porta ipsum. Aenean scelerisque diam nec libero vestibulum feugiat. Nam consequat nisi sit amet odio vehicula fermentum. Donec id nunc nec elit facilisis laoreet aliquam et nunc. Nullam sit amet erat id ligula euismod imperdiet. Sed fringilla mi augue.

Aenean ut sem eu purus placerat hendrerit ut in nunc. Nunc sed faucibus risus. Donec sed erat aliquam, mollis dui non, suscipit arcu. Pellentesque commodo quis justo at pretium. Sed quis gravida diam. Aliquam erat volutpat. Praesent semper id est ac malesuada. Pellentesque pellentesque finibus pellentesque. Etiam rutrum, dolor sed laoreet semper, lacus erat aliquet lacus, id ullamcorper enim libero in metus.

Vivamus tristique, felis nec iaculis bibendum, dui felis sagittis ipsum, at pharetra elit metus vehicula elit. Nulla consequat, nulla sit amet imperdiet fringilla, eros erat commodo nisl, vel dictum massa ante hendrerit augue. Sed facilisis odio at neque gravida, non posuere velit facilisis. Cras erat ligula, semper et maximus quis, consequat ultricies libero. Sed bibendum malesuada dui ac suscipit. Duis suscipit ex sit amet convallis sagittis. Nullam non magna erat. Praesent lacinia, massa eu eleifend malesuada, nulla quam vulputate erat, sed luctus mauris mi at urna. Aenean quis elit tellus. Morbi id vehicula dolor. Aenean in laoreet augue. Etiam tempor tempus mi non semper. Donec interdum sagittis suscipit. Nam vehicula, neque pulvinar fermentum pulvinar, urna leo imperdiet purus, pretium tempus eros mi ac mauris. `;

            }



        }
}