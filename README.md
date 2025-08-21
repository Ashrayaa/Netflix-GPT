
# Netflix GPT

## [npx quickstart-react]

- React working in Vite with HMR and some ESLint rules.[npx quickstart-react]
- Lets you pick Tailwind, Bootstrap, or MUI during setup
- Lets you choose optional packages (Axios, React Icons, etc.)
- Creates a standard folder structure
- Cleans the default boilerplate
- Sets up Axios if selected

# Current implemented features

- Header
- Login form
- Sign up form
- Routing
- Form validation
- useRef Hook
- Firebase setup
- Deploy our app in production
- Create SignUp user account
- Implemenetd SignIn api
- Created reduxstore with userslice
- Implemented sign out feature
- Updated profile api call
- Fetch movies
- Added hardcoded values to constants files
- Register TMDB movie & craeted an app & got the api key
- Get data from TMDB Now-playing movies list
- Added functionalities in browse page
- Added the Main container having video-background and video-title
- Created custom hooks for nowplaying movies and trailer 
- Embedded Youtube video
- Made it autoplay and mute
- TMDB Image CDN URL
- Created common customhooks for the movie categories
- Created MovieCard component
- Created MovieList component
- Created MovieSuggestions component
- GPT Search Page and GPT search bar
- (STAR FEATURE)Multiple language support in app
- Integrate GPT apis( get openAI key)


## Features of Netflix GPT

- Login/Sign Up
    - Sign In/ Sign Up Form
    - redirects to browser page

- Browse (after authentication)
    - Header
    - Main Movie
        - Trailer in Background
        - Title & Description
        - Movie Suggestions
            - Movie Lists * n

- Netflix GPT
    - Search bar
    - Movie suggestions

## 🔑 How to Get Your OpenAI API Key

To run this project, you need your own OpenAI API key. Follow these steps:

Go to https://platform.openai.com
 and log in with your OpenAI account.

### 1. In the top-right corner, click on your profile picture → View API Keys.

### 2. Click Create new secret key.

### 3. Copy the key and save it securely (you won’t be able to view it again).

### 4. Create a .env file in the project root and add:

- OPENAI_API_KEY=your_api_key_here
