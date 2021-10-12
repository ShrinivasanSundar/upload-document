import React,{useState,useEffect} from 'react';
import { Row, Col } from 'antd';
import { Tabs } from 'antd';
import Description from '../description/Description';

const { TabPane } = Tabs;

const TabView: React.FC<any> = (props) => {
  const { tabObjects,tabIndex=0,handleTabChange,descriptionObj } = props;
  const [tabNo,setTabNo] = useState(tabIndex);
  console.log(descriptionObj)
  
  useEffect(()=>{
    setTabNo(tabIndex)
  },[tabIndex])

  const tabChange = (key: String) => {
    handleTabChange(key)
  }
  return (<Tabs  type="card" activeKey={`${tabNo}`} onChange={tabChange}>
    {tabObjects?.map((tabObj: any, key: number) => {
      return (<TabPane key={`${key}`} tab={tabObj.header}>
        <Row>
          <Col offset={1} span={9}><Description descriptionObj={descriptionObj[key]}/></Col>
          <Col span={14}>{tabObj.content}</Col>
        </Row>
      </TabPane>)
    })}
  </Tabs>
  )
};

export default TabView;