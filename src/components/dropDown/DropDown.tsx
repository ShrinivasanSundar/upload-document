import React from 'react';
import { Select } from 'antd';
import { SelectValue} from "antd/es/select";
const { Option } = Select;

function onChange(value:SelectValue) {
  console.log(`selected ${value}`);
}

function onBlur() {
  console.log('blur');
}

function onFocus() {
  console.log('focus');
}

function onSearch(val:String) {
  console.log('search:', val);
}

const DropDown:React.FC<any> = () =>{
 return (<Select
    showSearch
    style={{ width: 200 }}
    placeholder="Select a document"
    optionFilterProp="children"
    onChange={onChange}
    onFocus={onFocus}
    onBlur={onBlur}
    onSearch={onSearch}
    filterOption={(input:String, option:any) =>
      option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
    }
  > 
    <Option value="invoice">Invoice</Option>
    <Option value="bill">Bill</Option>
    <Option value="cheque">Cheque</Option>
  </Select>)
}

export default DropDown; 