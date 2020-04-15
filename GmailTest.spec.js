var gmail = require('./Gmail.po.js');
var Test = require('./Gmail.json');

describe('To Validate the Gmail Functionality', function() {

    it('Validate User can access gmail account',function(){
        gmail.openURL(Test.strURL);
        gmail.loginGmail(Test.strUserID , Test.password);
    });

    });