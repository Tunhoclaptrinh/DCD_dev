import type { IColumn } from '@/components/Table/typing';
import { Table } from 'antd';
import { useEffect } from 'react';
import { useModel } from 'umi';

const RandomUser = () => {
	const { data, getDataUser } = useModel('randomuser');
	useEffect(() => {
		getDataUser();
	}, []);

	const columns: IColumn<RandomUser.Record>[] = [
		{
			title: 'Name',
			dataIndex: 'address',
			key: 'name',
			width: 200,
		},
		{
			title: 'Age',
			dataIndex: 'balance',
			key: 'age',
			width: 100,
		},
	];

	return (
		<div>
			<Table dataSource={data} columns={columns} />
		</div>
	);
};

export default RandomUser;
