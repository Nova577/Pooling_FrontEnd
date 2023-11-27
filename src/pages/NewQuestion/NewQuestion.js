import styles from './NewQuestion.module.scss'
import {
  CalendarOutlined,
  ClockCircleOutlined,
  TeamOutlined,
  CrownOutlined,
  FolderAddOutlined,
  FileTextOutlined,
  FileAddOutlined,
  UploadOutlined,
  CarryOutOutlined,
  HistoryOutlined,
  EnvironmentOutlined,
} from '@ant-design/icons'
import { Modal, Select, Checkbox, Radio } from 'antd'
import { useState } from 'react'
import "./NewQuestion.css"

function NewQuestion () {
  const [ShowModal, setShowModal] = useState(false)
  const [ShowSetChoice, setShowSetChoice] = useState(false)
  // const [ShowSetChoice, setShowSetChoice] = useState(true)
  const [option1, setOption1] = useState(1)
  const [option2, setOption2] = useState(1)
  const [select1, setSelect1] = useState(1)
  const [select2, setSelect2] = useState(1)
  const handleOption1Minus = () => {
    if (option1 > 1) {
      setOption1(option1 - 1)
    }
  }
  const handleOption1Plus = () => {
    setOption1(option1 + 1)
  }

  const handleSelect1Minus = () => {
    if (select1 > 1) {
      setSelect1(select1 - 1)
    }
  }

  const handleSelect1Plus = () => {
    setSelect1(select1 + 1)
  }

  const handleOption2Minus = () => {
    if (option2 > 1) {
      setOption2(option2 - 1)
    }
  }

  const handleOption2Plus = () => {
    setOption2(option2 + 1)
  }

  const handleSelect2Minus = () => {
    if (select2 > 1) {
      setSelect2(select2 - 1)
    }
  }
  const handleSelect2Plus = () => {
    setSelect2(select2 + 1)
  }
  return (
    <div className={styles.NewQuestion}>
      {
        !ShowSetChoice && <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div className={styles.NewQuestionTop}>
            <div className={styles.NewQuestionTopLeft}>
              <div className={styles.NewQuestionTopLeftName}>
                <input placeholder='Add Research Name' className={styles.NewQuestionTopLeftNameInput}></input>
              </div>
              <div className={styles.NewQuestionTopLeftList}>
                <div className={styles.NewQuestionTopLeftItem}>
                  <CalendarOutlined className={styles.NewQuestionTopLeftItemIcon} />
                  <div className={styles.NewQuestionTopLeftItemCalendar}>Dec 27,2022</div>
                </div>
                <div className={styles.NewQuestionTopLeftItem}>
                  <ClockCircleOutlined className={styles.NewQuestionTopLeftItemIcon} />
                  <input className={styles.NewQuestionTopLeftItemInput} style={{ width: '0.1302rem', borderBottom: '0.01041rem solid #b8b4b2' }}></input> <span style={{
                    height: `${22 / 192}rem`,
                    fontSize: `${20 / 192}rem`,
                    fontFamily: 'ArialMT-, ArialMT',
                    fontWeight: 'normal',
                    color: '#b8b4b2',
                    lineHeight: `${24 / 192}rem`,
                    margin: `0 ${8 / 192}rem`
                  }}>-</span>
                  <input className={styles.NewQuestionTopLeftItemInput} style={{ width: '0.1302rem', borderBottom: '0.01041rem solid #b8b4b2' }}></input> <span style={{
                    height: `${22 / 192}rem`,
                    fontSize: `${20 / 192}rem`,
                    fontFamily: 'ArialMT-, ArialMT',
                    fontWeight: 'normal',
                    color: '#b8b4b2',
                    lineHeight: `${24 / 192}rem`,
                    marginLeft: `${5 / 192}rem`,
                  }}>minute</span>
                </div>
              </div>
              <div className={styles.NewQuestionTopLeftList}>
                <div className={styles.NewQuestionTopLeftItem}>
                  <TeamOutlined className={styles.NewQuestionTopLeftItemIcon} />
                  <input className={styles.NewQuestionTopLeftItemInput} placeholder='Head Count'></input>
                </div>
                <div className={styles.NewQuestionTopLeftItem}>
                  <CrownOutlined className={styles.NewQuestionTopLeftItemIcon} />
                  <input className={styles.NewQuestionTopLeftItemInput} placeholder='Reward for Each'></input>
                </div>
              </div>
            </div>
            <div className={styles.NewQuestionTopRight}>
              <img className={styles.NewQuestionTopRightImg}></img>
              <div className={styles.NewQuestionTopRightText}>Add Relevant Picture</div>
            </div>
          </div>
          <div className={styles.NewQuestionTitle} style={{ marginTop: '0.1302rem', marginBottom: '0px' }}> Research Details</div>
          <div className={styles.NewQuestionDetailList}>
            <div className={styles.NewQuestionDetailItem}>
              <FolderAddOutlined className={styles.NewQuestionDetailItemIcon} />
              <div className={styles.NewQuestionDetailText}>Questionnaire 1</div>
            </div>
            <div className={styles.NewQuestionDetailItem}>
              <FileTextOutlined className={styles.NewQuestionDetailItemIcon} />
              <div className={styles.NewQuestionDetailText}>Document 1</div>
            </div>
            <div className={styles.NewQuestionDetailItem}>
              <FileTextOutlined className={styles.NewQuestionDetailItemIcon} />
              <div className={styles.NewQuestionDetailText}>Document 3</div>
            </div>
            <div className={styles.NewQuestionDetailItem}>
              <FileAddOutlined className={styles.NewQuestionDetailItemIcon} />
              <div className={styles.NewQuestionDetailText}>Create Appointment</div>
            </div>
            <div className={styles.NewQuestionDetailItem}>
              <FileTextOutlined className={styles.NewQuestionDetailItemIcon} />
              <div className={styles.NewQuestionDetailText}>Document 2</div>
            </div>
            <div className={styles.NewQuestionDetailItem}>
              <UploadOutlined className={styles.NewQuestionDetailItemIcon} />
              <div className={styles.NewQuestionDetailText}>File Upload</div>
            </div>
          </div>
          <div className={styles.NewQuestionTitle}>Add Cooperators</div>
          <div className={styles.NewQuestionAdd}>
            <div className={styles.NewQuestionAddItem}>support@pooling.tools</div>
            <div className={styles.NewQuestionAddButton}>+</div>
          </div>
          <div className={styles.NewQuestionTitle}>Interviewees Preference</div>
          <div className={styles.NewQuestionAdd}>
            {/* <div className={styles.NewQuestionAddItem}>support@pooling.tools</div> */}
            <div className={styles.NewQuestionAddButton}>+</div>
          </div>
          <div className={styles.NewQuestionTitle}>Research Description</div>
          <div className={styles.NewQuestionTextAreaDiv}>
            <textarea className={styles.NewQuestionTextArea}></textarea>
            <div className={styles.NewQuestionTextAreaTip}>16/500</div>
          </div>
          <div className={styles.NewQuestionButtonList}>
            <div className={styles.NewQuestionButtonItem} onClick={() => {
              setShowModal(true)
            }} style={{ backgroundColor: '#f4eeea' }}>Save</div>
            <div className={styles.NewQuestionButtonItem} onClick={() => {
              setShowSetChoice(true)
            }}>Submit</div>
          </div>
        </div>
      }

      {
        ShowSetChoice && <div style={{ display: 'flex', flexDirection: 'column', padding: '0px 0.15625rem' }}>
          <div className={styles.NewQuestion2BigTitle}>Untitled Questionnaire</div>
          <div className={styles.NewQuestion2SmallTitle}>Description starts here...</div>
          <div className={styles.NewQuestion2Item} style={{ marginTop: '0.3125rem' }}>
            <div className={styles.NewQuestion2ItemLeft}>
              Question 1 Text type
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', flex: '1' }}>
              <div className={styles.NewQuestion2ItemRight}>
                <Select
                  bordered={false}
                  defaultValue="Text"
                  allowClear
                  options={[
                    {
                      value: 'Text',
                      label: 'Text',
                    },
                    {
                      value: 'Choice',
                      label: 'Choice',
                    },
                  ]}
                  className={styles.NewQuestion2ItemRightSelect}
                  style={{ width: '100%', height: '100%' }}
                >
                </Select>
              </div>
              <div className={styles.NewQuestion2ItemRequired}>
                <Checkbox style={{ backgroundColor: '#eaddd6' }}>Required</Checkbox>
              </div>
            </div>
          </div>
          <div className={styles.NewQuestion2Item} >
            <div className={styles.NewQuestion2ItemLeft}>
              Question 2 Text type
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', flex: '1' }}>
              <div className={styles.NewQuestion2ItemRight}>
                <Select
                  bordered={false}
                  defaultValue="Text"
                  allowClear
                  options={[
                    {
                      value: 'Text',
                      label: 'Text',
                    },
                    {
                      value: 'Choice',
                      label: 'Choice',
                    },
                  ]}
                  className={styles.NewQuestion2ItemRightSelect}
                  style={{ width: '100%', height: '100%' }}
                >
                </Select>
              </div>
              <div className={styles.NewQuestion2ItemRequired}>
                <Checkbox style={{ backgroundColor: '#eaddd6' }}>Required</Checkbox>
              </div>
            </div>
          </div>
          <div className={styles.NewQuestion2Item} >
            <div>
              <div className={styles.NewQuestion2ItemLeft}>
                Question 3 only one select
              </div>
              <div className={styles.NewQuestion2ItemOption}>
                <div className={styles.NewQuestion2ItemOptionTitle}>Option</div>
                <div className={styles.NewQuestion2ItemOptionButton} style={{ marginLeft: '0.05208rem' }} onClick={handleOption1Minus}>
                  -
                </div>
                {option1}
                <div className={styles.NewQuestion2ItemOptionButton} onClick={handleOption1Plus}>
                  +
                </div>
                <div className={styles.NewQuestion2ItemOptionTitle}>Select</div>
                <div className={styles.NewQuestion2ItemOptionButton} style={{ marginLeft: '0.05208rem' }} onClick={handleSelect1Minus}>
                  -
                </div>
                {select1}
                <div className={styles.NewQuestion2ItemOptionButton} onClick={handleSelect1Plus}>
                  +
                </div>
              </div>
              <div className={styles.NewQuestion2ItemRadio}>
                <Radio.Group>
                  <Radio value={1} className={styles.RadioItem}>option 1</Radio>
                  <Radio value={2} className={styles.RadioItem}>option 2</Radio>
                  <Radio value={3} className={styles.RadioItem}>option 3</Radio>
                </Radio.Group>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', flex: '1' }}>
              <div className={styles.NewQuestion2ItemRight}>
                <Select
                  bordered={false}
                  defaultValue="Choice"
                  allowClear
                  options={[
                    {
                      value: 'Text',
                      label: 'Text',
                    },
                    {
                      value: 'Choice',
                      label: 'Choice',
                    },
                  ]}
                  className={styles.NewQuestion2ItemRightSelect}
                  style={{ width: '100%', height: '100%' }}
                >
                </Select>
              </div>
              <div className={styles.NewQuestion2ItemRequired}>
                <Checkbox style={{ backgroundColor: '#eaddd6' }}>Required</Checkbox>
              </div>
            </div>
          </div>
          <div className={styles.NewQuestion2Item} >
            <div>
              <div className={styles.NewQuestion2ItemLeft}>
                Question 3 only one select
              </div>
              <div className={styles.NewQuestion2ItemOption}>
                <div className={styles.NewQuestion2ItemOptionTitle}>Option</div>
                <div className={styles.NewQuestion2ItemOptionButton} style={{ marginLeft: '0.05208rem' }} onClick={handleOption2Minus}>
                  -
                </div>
                {option2}
                <div className={styles.NewQuestion2ItemOptionButton} onClick={handleOption2Plus}>
                  +
                </div>
                <div className={styles.NewQuestion2ItemOptionTitle}>Select</div>
                <div className={styles.NewQuestion2ItemOptionButton} style={{ marginLeft: '0.05208rem' }} onClick={handleSelect2Minus}>
                  -
                </div>
                {select2}
                <div className={styles.NewQuestion2ItemOptionButton} onClick={handleSelect2Plus}>
                  +
                </div>
              </div>
              <div className={styles.NewQuestion2ItemRadio}>
                <Radio.Group>
                  <Radio value={1} className={styles.RadioItem}>option 1</Radio>
                  <Radio value={2} className={styles.RadioItem}>option 2</Radio>
                  <Radio value={3} className={styles.RadioItem}>option 3</Radio>
                </Radio.Group>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', flex: '1' }}>
              <div className={styles.NewQuestion2ItemRight}>
                <Select
                  bordered={false}
                  defaultValue="Choice"
                  allowClear
                  options={[
                    {
                      value: 'Text',
                      label: 'Text',
                    },
                    {
                      value: 'Choice',
                      label: 'Choice',
                    },
                  ]}
                  className={styles.NewQuestion2ItemRightSelect}
                  style={{ width: '100%', height: '100%' }}
                >
                </Select>
              </div>
              <div className={styles.NewQuestion2ItemRequired}>
                <Checkbox style={{ backgroundColor: '#eaddd6' }}>Required</Checkbox>
              </div>
            </div>
          </div>
          <div className={styles.NewQuestion2LastButton}>
            Add
          </div>
          <div className={styles.NewQuestion2LastButton} style={{ marginLeft: 'auto' }} onClick={() => {
            setShowSetChoice(false)
          }}>
            Save
          </div>
        </div>
      }

      {
        ShowModal && <Modal visible={ShowModal} width={`${2.7083}rem`} className={styles.NewQuestionShowDetailModal} footer={null} onCancel={() => setShowModal(false)} closeIcon={null} maskClosable centered>
          <div >
            <div className={styles.ShowDetailModalTitle}>
              <CarryOutOutlined className={styles.ShowDetailModalTitleIcon} />
              <div className={styles.ShowDetailModalTitleText}>Daily sugar consumption Interview</div>
            </div>
            <div className={styles.ShowDetailModalLabelList}>
              <div className={styles.ShowDetailModalLabelItem} style={{ width: '0.5729rem' }}>
                <CalendarOutlined className={styles.ShowDetailModalLabelItemIcon} />
                <div className={styles.ShowDetailModalLabelItemText}>Dec 7th</div>
              </div>
              <div className={styles.ShowDetailModalLabelItem}>
                <HistoryOutlined className={styles.ShowDetailModalLabelItemIcon} />
                <div className={styles.ShowDetailModalLabelItemText}>14:00 - </div>
                <input className={styles.ShowDetailModalLabelItemInput} style={{ marginLeft: '0.05208rem', width: '0.234375rem' }}></input>
              </div>
              <div className={styles.ShowDetailModalLabelItem} style={{ width: '0.5729rem' }}>
                <TeamOutlined className={styles.ShowDetailModalLabelItemIcon} />
                <input className={styles.ShowDetailModalLabelItemInput} style={{ marginLeft: '0.05208rem', width: '0.1302rem' }}></input>
                <div className={styles.ShowDetailModalLabelItemText} style={{ marginLeft: '0.01041rem' }}>Left</div>
              </div>
            </div>
            <div className={styles.ShowDetailModalInformation}>
              <div className={styles.ShowDetailModalInformationLeft}>
                <EnvironmentOutlined className={styles.ShowDetailModalInformationLeftIcon} />
              </div>
              <div className={styles.ShowDetailModalInformationRight}>
                <div className={styles.ShowDetailModalInformationRightTitle}>Meeting Information </div>
                <div className={styles.ShowDetailModalInformationRightItem}>Link:https://applezoomus/94431732820</div>
                <div className={styles.ShowDetailModalInformationRightItem}>Meeting ID: 982 3991 9249 </div>
                <div className={styles.ShowDetailModalInformationRightItem}>Passcode: 205056</div>
              </div>
            </div>
            <div className={styles.ShowDetailModalDeseription}>
              <div className={styles.ShowDetailModalDeseriptionTitle}>
                Deseription
              </div>
              <div className={styles.ShowDetailModalDeseriptionContent}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porta in libero convallis fringilla. Aenean pretium nunc in dolor porttitor consectetur. Nam nisl quam, tempor ut mollis tristique, sollicitudin quis leo. Suspendisse sed interdum justo. Vivamus a augue id lectus egestas interdum id ut dolor. Aenean aliquet interdum quam, ut consectetur ante iaculis eget. Pellentesque quam velit, cursus nec nisl quis,
              </div>
            </div>
          </div>
        </Modal>
      }
    </div>
  )
}

export default NewQuestion