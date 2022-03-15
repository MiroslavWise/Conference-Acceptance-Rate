import { Table } from 'antd';
import 'antd/dist/antd.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

const columns = [
  {
    title: 'Name',
    dataIndex: 'Name',
    width: '33%',
  },
  {
    title: 'Код валюты',
    dataIndex: 'CharCode',
    width: '33%',
  },
  {
    title: 'Курс',
    dataIndex: 'Value',
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
        axios.get(`https://www.cbr-xml-daily.ru/daily_json.js`)
      .then(res => {
        const persons = res.data;
        setData(persons);
      })
    }, [])

    console.log(data1)


 return (<div>
    <h4>Курс Валют</h4>
    <Table columns={columns} dataSource={data} size="middle" />
  </div>)
  }
