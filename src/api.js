const base_url = "https://api.rawg.io/api/";

const getCurrentMonth = () => {
	const month = new Date().getMonth() + 1;
	console.log(month);

	if (month < 10) {
		return `0${month}`;
	} else return month;
};

const getCurrentDay = () => {
	const day = new Date().getDate();

	if (day < 10) {
		return `0${day}`;
	} else return day;
};

const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();

const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
console.log(currentDate);

const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${
	currentYear + 1
}-${currentMonth}-${1}-${currentMonth}-${currentDay}`;

const popular_games = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;

export const popularGamesURL = () => `${base_url}${popular_games}`;
