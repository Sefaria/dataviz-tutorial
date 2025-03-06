# Sefaria Data Visualization Tutorial
This repository contains the full code for the data visualization tutorial on the [Sefaria Developer Portal](developers.sefaria.org). Using the [Topics API](https://developers.sefaria.org/reference/get-all-topics), this application spins up a basic [Treemap](https://d3plus.org/?path=/docs/charts-treemap--d3plus) using [D3Plus](https://d3plus.org/?path=/docs/introduction--d3plus) to illustrate how easy it is to use Sefaria data for visualizations. 

## Code Structure
The code is a very basic React Application, created using [Vite](https://vite.dev/). 

Inside `src/` you'll see the following files:
1. `index.css` - The stylesheet
2. `App.jsx` - The main body of the app, where the components are defined. 
3. `main.jsx` - Renders the `<App />` component. 

The root of the project mostly contains configuration files, in addition to our root `index.html`. 


## Set Up
1. Clone this repo. 
2. Install [Node.js](https://nodejs.org/en) (if you don't have it already). 
3. `cd dataviz-tutorial`
4. From inside `dataviz-tutorial` run `npm install` to install the dependencies (like D3Plus)
5. Start the app with `npm run dev`. You should see it running at http://localhost:5173/. 

## Future Development
For the sake of the tutorial, we intentionally kept this project as simple and bare-bones as possible (i.e. a proof of concept). Can you take it to the next level? What would our data look like in other visualizations? Which other endpoints could be used to display the Jewish Canon visually? Feel free to fork this repo and build away, and remember to [tell us](https://developers.sefaria.org/page/contact-us) about your projects [powered by Sefaria](https://developers.sefaria.org/docs/powered-by-sefaria)!

(Additionally, it would be better if this was broken down into smaller sub-components, we chose to keep it as-is for the sake of tutorial flow, but definitely something to keep in mind for future expansion).

## Sefaria
You can learn more about [Sefaria](sefaria.org) and the work we do [here](sefaria.org/about).

For information regarding permissions, see [Copyright and Data Use](https://developers.sefaria.org/docs/usage-of-our-name-and-logo) on our [Developer Portal](developers.sefaria.org).

