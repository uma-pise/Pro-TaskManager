import React from 'react'
import StylesLeftSideBar from './LeftSideBar.module.css'
import Art from '../../../Assets/Art.png';

const LeftSideBar = () => {
    return (
        <div className={StylesLeftSideBar.leftSideBar} >
            <div>
                <div><img src={Art} alt='Art' style={{ width: '80%' }} /></div>
                <div className={StylesLeftSideBar.font}>
                    <div className={StylesLeftSideBar.font1}>Welcome aboard my friend</div>
                    <div className={StylesLeftSideBar.font2}>just a couple of clicks and we start</div>
                </div>
            </div>
        </div>
    )
}

export default LeftSideBar;