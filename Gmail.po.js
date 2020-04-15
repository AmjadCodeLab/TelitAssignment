var GmailPage = function(){  
 
    // Element Locator
    var tabSignIn = element.all(by.className('h-c-header__nav-li-link')).get(0);   
    var txtEmailID = element(by.id('identifierId'));
    var btnNext = element(by.xpath("//*[contains(@class,'RveJvd snByac') and contains(text(),'Next')]"));
    var lblMailID = element(by.id('profileIdentifier'));
    var txtPassword = element(by.css("[type='password']"));

    // Function or Method to Open Gmail URL
    this.openURL = function(strURL){
     browser.get(strURL);

     // Assertion for the page
     expect(browser.getCurrentUrl()).toContain(strURL);
     browser.sleep(2000);
     };
     // Login Function
    this.loginGmail= function(strUserID , password){
    tabSignIn.click();
    browser.sleep(2000);
    windowhandle(1);
    expect(browser.getCurrentUrl()).toContain(' https://accounts.google.com/');
    txtEmailID.sendKeys(strUserID);
    browser.sleep(500);
    btnNext.click();
    browser.sleep(2000);
    expect(lblMailID).toBe(true,'Page not validated');
    txtPassword.sendKeys(password);
    btnNext.click();

    }

       // Window Handle Function
       function windowhandle(n)
       {
       browser.getAllWindowHandles().then(function(handles) {
   browser.switchTo().window(handles[n]);
   browser.sleep(2000); 
   });
       }                                              

 };
                 
 module.exports = new GmailPage();
 