import { Table } from 'antd';
import 'antd/dist/antd.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    width: '33%',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    width: '33%',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    width: '33%',
  },
];
const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  },
];


 export default ()=>{
    const [data1, setData] = useState()

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const persons = res.data;
        setData(persons );
      })
    }, [])

    console.log(data1)


 return (<div>
    <h4>Курс Валют</h4>
    <Table columns={columns} dataSource={data} size="middle" />
  </div>)
  }
