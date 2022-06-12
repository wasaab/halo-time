<div align="center">

<img src="https://i.imgur.com/oDGIepZ.png" height="64"></img>

![Version](https://img.shields.io/github/package-json/v/wasaab/halo-time)
![GitHub](https://img.shields.io/github/license/wasaab/halo-time)
![ECMAScript Version](https://img.shields.io/badge/ES-2021-blue?logo=javascript)

Halo Infinite spawn timers with voice commands and notifications

[Demo](#demo) •
[Tech Stack](#tech-stack) •
[Features](#features) •
[Development](#development)

</div>

## Demo

Try it yourself at https://halo-time.vercel.app.

[Feature Showcase](https://user-images.githubusercontent.com/36096255/173213456-a2e8cf2f-eafc-46e0-875e-562a008518f9.mp4)

*Unmute video to hear synthesized voice notifications*


## Tech Stack

+ [React](https://reactjs.org/)
+ [Material-UI](https://material-ui.com/)
+ [Web Speech API (MDN Docs)](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API)
+ [react-scripts](https://www.npmjs.com/package/react-scripts)
+ [Node.js](https://nodejs.org/)
+ [Vercel](https://vercel.com/)

## Features

+ Labeled progress bar timers
  + Uses [wasaab/react-progress-bar-timer](https://github.com/wasaab/react-progress-bar-timer)
  + The timer counts down and the progress bar fills to represent progress.
  <img height="70" src="https://i.imgur.com/C013oxd.gif"></img>
+ Timer control
  + Click a progress bar to start, stop, or restart the spawn timer.
  + Start all button
  + `"start ____"` voice commands
    + Commands
      + Start timer by name
      + Start all timers
    + Toggled via the `voice commands` button
+ Localized, synthesized, voice notifications and flashing animation when spawn timers finish.
  + Toggled via the `voice notifications` button
+ Voice synthesis and speech recognition are implemented using the [Web Speech API (MDN Docs)](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API).
+ Selectable **playlist**, **game mode**, and **map**, to populate spawns.
+ Toggle filters for spawn types.
  + Types
    + **Vehicles**
    + **Weapons**
    + **Equipment**
    + **Powerups**
  + Customize ordering of spawn type sections

## Development

### Installing Dependencies

<details>
<summary>yarn</summary>

```sh
yarn install
```
</details>

<details>
<summary>npm</summary>

```sh
npm install
```
</details>

### Development Mode

<details>
<summary>yarn</summary>

```sh
yarn start
```
</details>

<details>
<summary>npm</summary>

```sh
npm start
```
</details>

Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes. You may also see any lint errors in the console.

### Production Build

<details>
<summary>yarn</summary>

```sh
yarn build
```
</details>

<details>
<summary>npm</summary>

```sh
npm build
```
</details>

Builds the app for production to the `build` folder.

It correctly bundles React in production mode and optimizes the build for the best performance. The build is minified and the filenames include the hashes.

### Serving Production Build

You can serve the production build locally using the following command:
```sh
npx serve -s build
```