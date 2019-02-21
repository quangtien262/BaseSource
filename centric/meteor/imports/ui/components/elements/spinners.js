import { Template } from 'meteor/templating';

import './spinners.html';

Template.spinners.onRendered(function(){

    $('.loader-inner').loaders();

})
