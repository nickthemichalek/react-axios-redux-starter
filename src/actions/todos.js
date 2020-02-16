import axios from 'axios';
import {GET_TODOS} from './types';

import AXIOS_CONFIG from "../axios";

export const getTodos = () => async dispatch => {
	const res = await axios.get('api/todos/', AXIOS_CONFIG).then(
		response => {
			dispatch({
				type: GET_TODOS,
				payload: response.data
			});
		}
	).catch(err => {
		/*
		dispatch({ type: AUTH_FAILED });
		dispatch({ type: ERROR, payload: error.data.error.message });
		 */
		if (err.response) {
			// The request was made and the server responded with a status code
			// that falls out of the range of 2xx
			console.log(err.response.data);
			console.log(err.response.status);
			console.log(err.response.headers);
		} else if (err.request) {
			// The request was made but no response was received
			// `error.request` is an instance of XMLHttpRequest in the browser and an instance of
			// http.ClientRequest in node.js
			console.log(err.request);
		} else {
			// Something happened in setting up the request that triggered an Error
			console.log('Error', err.message);
		}
		console.log(err.config);
		/*dispatch({
			type: GET_TODOS_ERROR,
			payload: err.config
		});*/
	});
};