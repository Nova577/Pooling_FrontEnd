import styles from './Discovery.module.scss'
import {
  SearchOutlined,
  ReadOutlined,
  EnvironmentOutlined,
  FieldTimeOutlined,
  DollarOutlined,
  LeftOutlined,
  FileDoneOutlined,
  FileProtectOutlined,
  FileTextOutlined
} from '@ant-design/icons'
import { useState } from 'react'
import { Modal } from 'antd'
import './Discovery.css'
function Discovery () {
  const [ShowModal, setShowModal] = useState(false)
  const [ShowDetail, setShowDetail] = useState('back')

  const items = [
    {
      title: "Usability Research",
      labels: ["Usability", "High pay", "Consumer Electronic"],
      smallItems: [
        { icon: <ReadOutlined />, text: "Harvard University" },
        { icon: <EnvironmentOutlined />, text: "Online" },
        { icon: <FieldTimeOutlined />, text: "20-25Minutes" },
        { icon: <DollarOutlined />, text: "$15" }
      ]
    }
  ]

  const renderedItems = items.map((item, index) => (
    <div className={styles.DiscoveryItem} key={index}>
      <img className={styles.DiscoveryItemImg} />
      <div className={styles.DiscoveryItemRight}>
        <div className={styles.DiscoveryItemRightTitle}>{item.title}</div>
        <div className={styles.DiscoveryItemRightLabelList}>
          {item.labels.map((label, labelIndex) => (
            <div className={styles.DiscoveryItemRightLabelItem} key={labelIndex}>
              {label}
            </div>
          ))}
        </div>
        {item.smallItems.map((smallItem, smallItemIndex) => (
          <div className={styles.DiscoveryItemRightSmallItem} key={smallItemIndex}>
            <span className={styles.DiscoveryItemRightSmallItemIcon}>
              {smallItem.icon}
            </span>
            <span className={styles.DiscoveryItemRightSmallItemText}>
              {smallItem.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  ))

  const renderedList = []
  for (let i = 0; i < 20; i++) {
    renderedList.push(renderedItems)
  }
  const toggleShowDetail = () => {
    if (ShowDetail === 'back') {
      setShowDetail('detail')
    } else {
      setShowDetail('back')
    }
  }
  return (
    <div className={styles.Discovery}>
      <div className={styles.DiscoverySearchDiv}>
        <SearchOutlined className={styles.DiscoverySearchDivIcon} />
        <input className={styles.DiscoverySearchDivInput} placeholder='Searching Keyword Here...'></input>
      </div>
      <div className={styles.DiscoveryList}>
        {renderedList.map((item, index) => (
          <div style={{ marginRight: index % 2 === 0 ? '0.15625rem' : '' }} key={index} onClick={() => {
            setShowModal(true)
          }}>
            {item}
          </div>
        ))}
      </div>

      {ShowModal && <Modal visible={ShowModal} width={`${2.7083}rem`} className={styles.ShowDetailModal} footer={null} onCancel={() => setShowModal(false)} closeIcon={null} maskClosable centered>
        <div className={styles.ModalTop}>
          <image className={styles.ModalTopImg}></image>
          <div className={styles.ModalTopRight}>
            <div className={styles.ModalTopRightTitle}>Usability Research</div>
            <div className={styles.ModalTopRightItem}>
              <ReadOutlined className={styles.ModalTopRightItemIcon} />
              <div className={styles.ModalTopRightItemText}>Apple Inc</div>
            </div>
            <div className={styles.ModalTopRightItem}>
              <EnvironmentOutlined className={styles.ModalTopRightItemIcon} />
              <div className={styles.ModalTopRightItemText}>Online</div>
            </div>
            <div className={styles.ModalTopRightItem}>
              <FieldTimeOutlined className={styles.ModalTopRightItemIcon} />
              <div className={styles.ModalTopRightItemText}>20-25Minutes</div>
            </div>
            <div className={styles.ModalTopRightItem}>
              <DollarOutlined className={styles.ModalTopRightItemIcon} />
              <div className={styles.ModalTopRightItemText}>$15</div>
            </div>
          </div>
        </div>
        <div className={styles.ModalLabelList}>
          <div className={styles.ModalLabelItem}>Usability</div>
          <div className={styles.ModalLabelItem}>High pay</div>
          <div className={styles.ModalLabelItem}>Consumer Electronic</div>
        </div>
        {
          ShowDetail == 'back' &&
          <div className={styles.ModalDeseription}>
            <div className={styles.ModalDeseriptionTitle}>Deseription</div>
            <div className={styles.ModalDeseriptionContent}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porta in libero convallis fringilla. Aenean pretium nunc in dolor porttitor consectetur. Nam nisl quam, tempor ut mollis tristique, sollicitudin quis leo. Suspendisse sed interdum justo. Vivamus</div>
          </div>
        }
        {
          ShowDetail == 'detail' &&
          <div>
            <div className={styles.ModalDetailItem}>
              <div className={styles.ModalDetailItemTop}>
                <FileDoneOutlined className={styles.ModalDetailItemTopIcon} />
                <div className={styles.ModalDetailItemTopTitle}>Usability research Questionnaire</div>
              </div>
              <div className={styles.ModalDetailItemContent}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porta in libero convallis fringilla. Aenean pretium nunc in dolor porttitor consectetur. Nam nisl quam, tempor ut mollis tristique, sollicitudin quis leo. Suspendisse sed interdum justo. Vivamus</div>
            </div>
            <div className={styles.ModalDetailItem}>
              <div className={styles.ModalDetailItemTop}>
                <FileProtectOutlined className={styles.ModalDetailItemTopIcon} />
                <div className={styles.ModalDetailItemTopTitle}>Usability research Appointment</div>
              </div>
              <div className={styles.ModalDetailItemContent}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porta in libero convallis fringilla. Aenean pretium nunc in dolor porttitor consectetur. Nam nisl quam, tempor ut mollis tristique, sollicitudin quis leo. Suspendisse sed interdum justo. Vivamus</div>
            </div>
            <div className={styles.ModalDetailItem} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', height: '0.46875rem' }}>
              <div className={styles.ModalDetailItemDoc} style={{ marginLeft: '0.15625rem' }}>
                <FileTextOutlined className={styles.ModalDetailItemDocIcon} />
                <div className={styles.ModalDetailItemDocIconText}>Document</div>
              </div>
              <div className={styles.ModalDetailItemDoc}>
                <FileTextOutlined className={styles.ModalDetailItemDocIcon} />
                <div className={styles.ModalDetailItemDocIconText}>Document</div>
              </div>
              <div className={styles.ModalDetailItemDoc}>
                <FileTextOutlined className={styles.ModalDetailItemDocIcon} />
                <div className={styles.ModalDetailItemDocIconText}>Document</div>
              </div>
              <div className={styles.ModalDetailItemDoc} style={{ marginRight: '0.15625rem' }}>
                <FileTextOutlined className={styles.ModalDetailItemDocIcon} />
                <div className={styles.ModalDetailItemDocIconText}>Document</div>
              </div>
            </div>
          </div>
        }
        <div className={styles.ModalButtonList}>
          <button className={styles.ModalButtonLeft} onClick={toggleShowDetail}>
            <span>
              {ShowDetail === 'back' ? <><LeftOutlined />Detail</> : <><LeftOutlined />Back</>}
            </span>
          </button>
          <button className={styles.ModalButtonRight}>Accept</button>

        </div>
      </Modal>}
    </div>
  )
}
export default Discovery