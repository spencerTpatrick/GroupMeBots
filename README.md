# GroupMeBots
This repository shows example GroupMe bots using Google App Scripts and GroupMe's API to create callback URLs

## Creating your GroupMe Access Token
1. Head to https://dev.groupme.com/session/new to create your access token

## Creating a GroupMe Bot
1. Login at https://dev.groupme.com/session/new to create your first bot
2. Click bot in the header nav and select "Create Bot"
3. Fill in the following information
   1. Choose the group this bot will live in (I created a test groupme chat for developing)
   2. Name (the bot will appear with this name in the group)
   3. Callback URL - We will grab this in our Google App Script and can be filled in later
   4. Avatar URL - This is optional
4. Click submit, then head back to the bots page, the botID is what we'll use in our scripts

## Creating a Google App Script and linking to your GroupMe Bot
1. Navigate to http://script.google.com/ to create your first script
2. Login and click Create script for "Blank Project"
3. Start writing your code
4. When you are ready to deploy:
   1. In the header, go to Publish -> Deploy as Web App
   2. Enter your Project Name if you haven't already
   3. A new popup will display
      * Project Version should always be set to "new"
      * Execute the app as the user you are logged in as
      * Set Who has access to the app: anyone, even anonymous
      * Click Deploy
5. You should now see a new popup with your "Current web app URL", this is what you will populate as your GroupMe bot's Callback URL

## Examples
[Stock Tick](https://github.com/spencerTpatrick/GroupMeBots/blob/master/stocktick.gs)

Credit to https://github.com/william-reed/ for an incredible tutorial on creating GroupMe Bots
