import { Table } from 'antd';
import React, { useState } from 'react';
import { useEffect } from 'react';


const CustomTable: React.FC<any> = (props) => {
    const { columns, data } = props
    const [content, setContent] = useState([]);
    useEffect(() => {
        console.log("Table data refresh");
        setContent(data);
    }, [data])
    return (<Table columns={columns} dataSource={content} />)

}

export default CustomTable;