const config = {
	//API_URL: 'http://localhost:5000/onlinestore-2e046/us-central1/api/'
	//API_URL: "https://us-central1-onlinestore-2e046.cloudfunctions.net/api/"
	API_URL: process.env.API_URL
};

const apiFetch = (url, method = 'get', data = {}) => {
	const options = {
		method
	};
	if (data) {
		options.headers = {
			Accept: 'application/json',
			'Content-Type': 'application/json'
		};
		options.body = JSON.stringify(data);
	}
	return fetch(url, options).then(response => response.json());
};

// ajax get method
export const get = path => apiFetch(config.API_URL + path, 'GET', null);

// ajax post method
export const post = (path, data) =>
	apiFetch(config.API_URL + path, 'POST', data);

// ajax delete method
export const remove = (path, data) =>
	apiFetch(config.API_URL + path, 'DELETE', data);

// ajax patch method
export const patch = (path, data) =>
	apiFetch(config.API_URL + path, 'PATCH', data);
