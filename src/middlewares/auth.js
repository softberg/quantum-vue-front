import { AuthAPI } from '@/helpers/auth';

export default async function () {
	if (localStorage.getItem('accessToken')) {
		return true;
	}

	return false;
}