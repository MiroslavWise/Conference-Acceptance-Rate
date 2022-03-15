import { Table } from 'antd';
import 'antd/dist/antd.css';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    with: '33%'
  },
  {
    title: 'Age',
    dataIndex: 'age',
    with: '33%'
  },
  {
    title: 'Address',
    dataIndex: 'address',
    with: '33%'
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


 export default ()=>(<div>
    <h4>Middle size table</h4>
    <Table columns={columns} dataSource={data} size="middle" />
  </div>)
