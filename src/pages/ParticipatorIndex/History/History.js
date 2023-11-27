import styles from './History.module.scss'
import {
  SearchOutlined,
  ReadOutlined,
  EnvironmentOutlined,
  FieldTimeOutlined,
  DollarOutlined,
  LeftOutlined,
} from '@ant-design/icons'
import { useState } from 'react'
import { Modal } from 'antd'
function History () {

  const [ShowModal, setShowModal] = useState(false)
  return (
    <div className={styles.History}>
      <div className={styles.HistorySearchDiv}>
        <SearchOutlined className={styles.HistorySearchDivIcon} />
        <input className={styles.HistorySearchDivInput} placeholder='Searching Keyword Here...'></input>
      </div>
      <div className={styles.HistoryListDiv}>
        <div className={styles.HistoryList}>
          {[...Array(20)].map((_, index) => (
            <div
              className={styles.HistoryItem}
              key={index}
              style={index % 2 === 0 ? { marginRight: '0.078125rem' } : null}
              onClick={() => setShowModal(true)}
            >
              <img className={styles.HistoryItemImg} />
              <div className={styles.HistoryItemRight}>
                <div className={styles.HistoryItemTitle}>Daily Sugar Consumption</div>
                <div className={styles.HistoryItemLabelList}>
                  <div className={styles.HistoryItemLabelItem}>Usability</div>
                  <div className={styles.HistoryItemLabelItem}>High pay</div>
                  <div className={styles.HistoryItemLabelItem}>Consumer Electronic</div>
                </div>
                <div className={styles.HistoryItemStatus}>In Progress</div>
              </div>
            </div>
          ))}
        </div>
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
        <div className={styles.ModalDeseription}>
          <div className={styles.ModalDeseriptionTitle}>Deseription</div>
          <div className={styles.ModalDeseriptionContent}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porta in libero convallis fringilla. Aenean pretium nunc in dolor porttitor consectetur. Nam nisl quam, tempor ut mollis tristique, sollicitudin quis leo. Suspendisse sed interdum justo. Vivamus</div>
        </div>
        <div className={styles.ModalButtonList}>
          <button className={styles.ModalButtonLeft}>
            <LeftOutlined />Detail
          </button>
          <button className={styles.ModalButtonRight}>I'm In</button>
        </div>
      </Modal>}
    </div>
  )
}
export default History