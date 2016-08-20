# A Google Spreadsheet to Import Facebook Data And Other Social Media Data for a List of URLs

This repo contains the Google App Script 'SocialData.gs' that works with a Google Spreadsheet, [Social Shares Data](https://docs.google.com/spreadsheets/d/1-3L5xANIssztHUmE3UMsJvukuFTwAgx_r4tQ-O768KM/edit?usp=sharing), to pull share data from various social media network APIs for a list of URLs using.

## To use the script

1. Open the [Social Shares Data](https://docs.google.com/spreadsheets/d/1-3L5xANIssztHUmE3UMsJvukuFTwAgx_r4tQ-O768KM/edit?usp=sharing) Google spreadsheet
2. Make a copy of the spreadsheet and save it to your Google Drive
3. Paste the URLs into column A for which you'd like to get social shares data

If you have a big batch of URLs, give it time to populate. There's delay programmed into each function in an attempt to prevent limiting out on the number of API calls.

If you're getting "#ERROR" in cells, you may just need to refresh the page or wait a while as you've probably hit the API call limit for the time being. 

## Edits

Please feel free to fork this and push edits back to me. Looking to add more social networks and make the code run faster if possible. (I'm not a programmer...)