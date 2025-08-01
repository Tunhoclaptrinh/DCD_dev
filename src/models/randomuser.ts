import { getData } from '@/services/RandomUser';
import { useState } from 'react';

export default () => {
	const [data, setData] = useState([]);

	const getDataUser = async () => {
		const res = await getData();
		setData(res?.data ?? []);
	};

	return {
		data,
		setData,
		getDataUser,
	};
};
