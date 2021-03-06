# YouFlix

YouTube movie client with a familiar interface configured with:

- [Typescript](https://www.typescriptlang.org/)
- Linting with [ESLint](https://eslint.org/)
- Formatting with [Prettier](https://prettier.io/)
- Linting, typechecking and formatting on by default using [`husky`](https://github.com/typicode/husky) for commit hooks
- Testing with [Jest](https://jestjs.io/) and [`react-testing-library`](https://testing-library.com/docs/react-testing-library/intro)

## Get started

1. Clone repo: `git clone https://github.com/vmorsell/react-youflix`
1. Create a file named `.env` in the root and fill out the desired settings. Refer to section [Environment variables](#-environment-variables).
1. Install dependicies: `npm i` or `yarn`
1. Run local server: `npm start` or `yarn start`

## Environment variables

| Name                             | Description                                                                                                                                                              |
| -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `SITE_TITLE`                     | Title of site.                                                                                                                                                           |
| `SITE_DESCRIPTION`               | A short descriptive text of the site. Used in meta description.                                                                                                          |
| `PUBLISHER`                      | Name of the content publisher.                                                                                                                                           |
| `COPYRIGHT_YEAR_FROM`            | Starting year for copyright.                                                                                                                                             |
| `YOUTUBE_API_KEY`                | Google Cloud API Key with `YouTube Data API v3` enabled. Learn how to create your own [here](https://cloud.google.com/docs/authentication/api-keys#creating_an_api_key). |
| `YOUTUBE_CHANNEL_ID`             | YouTube channel to fetch public playlists from. Use [this guide](https://support.google.com/youtube/answer/3250431?hl=en) to find your channel ID.                       |
| `YOUTUBE_UNLISTED_PLAYLISTS_IDS` | Comma separated string with ID's of unlisted playlists to include.                                                                                                       |
| `YOUTUBE_FEATURED_VIDEO_ID`      | ID of featured video. Must be present in the linked playlists.                                                                                                           |
