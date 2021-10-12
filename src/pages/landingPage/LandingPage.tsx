import React from "react";
import TabView from "../../components/tabs/TabView";
import SelectFile from "../../components/selectFile/SelectFile";
import styles from "./LandingPage.module.scss";
import { useState } from "react";
import { Layout, Menu } from 'antd';
import {
  PieChartOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';
import CardSelection from "../../components/cardSelection/CardSelection";
const { Header, Content, Sider } = Layout;


const LandingPage: React.FC<any> = () => {
    const [tabIndex,setTabIndex]=useState(0);
    const [collapsed,setCollapsed] = useState(false);
    const tabViewProps = [{
        header: "Account Creation",
        content: <SelectFile />
    }, {
        header: "Product Selection",
        content: <CardSelection />
    },
    {
        header: "Invite other",
        content: <SelectFile />
    },
    {
        header: "Analytics",
        content: <SelectFile />
    },
    {
        header: "Pricing Details",
        content: <SelectFile />
    }];
    const descriptionProps = [{
      title: "Your Organization Details",
      content: "We need your Organization Details to get started"
    },
    {
      title: "Product Selection",
      content: "Select the product you are interested in"
    },
    {
      title: "Invite Others",
      content: ""
    },
    {
      title: "Analytics",
      content: ""
    },
    {
      title: "Pricing Details",
      content: "Choose the price which you find it suitable"
    }
  ];
    const handleNext = () => {
        console.log("Click Next");
        setTabIndex(tabIndex+1)
    }
    const handleCancel = () => {
        console.log("Click cancel");
        setTabIndex(tabIndex-1)
    }
    const handleTabChange = (key:string) =>{
        setTabIndex(parseInt(key))
    }

    const onCollapse = (collapsed:boolean) => {
        console.log(collapsed);
        setCollapsed(collapsed);
      };

     const toggle = () => {
      setCollapsed(!collapsed);
      };

    // return (<div>
        // <TabView tabObjects={tabViewProps} tabIndex={tabIndex} handleTabChange={handleTabChange} />
        // <div className={styles.buttonContainer}>
        //     <CustomButton name="Next" variant="filled" click={handleNext} />
        //     <CustomButton name="Cancel" variant="outline" click={handleCancel} />
        // </div>
    // </div>);

    return(      <Layout style={{ minHeight: '100vh' }}>
    <Sider trigger={null} collapsible collapsed={collapsed} onCollapse={onCollapse}>
      {/* <div className={styles.logo} /> */}
      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
        <Menu.Item key="1" icon={<PieChartOutlined />}>
          Profile
        </Menu.Item>
      </Menu>
    </Sider>
    <Layout className={styles["site-layout"]}>
      <Header className={styles["site-layout-background"]} style={{ padding: 0 }} title="Onboarding">
      {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: styles.trigger,
              onClick: toggle,
            })}
      </Header>
      <Content style={{ margin: '16px 16px 0 16px' }}>
        <div className={styles["site-layout-background"]} style={{ minHeight: 360 }}>
        <TabView tabObjects={tabViewProps} descriptionObj={descriptionProps} tabIndex={tabIndex} handleTabChange={handleTabChange} />
        </div>
      </Content>
    </Layout>
  </Layout>)
}

export default LandingPage;