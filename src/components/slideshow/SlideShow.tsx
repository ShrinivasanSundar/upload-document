import React from 'react'
import { Carousel } from 'antd';
import styles from './SlideShow.module.css'
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';


const SlideShow: React.FC<any> = (props) => {
    const { slideShowObjs } = props;
    return (
    <div className={styles.carousel}>
    <Carousel draggable={true} arrows nextArrow={<ArrowRightOutlined />} prevArrow={<ArrowLeftOutlined/>} autoplay>
        {slideShowObjs.map((obj: any, i: Number) => {
            return (
                <div key={`slide-${i}`}>
                    <div className={styles.slideShow} style={{ background: `url(/asset/${obj.image})`,
                    backgroundPosition: "top",
                    backgroundSize: "80vh",
                    backgroundRepeat: "no-repeat"}}>
                        <h3>{obj.content}</h3>
                    </div>
                </div>)
        })}
    </Carousel>
    </div>)

}

export default SlideShow;