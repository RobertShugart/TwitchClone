import streams from '../apis/streams';
import history from '../history';
import { SIGN_IN, SIGN_OUT, CREATE_STREAM, FETCH_STREAM, FETCH_STREAMS, DELETE_STREAM, EDIT_STREAM } from './types';

export const signIn = (userId) => {
	return {
		type: SIGN_IN,
		payload: userId
	};
};

export const signOut = () => {
	return {
		type: SIGN_OUT
	};
};

export const createStream = (formValues) => async (dispatch, getState) => {
	const { userId } = getState().auth;
	const response = await streams.post('/streams', { ...formValues, userId });

	dispatch({ type: CREATE_STREAM, payload: response.data });
	//Do some programatic navigation to get the use back to the root route
	history.push('/');
};

// Fetch Streams List Action creator
export const fetchStreams = () => async (dispatch) => {
	const response = await streams.get('/streams');

	dispatch({ type: FETCH_STREAMS, payload: response.data });
};

// Fetch Stream Individual Action Creator
export const fetchStream = (id) => async (dispatch) => {
	const response = await streams.get(`/streams/${id}`);

	dispatch({ type: FETCH_STREAM, payload: response.data });
};

// Delete Stream Action Creator
export const deleteStream = (id) => async (dispatch) => {
	await streams.delete(`/streams/${id}`);

	dispatch({ type: DELETE_STREAM, payload: id });
};

// Edit Stream Action Creator
export const editStream = (id, formValues) => async (dispatch) => {
	const response = await streams.patch(`/streams/${id}`, formValues);

	dispatch({ type: EDIT_STREAM, payload: response.data });
	history.push('/');
};
