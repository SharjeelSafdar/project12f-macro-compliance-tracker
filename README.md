<h1 align="center">
  Project 12F: Macro Compliance Tracker With NextJS, MongoDB, TypeScript, and Vercel
</h1>

### Link to Web App

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). The web app has been deployed to [Vercel](https://vercel.com/), and can be accessed [here](https://macro-compliance-tracker-p12f.vercel.app/).

### Features

The following are some of the features of this project:

- User can set daily targets and track actual results for different macros for each day
- Uses [MongoDB](https://www.mongodb.com/) to store the daily macro targets and results
- An API endpoint at `/api/daily` to access the MongoDB databbase
- The app is server-side rendered. At first loading, the home page gets the date during server-side rendering. However, subsequent data is fetched using the API.
- Bootstrapped with [NextJS](https://nextjs.org/)
- Site hosted on [Vercel](https://vercel.com/)
- CI/CD with Vercel
- Completely typed with TypeScript
