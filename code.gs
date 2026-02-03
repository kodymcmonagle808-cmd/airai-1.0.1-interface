function doGet() {
  return HtmlService.createHtmlOutputFromFile('index')
    .setTitle('Main - AirAI')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}
