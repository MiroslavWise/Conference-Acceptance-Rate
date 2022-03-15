import { Table } from 'antd';
import 'antd/dist/antd.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

const columns = [
  {
    title: 'Name',
    dataIndex: 'Name',
    width: '25%',
  },
  {
    title: 'Код валюты',
    dataIndex: 'CharCode',
    width: '25%',
  },
  {
    title: 'Курс',
    dataIndex: 'Value',
    width: '25%',
  },
  {
    title: 'Номинал отношения к рублю',
    dataIndex: 'Nominal',
    width: '25%',
  },
];


 export default ()=>{
    const [data, setData] = useState()
   const [prev, setPrev] = useState()
  const date =  new Date()

  console.log(setDate(date.getDate() + 2))

  //   useEffect(()=>{
  //     axios.get(`https://www.cbr-xml-daily.ru/archive/${date}/daily_json.js`)
  //   .then(res => {
  //     const persons = res.data.Valute; 
  //     const valute = []
  //     for (let key in persons) {
  //           valute.push(persons[key]);
  //         }
  //     setPrev(valute)
  //   })
  // }, [])

    useEffect(()=>{
        axios.get(`https://www.cbr-xml-daily.ru/daily_json.js`)
      .then(res => {
        const persons = res.data.Valute; 
        const valute = []
        for (let key in persons) {
              valute.push(persons[key]);
            }
        setData(valute)
      })
    }, [])
 return (<div>
    <h4>Курс Валют</h4>
    <Table columns={columns} dataSource={'loading' && data} size="middle" pagination={{
      position: ['topRight']
    }} />
  </div>)
  }
