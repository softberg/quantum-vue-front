export default function () {
	if (localStorage.getItem('accessToken')) {
		return false;
	}

	return true;
}