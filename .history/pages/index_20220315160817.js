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

  console.log(date.getFullYear())
  console.log(date.getMonth()+1)
  console.log(date.getDate())
  
  let year = () => date.getFullYear()
  let month = () =>{
    if (date.getMonth() - 1 === -1){
      year = year -1
      return 12
    }
  }
  let day = () => {
    if (date.getDate() - 1 === 0){
      if (month === 5 || 7 || 8 || 10 || 12){
        month = month -1
        return 30
      } else if (month ===2 || 4 || 6 || 9 || 11){
        month = month -1
        return 31
      } else if(month === 3){
        month = month -1
        if (year % 4 === 0){
          return 29
        }
      return 31
      } else {
       return date.getDate -1
      }
    }
  }

  console.log(year(), month(), day())
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
