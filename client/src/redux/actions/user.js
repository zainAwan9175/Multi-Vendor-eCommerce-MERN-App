import axios from "axios";

export const loadUser = () => async (dispatch) => {
  try {
    dispatch({
      type: "LoadUserRequest",
    });

    // Await the axios call
    const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/user/getuser`, {
      withCredentials: true,
    });

    console.log(res);

    dispatch({
      type: "LoadUserSuccess",
      payload: res.data.user,
    });

  } catch (error) {
    console.log(error);
    dispatch({
      type: "LoadUserFail",
      payload: error.response?.data?.message || "Something went wrong",
    });
  }
};
