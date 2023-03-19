import { Table } from "antd";
import useSWR from "swr";
import { swGet }  from "../../utils/fetcher"

const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Birth_Year',
      dataIndex: 'birth_year',
      key: 'birth_year',
    },
    {
      title: 'Height (m)',
      dataIndex: 'height',
      key: 'height',
      render: (population: string) =>
        parseInt(population)
          ? parseInt(population).toLocaleString('es-AR')
          : population,
    },
    {
      title: 'Films',
      dataIndex: 'films',
      key: 'films',
      render: (films: string[]) => films.length,
    },
  ];

const People = () => {
    const { data, error } = useSWR("/people", swGet);

    if(error){
        console.log(error)
        return <div className="px-2">Oh oh!</div>
    }
    if(!data) {
        return <div className="px-2">Loadingg...</div>
    }
    console.log(data)

    return (
        <div>
            <Table columns={columns} dataSource={data.results}/>
        </div>
    )
}

export default People;