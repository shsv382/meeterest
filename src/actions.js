export const setGender = (gender) => ({
	type: "SET_GENDER",
	payload: gender
});

export const requestUsers = async (dispatch) => {
	dispatch({ type: "REQUEST_PENDING" });
	const data = await fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=> response.json());
    dispatch({ type: "REQUEST_SUCCESS", payload: data });
}