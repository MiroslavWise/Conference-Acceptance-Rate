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
  {
    title: 'Номинал отношения к рублю',
    dataIndex: 'Nominal',
    width: '33%',
  },
];


 export default ()=>{
    const [data, setData] = useState()

    useEffect(()=>{
        axios.get(`https://www.cbr-xml-daily.ru/daily_json.js`)
      .then(res => {
        const persons = res.data.Valute;
        setData(persons);
        console.log(persons);
      })
    }, [])

    console.log(data)


 return (<div>
    <h4>Курс Валют</h4>
    <Table columns={columns} dataSource={data} size="middle" />
  </div>)
  }
