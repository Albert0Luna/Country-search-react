# Country Search App

This is a simple web application that allows you to search and filter countries by name and region. The app uses country data from the [restcountries.com](https://restcountries.com/v3.1/all?fields=name,flags,region) API.

## Installation

1. Clone this repository on your local machine using `git clone`.
2. Navigate to the project folder: `cd country-search-app`.
3. Install the dependencies using `npm install`.

## Usage

1. Run the app in development mode with `npm start`.
2. Open your web browser and go to [http://localhost:3000](http://localhost:3000).
3. The app will display a list of countries.
4. Use the search field to filter countries by name.
5. Click on the region buttons to filter countries by region.

## Project Structure

```
country-search-app/
  ├── src/
  │   ├── components/
  │   │   ├── Countries.js
  │   │   └── ...
  │   ├── hooks/
  │   │   ├── getCountries.js
  │   │   └── ...
  │   ├── mocks/
  │   │   └── withRes.json
  │   ├── App.js
  │   ├── index.js
  │   └── ...
  ├── public/
  │   ├── index.html
  │   └── ...
  ├── package.json
  └── ...
```

## Technologies Used

- React
- React Hooks
- API [restcountries.com](https://restcountries.com/v3.1/all?fields=name,flags,region)

## Contributing

If you want to contribute to this project, follow these steps:

1. Fork this repository.
2. Create a new branch with your changes: `git checkout -b my-new-feature`.
3. Make your changes and commit them: `git commit -m "Add new feature"`.
4. Push your changes to your repository: `git push origin my-new-feature`.
5. Create a Pull Request in this repository.

## Contact

If you have any questions or suggestions about the project, feel free to contact me.
