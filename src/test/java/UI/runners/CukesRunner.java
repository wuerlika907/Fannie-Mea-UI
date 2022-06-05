package UI.runners;


import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)  //@ it from junit
@CucumberOptions(
        plugin = {"json:target/cucumber.json", //cucumber json report
                "html:target/default-html-reports",// html report
                "rerun:target/rerun.txt"},
        features = "src/test/resources/features",
        glue = "UI/step_definitions",
        dryRun = false,
        tags = "@testOne"
)
public class CukesRunner {

}
