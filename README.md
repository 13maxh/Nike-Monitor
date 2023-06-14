# Nike Product Monitor

This is a Node.js module that allows you to monitor Nike product updates and restocks. It fetches data from the Nike API and sends notifications to a Discord channel using the Discord.js library.

## Prerequisites

Before using this module, make sure you have the following:

- Node.js installed on your machine
- Discord.js library installed (`npm install discord.js`)
- Request library installed (`npm install request`)

## Installation

1. Clone or download the module files to your local machine.
2. Install the required dependencies by running `npm install` in the module's root directory.

## Usage

### 1. Importing the module

```javascript
const { startSearching, stopSearching } = require('./path/to/nike-monitor');
```

### 2. Starting the monitor

To start monitoring Nike products and receive notifications in a Discord channel, use the `startSearching` function.

```javascript
const channelId = 'YOUR_DISCORD_CHANNEL_ID'; // Replace with your Discord channel ID
const itemList = {}; // Optional: Provide an existing item list to track restocks

const monitorInterval = startSearching(channelId, itemList);
```

The `channelId` parameter is the ID of the Discord channel where you want to receive the notifications. You can obtain this ID by enabling Developer Mode in your Discord client and right-clicking on the channel.

The `itemList` parameter is an optional object that contains previously monitored items. If you want to track restocks, you can provide an existing item list. The format of the item list should be `{ styleCode: JSON.stringify(sizes) }`, where `styleCode` is the Nike product style code, and `sizes` is an object containing the sizes and availability.

The `startSearching` function returns an interval ID that you can later use to stop the monitor.

### 3. Stopping the monitor

To stop the monitor and cease receiving notifications, use the `stopSearching` function.

```javascript
stopSearching(monitorInterval);
```

Pass the interval ID obtained from `startSearching` to the `stopSearching` function to stop the monitoring process.

## Customization

You can customize the behavior of the monitor by modifying the code in the provided module file (`nike-monitor.js`). Here are some aspects you can customize:

- API request URL: The `next` variable contains the API request URL. You can modify it to change the data being fetched.
- Request interval: The interval at which the Nike API is called can be adjusted. Currently, it is set to 1.5 seconds (1500 milliseconds). Modify the interval in the `setInterval` function inside `startSearching` to change the frequency of requests.
- Discord notification content: The code generates Discord embed messages for each product. You can modify the content and formatting of the embed messages to suit your needs.
- Restock detection: The code includes logic to detect restocks based on changes in the item list. You can modify the restock detection behavior or disable it entirely by removing the relevant code.

## License

This module is released under the [MIT License](https://opensource.org/licenses/MIT).

## Disclaimer

This module is provided as-is and may not work as expected due to changes in the Nike API or other factors. Use it at your own risk. The authors are not responsible for any issues or misuse of this module.
