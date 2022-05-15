$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("computer.feature");
formatter.feature({
  "line": 2,
  "name": "computer page test",
  "description": "As a user I should be able to buy computer",
  "id": "computer-page-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@computerpage"
    }
  ]
});
formatter.before({
  "duration": 4150514700,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "user is on homepage page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am on home page for shopping",
  "keyword": "Given "
});
formatter.match({
  "location": "ComputerAddCartSteps.iAmOnHomePageForShopping()"
});
formatter.result({
  "duration": 73669700,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "verify User Should Navigate To Computer Page Successfully",
  "description": "",
  "id": "computer-page-test;verify-user-should-navigate-to-computer-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 8,
      "name": "@smoke"
    },
    {
      "line": 8,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I click on Computers tab",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I should be navigated to computer page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Computer text should be visible",
  "keyword": "And "
});
formatter.match({
  "location": "ComputerAddCartSteps.iClickOnComputersTab()"
});
formatter.result({
  "duration": 568871600,
  "status": "passed"
});
formatter.match({
  "location": "ComputerAddCartSteps.iShouldBeNavigatedToComputerPage()"
});
formatter.result({
  "duration": 14400,
  "status": "passed"
});
formatter.match({
  "location": "ComputerAddCartSteps.computerTextShouldBeVisible()"
});
formatter.result({
  "duration": 31858800,
  "error_message": "org.junit.ComparisonFailure: displayed message is wrong : expected:\u003cComputer[]\u003e but was:\u003cComputer[s]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat com.nopcommerce.demo.cucumber.steps.ComputerAddCartSteps.computerTextShouldBeVisible(ComputerAddCartSteps.java:30)\r\n\tat ✽.And Computer text should be visible(computer.feature:12)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 955082900,
  "status": "passed"
});
formatter.before({
  "duration": 2766354500,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "user is on homepage page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am on home page for shopping",
  "keyword": "Given "
});
formatter.match({
  "location": "ComputerAddCartSteps.iAmOnHomePageForShopping()"
});
formatter.result({
  "duration": 36700,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "verify User Should Navigate To Desktops Page Successfully",
  "description": "",
  "id": "computer-page-test;verify-user-should-navigate-to-desktops-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 14,
      "name": "@sanity"
    },
    {
      "line": 14,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "I click on Computers tab",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I click on desktops link",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I should be navigated to desktop page",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "Desktop Text should be visible",
  "keyword": "And "
});
formatter.match({
  "location": "ComputerAddCartSteps.iClickOnComputersTab()"
});
formatter.result({
  "duration": 546106600,
  "status": "passed"
});
formatter.match({
  "location": "ComputerAddCartSteps.iClickOnDesktopsLink()"
});
formatter.result({
  "duration": 460932900,
  "status": "passed"
});
formatter.match({
  "location": "ComputerAddCartSteps.iShouldBeNavigatedToDesktopPage()"
});
formatter.result({
  "duration": 29600,
  "status": "passed"
});
formatter.match({
  "location": "ComputerAddCartSteps.desktopTextShouldBeVisible()"
});
formatter.result({
  "duration": 30062400,
  "status": "passed"
});
formatter.after({
  "duration": 726512500,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 22,
  "name": "I should able to select my own build computer",
  "description": "",
  "id": "computer-page-test;i-should-able-to-select-my-own-build-computer",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 21,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "I click on Computers tab",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I click on desktops link",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I select desktop product Build your own computer",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I select processor \"\u003cProcessor\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I select ram \"\u003cRAM\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I select hdd \"\u003cHDD\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I select os \"\u003cOS\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I select software \"\u003cSoftware\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I am successfully select my own build computer",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "I can see the addtocart message \"The product has been added to your shopping cart\"",
  "keyword": "And "
});
formatter.examples({
  "line": 35,
  "name": "",
  "description": "",
  "id": "computer-page-test;i-should-able-to-select-my-own-build-computer;",
  "rows": [
    {
      "cells": [
        "Processor",
        "RAM",
        "HDD",
        "OS",
        "Software"
      ],
      "line": 36,
      "id": "computer-page-test;i-should-able-to-select-my-own-build-computer;;1"
    },
    {
      "cells": [
        "2.2 GHz Intel Pentium Dual-Core E2200",
        "2 GB",
        "320 GB",
        "Vista Home [+$50.00]",
        "Microsoft Office [+$50.00]"
      ],
      "line": 37,
      "id": "computer-page-test;i-should-able-to-select-my-own-build-computer;;2"
    },
    {
      "cells": [
        "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
        "4GB [+$20.00]",
        "400 GB [+$100.00]",
        "Vista Premium [+$60.00]",
        "Acrobat Reader [+$10.00]"
      ],
      "line": 38,
      "id": "computer-page-test;i-should-able-to-select-my-own-build-computer;;3"
    },
    {
      "cells": [
        "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
        "8GB [+$60.00]",
        "320 GB",
        "Vista Home [+$50.00]",
        "Total Commander [+$5.00]"
      ],
      "line": 39,
      "id": "computer-page-test;i-should-able-to-select-my-own-build-computer;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2677225700,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "user is on homepage page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am on home page for shopping",
  "keyword": "Given "
});
formatter.match({
  "location": "ComputerAddCartSteps.iAmOnHomePageForShopping()"
});
formatter.result({
  "duration": 22000,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "I should able to select my own build computer",
  "description": "",
  "id": "computer-page-test;i-should-able-to-select-my-own-build-computer;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 21,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@computerpage"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "I click on Computers tab",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I click on desktops link",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I select desktop product Build your own computer",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I select processor \"2.2 GHz Intel Pentium Dual-Core E2200\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I select ram \"2 GB\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I select hdd \"320 GB\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I select os \"Vista Home [+$50.00]\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I select software \"Microsoft Office [+$50.00]\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I am successfully select my own build computer",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "I can see the addtocart message \"The product has been added to your shopping cart\"",
  "keyword": "And "
});
formatter.match({
  "location": "ComputerAddCartSteps.iClickOnComputersTab()"
});
formatter.result({
  "duration": 531213800,
  "status": "passed"
});
formatter.match({
  "location": "ComputerAddCartSteps.iClickOnDesktopsLink()"
});
formatter.result({
  "duration": 457595400,
  "status": "passed"
});
formatter.match({
  "location": "ComputerAddCartSteps.iSelectDesktopProductBuildYourOwnComputer()"
});
formatter.result({
  "duration": 1175216200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2.2 GHz Intel Pentium Dual-Core E2200",
      "offset": 20
    }
  ],
  "location": "ComputerAddCartSteps.iSelectProcessor(String)"
});
formatter.result({
  "duration": 76100100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2 GB",
      "offset": 14
    }
  ],
  "location": "ComputerAddCartSteps.iSelectRam(String)"
});
formatter.result({
  "duration": 116575900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "320 GB",
      "offset": 14
    }
  ],
  "location": "ComputerAddCartSteps.iSelectHdd(String)"
});
formatter.result({
  "duration": 55783800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vista Home [+$50.00]",
      "offset": 13
    }
  ],
  "location": "ComputerAddCartSteps.iSelectOs(String)"
});
formatter.result({
  "duration": 52445700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Microsoft Office [+$50.00]",
      "offset": 19
    }
  ],
  "location": "ComputerAddCartSteps.iSelectSoftware(String)"
});
formatter.result({
  "duration": 56749000,
  "status": "passed"
});
formatter.match({
  "location": "ComputerAddCartSteps.iClickOnAddToCartButton()"
});
formatter.result({
  "duration": 42814100,
  "status": "passed"
});
formatter.match({
  "location": "ComputerAddCartSteps.iAmSuccessfullySelectMyOwnBuildComputer()"
});
formatter.result({
  "duration": 23500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "The product has been added to your shopping cart",
      "offset": 33
    }
  ],
  "location": "ComputerAddCartSteps.iCanSeeTheAddtocartMessage(String)"
});
formatter.result({
  "duration": 864075300,
  "status": "passed"
});
formatter.after({
  "duration": 726156800,
  "status": "passed"
});
formatter.before({
  "duration": 1809990400,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "user is on homepage page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am on home page for shopping",
  "keyword": "Given "
});
formatter.match({
  "location": "ComputerAddCartSteps.iAmOnHomePageForShopping()"
});
formatter.result({
  "duration": 19100,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "I should able to select my own build computer",
  "description": "",
  "id": "computer-page-test;i-should-able-to-select-my-own-build-computer;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 21,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@computerpage"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "I click on Computers tab",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I click on desktops link",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I select desktop product Build your own computer",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I select processor \"2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I select ram \"4GB [+$20.00]\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I select hdd \"400 GB [+$100.00]\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I select os \"Vista Premium [+$60.00]\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I select software \"Acrobat Reader [+$10.00]\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I am successfully select my own build computer",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "I can see the addtocart message \"The product has been added to your shopping cart\"",
  "keyword": "And "
});
formatter.match({
  "location": "ComputerAddCartSteps.iClickOnComputersTab()"
});
formatter.result({
  "duration": 530388700,
  "status": "passed"
});
formatter.match({
  "location": "ComputerAddCartSteps.iClickOnDesktopsLink()"
});
formatter.result({
  "duration": 447287300,
  "status": "passed"
});
formatter.match({
  "location": "ComputerAddCartSteps.iSelectDesktopProductBuildYourOwnComputer()"
});
formatter.result({
  "duration": 816681800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
      "offset": 20
    }
  ],
  "location": "ComputerAddCartSteps.iSelectProcessor(String)"
});
formatter.result({
  "duration": 46654500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4GB [+$20.00]",
      "offset": 14
    }
  ],
  "location": "ComputerAddCartSteps.iSelectRam(String)"
});
formatter.result({
  "duration": 60782300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400 GB [+$100.00]",
      "offset": 14
    }
  ],
  "location": "ComputerAddCartSteps.iSelectHdd(String)"
});
formatter.result({
  "duration": 75561700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vista Premium [+$60.00]",
      "offset": 13
    }
  ],
  "location": "ComputerAddCartSteps.iSelectOs(String)"
});
formatter.result({
  "duration": 77906500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Acrobat Reader [+$10.00]",
      "offset": 19
    }
  ],
  "location": "ComputerAddCartSteps.iSelectSoftware(String)"
});
formatter.result({
  "duration": 63216200,
  "status": "passed"
});
formatter.match({
  "location": "ComputerAddCartSteps.iClickOnAddToCartButton()"
});
formatter.result({
  "duration": 40050100,
  "status": "passed"
});
formatter.match({
  "location": "ComputerAddCartSteps.iAmSuccessfullySelectMyOwnBuildComputer()"
});
formatter.result({
  "duration": 10900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "The product has been added to your shopping cart",
      "offset": 33
    }
  ],
  "location": "ComputerAddCartSteps.iCanSeeTheAddtocartMessage(String)"
});
formatter.result({
  "duration": 279931200,
  "status": "passed"
});
formatter.after({
  "duration": 748624000,
  "status": "passed"
});
formatter.before({
  "duration": 1866151500,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "user is on homepage page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am on home page for shopping",
  "keyword": "Given "
});
formatter.match({
  "location": "ComputerAddCartSteps.iAmOnHomePageForShopping()"
});
formatter.result({
  "duration": 20300,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "I should able to select my own build computer",
  "description": "",
  "id": "computer-page-test;i-should-able-to-select-my-own-build-computer;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 21,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@computerpage"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "I click on Computers tab",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I click on desktops link",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I select desktop product Build your own computer",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I select processor \"2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I select ram \"8GB [+$60.00]\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I select hdd \"320 GB\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I select os \"Vista Home [+$50.00]\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I select software \"Total Commander [+$5.00]\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I am successfully select my own build computer",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "I can see the addtocart message \"The product has been added to your shopping cart\"",
  "keyword": "And "
});
formatter.match({
  "location": "ComputerAddCartSteps.iClickOnComputersTab()"
});
formatter.result({
  "duration": 511485100,
  "status": "passed"
});
formatter.match({
  "location": "ComputerAddCartSteps.iClickOnDesktopsLink()"
});
formatter.result({
  "duration": 462478100,
  "status": "passed"
});
formatter.match({
  "location": "ComputerAddCartSteps.iSelectDesktopProductBuildYourOwnComputer()"
});
formatter.result({
  "duration": 792547200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
      "offset": 20
    }
  ],
  "location": "ComputerAddCartSteps.iSelectProcessor(String)"
});
formatter.result({
  "duration": 41565700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8GB [+$60.00]",
      "offset": 14
    }
  ],
  "location": "ComputerAddCartSteps.iSelectRam(String)"
});
formatter.result({
  "duration": 62126100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "320 GB",
      "offset": 14
    }
  ],
  "location": "ComputerAddCartSteps.iSelectHdd(String)"
});
formatter.result({
  "duration": 66225600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vista Home [+$50.00]",
      "offset": 13
    }
  ],
  "location": "ComputerAddCartSteps.iSelectOs(String)"
});
formatter.result({
  "duration": 55137600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Total Commander [+$5.00]",
      "offset": 19
    }
  ],
  "location": "ComputerAddCartSteps.iSelectSoftware(String)"
});
formatter.result({
  "duration": 73464200,
  "status": "passed"
});
formatter.match({
  "location": "ComputerAddCartSteps.iClickOnAddToCartButton()"
});
formatter.result({
  "duration": 41045700,
  "status": "passed"
});
formatter.match({
  "location": "ComputerAddCartSteps.iAmSuccessfullySelectMyOwnBuildComputer()"
});
formatter.result({
  "duration": 13600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "The product has been added to your shopping cart",
      "offset": 33
    }
  ],
  "location": "ComputerAddCartSteps.iCanSeeTheAddtocartMessage(String)"
});
formatter.result({
  "duration": 356094500,
  "status": "passed"
});
formatter.after({
  "duration": 703110800,
  "status": "passed"
});
formatter.uri("login.feature");
formatter.feature({
  "line": 2,
  "name": "Login Test",
  "description": "As user I want to login into nop commerce website",
  "id": "login-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@loginpage"
    }
  ]
});
formatter.before({
  "duration": 2044330500,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "User should navigate to the log in page successfully",
  "description": "",
  "id": "login-test;user-should-navigate-to-the-log-in-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@smoke"
    },
    {
      "line": 5,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I should navigate to log in page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 43700,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 493689400,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iShouldNavigateToLogInPageSuccessfully()"
});
formatter.result({
  "duration": 25436100,
  "status": "passed"
});
formatter.after({
  "duration": 695495400,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 12,
  "name": "verify the error message with  invalid credentials",
  "description": "",
  "id": "login-test;verify-the-error-message-with--invalid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@sanity"
    },
    {
      "line": 11,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I enter invalid email \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I enter invalid password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I should see the error message \"\u003cerrorMessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "login-test;verify-the-error-message-with--invalid-credentials;",
  "rows": [
    {
      "cells": [
        "email",
        "password",
        "errorMessage"
      ],
      "line": 20,
      "id": "login-test;verify-the-error-message-with--invalid-credentials;;1"
    },
    {
      "cells": [
        "abcd123@gmail.com",
        "xyz123",
        "Login was unsuccessful. Please correct the errors and try again.\nNo customer account found"
      ],
      "line": 21,
      "id": "login-test;verify-the-error-message-with--invalid-credentials;;2"
    },
    {
      "cells": [
        "xyz123@gmail.com",
        "abc123",
        "Login was unsuccessful. Please correct the errors and try again.\nNo customer account found"
      ],
      "line": 22,
      "id": "login-test;verify-the-error-message-with--invalid-credentials;;3"
    },
    {
      "cells": [
        "adfafasd@gmail.com",
        "xyz123",
        "Login was unsuccessful. Please correct the errors and try again.\nNo customer account found"
      ],
      "line": 23,
      "id": "login-test;verify-the-error-message-with--invalid-credentials;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2704423900,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "verify the error message with  invalid credentials",
  "description": "",
  "id": "login-test;verify-the-error-message-with--invalid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@loginpage"
    },
    {
      "line": 11,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I enter invalid email \"abcd123@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I enter invalid password \"xyz123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I should see the error message \"Login was unsuccessful. Please correct the errors and try again.\nNo customer account found\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 28100,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 563711400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcd123@gmail.com",
      "offset": 23
    }
  ],
  "location": "LoginSteps.iEnterInvalidEmail(String)"
});
formatter.result({
  "duration": 67919900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "xyz123",
      "offset": 26
    }
  ],
  "location": "LoginSteps.iEnterInvalidPassword(String)"
});
formatter.result({
  "duration": 66370300,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 414681100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login was unsuccessful. Please correct the errors and try again.\nNo customer account found",
      "offset": 32
    }
  ],
  "location": "LoginSteps.iShouldSeeTheErrorMessage(String)"
});
formatter.result({
  "duration": 22381300,
  "status": "passed"
});
formatter.after({
  "duration": 707804900,
  "status": "passed"
});
formatter.before({
  "duration": 2177545200,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "verify the error message with  invalid credentials",
  "description": "",
  "id": "login-test;verify-the-error-message-with--invalid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@loginpage"
    },
    {
      "line": 11,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I enter invalid email \"xyz123@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I enter invalid password \"abc123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I should see the error message \"Login was unsuccessful. Please correct the errors and try again.\nNo customer account found\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 33200,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 496935200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "xyz123@gmail.com",
      "offset": 23
    }
  ],
  "location": "LoginSteps.iEnterInvalidEmail(String)"
});
formatter.result({
  "duration": 69448600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 26
    }
  ],
  "location": "LoginSteps.iEnterInvalidPassword(String)"
});
formatter.result({
  "duration": 60888500,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 404271500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login was unsuccessful. Please correct the errors and try again.\nNo customer account found",
      "offset": 32
    }
  ],
  "location": "LoginSteps.iShouldSeeTheErrorMessage(String)"
});
formatter.result({
  "duration": 23701500,
  "status": "passed"
});
formatter.after({
  "duration": 701462100,
  "status": "passed"
});
formatter.before({
  "duration": 1827369400,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "verify the error message with  invalid credentials",
  "description": "",
  "id": "login-test;verify-the-error-message-with--invalid-credentials;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@loginpage"
    },
    {
      "line": 11,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I enter invalid email \"adfafasd@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I enter invalid password \"xyz123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I should see the error message \"Login was unsuccessful. Please correct the errors and try again.\nNo customer account found\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 21600,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 527044700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "adfafasd@gmail.com",
      "offset": 23
    }
  ],
  "location": "LoginSteps.iEnterInvalidEmail(String)"
});
formatter.result({
  "duration": 64521600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "xyz123",
      "offset": 26
    }
  ],
  "location": "LoginSteps.iEnterInvalidPassword(String)"
});
formatter.result({
  "duration": 56693500,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 390592200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login was unsuccessful. Please correct the errors and try again.\nNo customer account found",
      "offset": 32
    }
  ],
  "location": "LoginSteps.iShouldSeeTheErrorMessage(String)"
});
formatter.result({
  "duration": 24171500,
  "status": "passed"
});
formatter.after({
  "duration": 671428100,
  "status": "passed"
});
formatter.before({
  "duration": 2710067300,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "User should login successfuly with valid credentials",
  "description": "",
  "id": "login-test;user-should-login-successfuly-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 25,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "I enter valid email \"priyapatel123@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I enter valid password \"priyapatel123\"",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I should login successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "Logout Button should be displayed",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 19400,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 538262500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "priyapatel123@gmail.com",
      "offset": 21
    }
  ],
  "location": "LoginSteps.iEnterValidEmail(String)"
});
formatter.result({
  "duration": 72600200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "priyapatel123",
      "offset": 24
    }
  ],
  "location": "LoginSteps.iEnterValidPassword(String)"
});
formatter.result({
  "duration": 67351700,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 387491200,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iShouldLoginSuccessfully()"
});
formatter.result({
  "duration": 59100,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.logoutButtonShouldBeDisplayed()"
});
formatter.result({
  "duration": 40062145100,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[@class\u003d\u0027ico-logout\u0027]\"}\n  (Session info: chrome\u003d101.0.4951.54)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027LAPTOP-8MVKMBUE\u0027, ip: \u0027192.168.1.9\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [4fd271eb55008b74531aad648889853b, findElement {using\u003dxpath, value\u003d//a[@class\u003d\u0027ico-logout\u0027]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 101.0.4951.54, chrome: {chromedriverVersion: 101.0.4951.41 (93c720db8323..., userDataDir: C:\\Users\\pkinj\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:62155}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:62155/devtoo..., se:cdpVersion: 101.0.4951.54, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 4fd271eb55008b74531aad648889853b\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:383)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:375)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy23.isDisplayed(Unknown Source)\r\n\tat com.nopcommerce.demo.pages.LoginHomePage.logOutButonDisplayed(LoginHomePage.java:23)\r\n\tat com.nopcommerce.demo.cucumber.steps.LoginSteps.logoutButtonShouldBeDisplayed(LoginSteps.java:71)\r\n\tat ✽.And Logout Button should be displayed(login.feature:33)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 858894800,
  "status": "passed"
});
formatter.before({
  "duration": 2598075800,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "Verify That User Should LogOut SuccessFully",
  "description": "",
  "id": "login-test;verify-that-user-should-logout-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 35,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 37,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 38,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "I enter valid email \"priyapatel123@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I enter valid password \"priyapatel123\"",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I should login successfully",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I click on logOut link",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I should be able to see log in link",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 73700,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 512846900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "priyapatel123@gmail.com",
      "offset": 21
    }
  ],
  "location": "LoginSteps.iEnterValidEmail(String)"
});
formatter.result({
  "duration": 68502600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "priyapatel123",
      "offset": 24
    }
  ],
  "location": "LoginSteps.iEnterValidPassword(String)"
});
formatter.result({
  "duration": 68380600,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 412349300,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iShouldLoginSuccessfully()"
});
formatter.result({
  "duration": 16200,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLogOutLink()"
});
formatter.result({
  "duration": 20053408900,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[@class\u003d\u0027ico-logout\u0027]\"}\n  (Session info: chrome\u003d101.0.4951.54)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027LAPTOP-8MVKMBUE\u0027, ip: \u0027192.168.1.9\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [9cb8ef28ba366fbb4593874ec66114d9, findElement {using\u003dxpath, value\u003d//a[@class\u003d\u0027ico-logout\u0027]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 101.0.4951.54, chrome: {chromedriverVersion: 101.0.4951.41 (93c720db8323..., userDataDir: C:\\Users\\pkinj\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:62176}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:62176/devtoo..., se:cdpVersion: 101.0.4951.54, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 9cb8ef28ba366fbb4593874ec66114d9\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:383)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:375)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy23.click(Unknown Source)\r\n\tat com.nopcommerce.demo.utilities.Utility.clickOnElement(Utility.java:51)\r\n\tat com.nopcommerce.demo.pages.LoginHomePage.clickOnLogOut(LoginHomePage.java:26)\r\n\tat com.nopcommerce.demo.cucumber.steps.LoginSteps.iClickOnLogOutLink(LoginSteps.java:76)\r\n\tat ✽.And I click on logOut link(login.feature:43)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginSteps.iShouldBeAbleToSeeLogInLink()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 892565500,
  "status": "passed"
});
formatter.uri("register.feature");
formatter.feature({
  "line": 2,
  "name": "register Page test",
  "description": "\r\nAs user I want to register on nopcommerce website",
  "id": "register-page-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@registerpage"
    }
  ]
});
formatter.before({
  "duration": 2000432600,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "User is on register page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "I am on home page for registration",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I click on register link",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I am on register page",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterSteps.iAmOnHomePageForRegistration()"
});
formatter.result({
  "duration": 105700,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 488529100,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iAmOnRegisterPage()"
});
formatter.result({
  "duration": 17900,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "verify That User Should Create Account Successfully",
  "description": "",
  "id": "register-page-test;verify-that-user-should-create-account-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 29,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 31,
  "name": "I select gender Female",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "I Enter FirstName",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I Enter LastName",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I select Day",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I select Month",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I select Year",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I enter valid email in email registration field  for register",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I enter valid password  in password registration field for register",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I enter valid confirmpassword in confirmpassword field for register",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I click on Register button",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I should creat account successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "I should able to see Your registration completed message",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterSteps.iSelectGenderFemale()"
});
formatter.result({
  "duration": 49310100,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iEnterFirstName()"
});
formatter.result({
  "duration": 61420000,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iEnterLastName()"
});
formatter.result({
  "duration": 61840300,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iSelectDay()"
});
formatter.result({
  "duration": 65372900,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iSelectMonth()"
});
formatter.result({
  "duration": 60431000,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iSelectYear()"
});
formatter.result({
  "duration": 59082000,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iEnterValidEmailInEmailRegistrationFieldForRegister()"
});
formatter.result({
  "duration": 68938100,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iEnterValidPasswordInPasswordRegistrationFieldForRegister()"
});
formatter.result({
  "duration": 67942200,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iEnterValidConfirmpasswordInConfirmpasswordFieldForRegister()"
});
formatter.result({
  "duration": 66234400,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 750398800,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iShouldCreatAccountSuccessfully()"
});
formatter.result({
  "duration": 17000,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iShouldAbleToSeeYourRegistrationCompletedMessage()"
});
formatter.result({
  "duration": 25923200,
  "status": "passed"
});
formatter.after({
  "duration": 750834000,
  "status": "passed"
});
});