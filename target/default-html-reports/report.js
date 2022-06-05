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
  "status": "passed"
});
formatter.step({
  "name": "title should be Our Teams | Fannie Mae",
  "keyword": "Then "
});
formatter.match({
  "location": "UI.step_definitions.SearchAllJobDisplayedOnThePage.title_should_be_Our_Teams_Fannie_Mae()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Our Teams display on the page",
  "keyword": "And "
});
formatter.match({
  "location": "UI.step_definitions.SearchAllJobDisplayedOnThePage.our_Teams_display_on_the_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});