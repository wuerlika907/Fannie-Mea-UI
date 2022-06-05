package UI.step_definitions;

import UI.pages.BasePages;
import UI.utilities.BrowserUtlis;
import UI.utilities.ConfigurationReader;
import UI.utilities.Driver;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.junit.Assert;
import org.openqa.selenium.By;

import javax.security.auth.login.Configuration;

public class SearchAllJobDisplayedOnThePage extends BasePages {

    @Given("user on home page")
    public void user_on_home_page() {
       String url= ConfigurationReader.get("UiURL");
        Driver.get().get(url);
       BrowserUtlis.waitFor(1);


    }

    @Given("user navigate to Careers, OurTeam")
    public void user_navigate_to_Careers_OurTeam() {

     ourTeamPage();


    }
    @Then("title should be Our Teams | Fannie Mae")
    public void title_should_be_Our_Teams_Fannie_Mae() {

    String actualTitle =Driver.get().getTitle();
    String expectedTitle="Our Teams | Fannie Mae" ;
        Assert.assertEquals(expectedTitle,actualTitle);

    }

    @Then("Our Teams display on the page")
    public void our_Teams_display_on_the_page() {

       Header.isDisplayed();
    }






}
