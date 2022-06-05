$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/UserOnJobSearchPage.feature");
formatter.feature({
  "name": "User should able to Search All jobs displayed on the page",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "user on the search job page",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@testOne"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user on home page",
  "keyword": "Given "
});
formatter.match({
  "location": "UI.step_definitions.SearchAllJobDisplayedOnThePage.user_on_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigate to Careers, OurTeam",
  "keyword": "And "
});
formatter.match({
  "location": "UI.step_definitions.SearchAllJobDisplayedOnThePage.user_navigate_to_Careers_OurTeam()"
});
formatter.result({
  "error_message": "org.openqa.selenium.ElementNotInteractableException: element not interactable\n  (Session info: chrome\u003d102.0.5005.61)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Hurlikas-MacBook-Pro.local\u0027, ip: \u00272600:1003:b12b:830d:2c46:285e:601d:a0c2%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.7\u0027, java.version: \u00271.8.0_181\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 102.0.5005.61, chrome: {chromedriverVersion: 102.0.5005.61 (0e59bcc00cc4..., userDataDir: /var/folders/h5/b76__xts4xs...}, goog:chromeOptions: {debuggerAddress: localhost:53304}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: f99fe6d536a7263404cbd4fea0e32901\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\n\tat com.sun.proxy.$Proxy16.click(Unknown Source)\n\tat UI.step_definitions.SearchAllJobDisplayedOnThePage.user_navigate_to_Careers_OurTeam(SearchAllJobDisplayedOnThePage.java:26)\n\tat ✽.user navigate to Careers, OurTeam(file:///Users/hurlikamuhammattursun/IdeaProjects/Fannie%20Mea%20UI/src/test/resources/features/UserOnJobSearchPage.feature:7)\n",
  "status": "failed"
});
formatter.step({
  "name": "title should be all Our Team",
  "keyword": "Then "
});
formatter.match({
  "location": "UI.step_definitions.SearchAllJobDisplayedOnThePage.title_should_be_all_Our_Team()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Our Teams display on the page",
  "keyword": "And "
});
formatter.match({
  "location": "UI.step_definitions.SearchAllJobDisplayedOnThePage.our_Teams_display_on_the_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
});