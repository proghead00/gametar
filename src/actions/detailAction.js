import axios from "axios";
import { gameDetailsURL, gameScreenshotsURL } from "../api";

export const loadDetail = (id) => async (dispatch) => {
	const detailData = await axios.get(gameDetailsURL(id));
	const screenShotData = await axios.get(gameScreenshotsURL(id));

	dispatch({
		type: "GET_DETAIL",
		payload: {
			game: detailData.data,
			screen: screenShotData.data,
		},
	});
};
