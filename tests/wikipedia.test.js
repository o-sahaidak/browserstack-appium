describe("Wikipedia App Tests", () => {
  it("TC01 - Should display search button on launch", async () => {
    const searchButton = await $("~Search Wikipedia");
    await expect(searchButton).toBeDisplayed();
  });

  it("TC02 - Should open search when tapped", async () => {
    const searchButton = await $("~Search Wikipedia");
    await searchButton.click();
    const searchInput = await $(
      'android=new UiSelector().resourceId("org.wikipedia.alpha:id/search_src_text")',
    );
    await expect(searchInput).toBeDisplayed();
  });

  it("TC03 - Should show results after search", async () => {
    const searchButton = await $("~Search Wikipedia");
    await searchButton.click();
    const searchInput = await $(
      'android=new UiSelector().resourceId("org.wikipedia.alpha:id/search_src_text")',
    );
    await searchInput.setValue("JavaScript");
    await driver.pause(2000);
    const firstResult = await $(
      'android=new UiSelector().resourceId("org.wikipedia.alpha:id/page_list_item_title")',
    );
    await expect(firstResult).toBeDisplayed();
  });

  it("TC04 - Should open article from search results", async () => {
    const searchButton = await $("~Search Wikipedia");
    await searchButton.click();
    const searchInput = await $(
      'android=new UiSelector().resourceId("org.wikipedia.alpha:id/search_src_text")',
    );
    await searchInput.setValue("JavaScript");
    await driver.pause(2000);
    const firstResult = await $(
      'android=new UiSelector().resourceId("org.wikipedia.alpha:id/page_list_item_title")',
    );
    await expect(firstResult).toBeDisplayed();
    await firstResult.click();
    await driver.pause(5000);
    const searchInput2 = await $(
      'android=new UiSelector().resourceId("org.wikipedia.alpha:id/search_src_text")',
    );
    await expect(searchInput2).not.toBeDisplayed();
  });

  it("TC05 - Should go back to main screen", async () => {
    const searchButton = await $("~Search Wikipedia");
    await searchButton.click();
    const searchInput = await $(
      'android=new UiSelector().resourceId("org.wikipedia.alpha:id/search_src_text")',
    );
    await searchInput.setValue("JavaScript");
    await driver.pause(2000);
    const firstResult = await $(
      'android=new UiSelector().resourceId("org.wikipedia.alpha:id/page_list_item_title")',
    );
    await firstResult.click();
    await driver.pause(3000);
    await driver.back();
    const searchButtonAgain = await $("~Search Wikipedia");
    await expect(searchButtonAgain).toBeDisplayed();
  });
});
