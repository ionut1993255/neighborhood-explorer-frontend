# Neighborhood Explorer

Welcome to `Neighborhood Explorer`, an interactive application designed to help you explore countries and territories around the world. This project combines `styled-components`, `React Router DOM`, custom hooks, authentication and other features to provide a seamless user experience for discovering detailed information about different countries.

## Key Features

- **Dynamic Exploration**: Discover detailed information about each country, including its location, population, language and currency.

- **Authentication**: Securely access personalized features and data with user authentication powered by the custom `API` built from scratch using `Laravel 10` (as you can see in the `neighborhood-explorer-backend` repository).

- **Protected Routes**: Ensure sensitive routes are accessible only to authenticated users using a custom `ProtectedRoute` component.

- **Loading Spinner**: Enhance user experience with loading spinners displayed during data fetching operations.

- **React Icons**: Utilize `React Icons` for displaying intuitive and visually appealing icons throughout the application.

- **Styled Components**: Maintain consistent design and styling using `styled-components` for styling `UI` components.

- **Search Country**: Search for specific countries by name using the `SearchCountryForm` component.

- **Random Country**: Explore random countries with the click of a button using the `getRandomCountryData` function.

- **Geolocation-based Country**: Discover your current location's country automatically with geolocation-based functionality using the `guessLocation` function.

- **Error Handling**: Handle `API` errors gracefully and display appropriate error messages to users for a smooth experience.

- **Custom Hooks**: Leverage custom hooks like `useCountryData`, `useGeolocation` and `useAuth` for managing data fetching, geolocation and authentication functionality.

- **Reusable UI Components**: Utilize a variety of reusable `UI` components like `Button`, `Form`, `FormGroup`, `Row` and more, designed for enhanced code reusability and maintainability.

## Project Structure

The project follows a structured organization, with key components and functionalities organized into separate folders:

- **features/authentication**: Contains components and functionality related to user authentication, including login, register and logout.

- **features/country**: Contains components related to displaying country information, including `CountryItem`, `CountryList` and `SearchCountryForm`.

- **hooks**: Houses custom hooks such as `useCountryData`, `useGeolocation` and `useAuth` for managing data fetching, geolocation and authentication functionality.

- **pages**: Includes top-level components representing different pages of the application, such as `LoginPage`, `RegisterPage`, `MainPage` and `PageNotFound`.

- **services**: Includes `API` services for fetching country data, geocoding information and authentication operations.

- **ui**: Holds reusable `UI` components like `Button`, `Form`, `FormGroup`, `Row` and more, styled using `styled-components` for consistent design and styling.

- **utils**: Contains `constants.js` for storing `API` URLs, `helpers.js` for utility functions and other helper files for better code organization.

- **public/images**: Contains the project logo.

Additionally, the project utilizes `React Hot Toast` for displaying toast notifications and `React Router DOM` for managing application routing.

## How to Use

1. Clone the `neighborhood-explorer-frontend` repository to your local machine.
2. Navigate into the project directory using the command `cd your-project-folder`.
3. Install dependencies using `yarn install`.
4. Run the development server using `yarn start`.
5. Open your browser and navigate to `http://localhost:3000` to view the application.

Upon first access, users are redirected to the login page. After registering, users are redirected back to the login page. Unauthorized attempts to access routes result in a page not found message. Accessing the `/app` route redirects users to the login page. Enjoy exploring the `Neighborhood Explorer`!
