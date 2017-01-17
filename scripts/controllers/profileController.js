angular.module('socialApp')
    .controller('profileController', function($scope, $state) {
        $scope.person = {
            name: 'John Smith',
            tagline: 'This is my tagline',
            imgUrl: 'pic.jpg',
            bio: 'Lorem ipsum dolor sit amet, eum partem tritani eu. Legimus commune cu eos, tota commodo ex mei. Eu his quis choro mediocritatem, accumsan facilisis ad cum, vix ne integre nominavi. Sensibus accusamus abhorreant cu sed, ex ignota vivendum torquatos sea, ex pro harum honestatis. Omnium percipit recteque sea eu, error aeque senserit per ut. Cum quando fabulas elaboraret eu. Posse option deserunt ei qui. Eu est falli doctus persius, ut omnis laboramus eos. Utroque menandri deterruisset ei per. Ex sea rebum denique periculis. Nec te nibh liberavisse, duo ipsum paulo an, cu quis invenire vis.'
        }

        $scope.saveUser = function(user) {
            if (user) {
                $scope.person = user;
            }

            $state.go('home');

        }
    });
