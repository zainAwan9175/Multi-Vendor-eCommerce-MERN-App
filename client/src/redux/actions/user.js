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


//load seller
export const loadSeller = () => async (dispatch) => {
  try {
    dispatch({
      type: "LoadSellerRequest",
    });

    // Await the axios call
    const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/shop/getSeller`, {
      withCredentials: true,
    });



    dispatch({
      type: "LoadSellerSuccess",
      payload: res.data.seller,
    });

  } catch (error) {
    console.log(error);
    dispatch({
      type: "LoadSellerFail",
      payload: error.response?.data?.message || "Something went wrong",
    });
  }
};

