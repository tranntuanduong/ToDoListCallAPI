## 4/4/2020 - TO DO LIST CALL API - ReacJs(react router, redux, axios...)
	
##instaill redux, react-redux, redux-router-dom
	npm install redux react-redux redux-router-dom
	
##Config index.js file(create store):
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
const store = createStore(
    appReducers,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    )
);


## Install json-server:
1.Install JSON Server
	npm install -g json-server
2.Create a db.json file with some data
	{
	  "products": [
		{
		  "id": 1,
		  "name": "XS MAXx",
		  "price": "199",
		  "status": true
		},
		{
		  "id": 2,
		  "name": "XS MAXx",
		  "price": "2000",
		  "status": false
		},
		{
		  "id": 3,
		  "name": "Iphone 6 plus",
		  "price": "160",
		  "status": ""
		}
	  ]
	}
3.Start Json-server:
	json-server --watch db.json
	


