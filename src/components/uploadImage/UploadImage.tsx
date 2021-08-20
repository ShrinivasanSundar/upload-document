import React, { ChangeEventHandler, useEffect, useState } from "react";
import styles from "./UploadImage.module.css";
import { PlusCircleOutlined } from "@ant-design/icons"
import { Modal } from 'antd';
import CustomButton from "../button/CustomButton";
import CustomTable from "../table/CustomTable";
import Lightbox from 'react-image-lightbox';

interface IFilesUpload {
    [key: string]: File | null
}
interface ITableData {
    image: any,
    name: string
    key: number
}

const UploadImage: React.FC<any> = () => {
    const [files, setFiles] = useState<IFilesUpload>({});
    const [fileCount, setFileCount] = useState<number>(0);
    const [openPreview, setOpenPreview] = useState<boolean>(false);
    const [imgIndex,setImgIndex] = useState<number>(0);
    const [imgArr,setImgArr] = useState<Array<string>>([]);
    const [tableContent, setTableContent] = useState<Array<ITableData>>([])
    const tableColumns = [
        {
            title: 'Image',
            dataIndex: 'image',
            key: 'image',
            render: (image: any,record:any) => (
                <div onClick={()=>{previewImage(record.key)}}>
                    <img className={styles.thumbnail} src={image} alt="" />
                </div>
            ),
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Action',
            key: 'action',
            render: (record: any) => (
                <>
                    <CustomButton name="Delete" variant="filled" click={() => {
                        deleteImage(record.name)
                    }} />
                </>
            ),
        },
    ];

    useEffect(() => {
        if (Object.keys(files).length>0) {
            console.log("File content changed");
            let key = 0;
            let contentArr = [];
            let imgUrls = [];
            for (let selectedFile in files) {
                console.log(selectedFile)
                const content = {
                    key: key,
                    name: selectedFile,
                    image: URL.createObjectURL(files[selectedFile])
                }
                key++;
                contentArr.push(content);
                imgUrls.push(content.image);
            }
            setTableContent(contentArr);
            setImgArr(imgUrls);
        }else{
            console.log("File content empty")
            setTableContent([])
        }
    }, [files])

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const previewImage = (key:number) =>{
        setImgIndex(key)
        setOpenPreview(true);
    }

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    const deleteImage = (name: any) => {
        if (files[name]) {
            delete (files[name])
            console.log("File content ", files);
            setFiles({ ...files });
            setFileCount(fileCount - 1);
        }
    }
    const addFiles = (selectedFile: File) => {
        console.log(selectedFile.name);
        const fileObj = { ...files, [selectedFile.name]: selectedFile }
        setFiles(fileObj);
    }



    const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        const { files: newFiles } = e.target;
        if (newFiles && newFiles.length > 0) {
            setFileCount(newFiles.length + fileCount);
            for (let file of newFiles) {
                addFiles(file)
            }
        }
    }



    return (<div className={styles.uploadWrapper}>
        <h2 className={styles.subTitle}>Upload a document</h2>
        <div className={styles.uploadContainer}>
            <div className={styles.inputContainer}>
                <input className={styles.inputFile} id="inputFile" type="file" multiple onChange={handleChange} />
                <label htmlFor="inputFile"><PlusCircleOutlined style={{
                    fontSize: '3rem',
                    color: '#c2c2c2'
                }} /></label>
            </div>
            <nav ><h3 className={styles.documentCount}>{fileCount} Selected Document</h3></nav>
        </div>
        <CustomButton name="View Images" variant="filled" click={showModal} />
        <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
            <CustomTable columns={tableColumns} data={tableContent} />
        </Modal>
        {openPreview && (
          <Lightbox
            mainSrc={imgArr[imgIndex]}
            nextSrc={imgArr[(imgIndex + 1) % imgArr.length]}
            prevSrc={imgArr[(imgIndex + imgArr.length - 1) % imgArr.length]}
            onCloseRequest={() => setOpenPreview(false)}
            onMovePrevRequest={() =>
              setImgIndex((imgIndex + imgArr.length - 1) % imgArr.length)
            }
            onMoveNextRequest={() =>
                setImgIndex((imgIndex + 1) % imgArr.length)
            }
          />
        )}
        </div>)
}

export default UploadImage;