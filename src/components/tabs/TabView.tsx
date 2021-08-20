import React,{useState,useEffect} from 'react';
import { Row, Col } from 'antd';
import { Tabs } from 'antd';
import SlideShow from '../slideshow/SlideShow';

const { TabPane } = Tabs;

const TabView: React.FC<any> = (props) => {
  const { tabObjects,tabIndex=0,handleTabChange } = props;
  const [tabNo,setTabNo] = useState(tabIndex);
  console.log(tabNo)
  const slideShowProps = [{
    image: "slideshow1.svg",
    content: "Automatically Process Documents"
  },
  {
    image: "slideshow2.svg",
    content: "Automatically Process Documents"
  },
  {
    image: "slideshow3.svg",
    content: "Automatically Process Documents"
  }]
  useEffect(()=>{
    setTabNo(tabIndex)
  },[tabIndex])

  const tabChange = (key: String) => {
    handleTabChange(key)
  }
  return (<Tabs activeKey={`${tabNo}`} onChange={tabChange}>
    {tabObjects?.map((tabObj: any, key: Number) => {
      return (<TabPane key={`${key}`} tab={tabObj.header}>
        <Row gutter={60}>
          <Col span={14}><SlideShow slideShowObjs={slideShowProps} /></Col>
          <Col span={10}>{tabObj.content}</Col>
        </Row>
      </TabPane>)
    })}
  </Tabs>
  )
};

export default TabView;