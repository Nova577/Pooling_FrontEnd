import React from 'react'
import styles from './Components.module.scss'

const ClickButtons = [
  'Contact Sale',
  'About Us',
  'Careers',
  'Legal Info'
]

const logo = require('../assets/back_logo.png')
const linkin = require('../assets/link.png')
const instgram = require('../assets/instgram.png')
const email = require('../assets/email.png')
const twitter = require('../assets/twitter.png')

function Footer () {
  return (
    <div className={styles.footer}>
      <div className={styles.footerLeft}>
        <div className={styles.footerLeftTitle}>Get the freshest Pooling News</div>
        <div className={styles.footerLeftCenter}>
          <div className={styles.footerLeftInputDiv}>
            <input className={styles.footerLeftInput} placeholder='Your email here'></input>
          </div>
          <button className={styles.footerLeftInputButton}>Subscribe</button>
        </div>
        <div className={styles.footerLeftClickButtonList}>
          {ClickButtons.map((item, index) => (
            <div key={index} className={styles.footerLeftClickButtonItem}>{item}</div>
          ))}
        </div>
        <div className={styles.footerLeftCopyright}>© Pooling 2023 All Rights Reserved</div>
      </div>
      <div className={styles.footerRight}>
        <div className={styles.footerRightTop}>
          <div className={styles.footerRightTopLeft}>
            <div className={styles.Pooling}>Pooling</div>
            <div className={styles.SeetheUnseen}>See the Unseen.</div>
          </div>
          <div className={styles.footerRightTopRight}>
            <img src={logo} className={styles.logoImg}></img>
          </div>
        </div>
        <div className={styles.footerRightBottom}>
          <img src={twitter} className={styles.footerRightBottomItem}></img>
          <img src={linkin} className={styles.footerRightBottomItem}></img>
          <img src={instgram} className={styles.footerRightBottomItem}></img>
          <img src={email} className={styles.footerRightBottomItem}></img>
        </div>
      </div>
    </div>
  )
}

export default Footer