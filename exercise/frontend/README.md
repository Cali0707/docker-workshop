## Running the frontend

To run the frontend, you need to have node installed locally. Next, you will need to install dependencies:

```
npm install
```

To run the app you should specify which port the backend is running on with the `REACT_APP_BACKEND_URL` environment variable. For example,
if your backend app is running on port 8000, you can set `REACT_APP_BACKEND_URL=http://localhost:8000`. You can run the app with:
```
REACT_APP_BACKEND_URL=http://localhost:8000 npm run start
```
