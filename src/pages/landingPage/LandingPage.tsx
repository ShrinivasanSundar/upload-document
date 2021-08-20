import React from "react";
import TabView from "../../components/tabs/TabView";
import SelectFile from "../../components/selectFile/SelectFile";
import CustomButton from "../../components/button/CustomButton";
import styles from "./LandingPage.module.scss";
import UploadImage from "../../components/uploadImage/UploadImage";
import { useState } from "react";

const LandingPage: React.FC<any> = () => {
    const [tabIndex,setTabIndex]=useState(0);
    const tabViewProps = [{
        header: "Get Started",
        content: <SelectFile />
    }, {
        header: "Select File",
        content: <UploadImage />
    },
    {
        header: "Upload File",
        content: <SelectFile />
    }]
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

    return (<div>
        <TabView tabObjects={tabViewProps} tabIndex={tabIndex} handleTabChange={handleTabChange} />
        <div className={styles.buttonContainer}>
            <CustomButton name="Next" variant="filled" click={handleNext} />
            <CustomButton name="Cancel" variant="outline" click={handleCancel} />
        </div>
    </div>);
}

export default LandingPage;