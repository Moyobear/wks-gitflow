import useSWR from 'swr';

import { swGet } from '../../utils/fetcher';
import Table from '../Table';

const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Language',
      dataIndex: 'language',
      key: 'language',
    },
    {
        title: 'Hair Colors',
        dataIndex: 'hair_colors',
        key: 'hair_colors',
    },
    {
        title: 'Eye Colors',
        dataIndex: 'eye_colors',
        key: 'eye_colors',
    },
    {
        title: 'Classification',
        dataIndex: 'classification',
        key: 'classification',
    },
  ];

  
const Species = () => {
    const { data, error } = useSWR('/species', swGet);
    if (error) {
        return <div className="px-2">Oh oh!</div>;
      }
      if (!data) {
        return <div className="px-2">Loading...</div>;
      }
    return (
        <Table columns={columns} data={data.results} /* :D */ />
    )
}

export default Species;