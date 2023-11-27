import styles from './ProfileEdit.module.scss'
import { Select } from 'antd'
import { useState } from 'react'

function ProfileEdit () {

  const [PetselectedOption, setPetSelectedOption] = useState(null)
  const [MedicalselectedOption, setMedicalSelectedOption] = useState(null)

  const handlePetOptionClick = (option) => {
    if (option === PetselectedOption) {
      // 已经选中，则不执行任何操作
      return
    }
    setPetSelectedOption(option)
  }

  const handleMedicalOptionClick = (option) => {
    if (option === MedicalselectedOption) {
      // 已经选中，则不执行任何操作
      return
    }
    setMedicalSelectedOption(option)
  }


  return (
    <div className={styles.ProfileEdit}>
      <div className={styles.ProfileEditTop}>
        <div className={styles.ProfileEditTopUploadImg}></div>
        <div className={styles.ProfileEditTopInformation}>
          <div className={styles.ProfileEditTopItem}>E-mail : researcher@pooling.tools</div>
          <div className={styles.ProfileEditTopItem} style={{ marginTop: '0.078125rem' }}>Account Number : 865198251</div>
          <div className={styles.ProfileEditTopName}>
            <div className={styles.ProfileEditTopNameItem}>
              <div className={styles.ProfileEditTopNameTitle}>First Name</div>
              <input className={styles.ProfileEditTopNameInput}></input>
            </div>
            <div className={styles.ProfileEditTopNameItem} style={{ marginLeft: '0.1041rem' }}>
              <div className={styles.ProfileEditTopNameTitle}>Last Name</div>
              <input className={styles.ProfileEditTopNameInput}></input>
            </div>
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'row', marginTop: '0.2083rem' }}>
        <div className={styles.SecondStepItem}>
          <div className={styles.SecondStepItemTitle}>Industy</div>
          <Select className={styles.SecondStepItemSelect} bordered={false}></Select>
        </div>
        <div className={styles.SecondStepItem} style={{ marginLeft: '0.1041rem' }}>
          <div className={styles.SecondStepItemTitle}>Position</div>
          <Select className={styles.SecondStepItemSelect} bordered={false}></Select>
        </div>
      </div>

      <div>
        <div className={styles.SecondStepSmallTitle}>Pets</div>
        <div className={styles.SecondStepItem} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <div className={styles.SecondStepItemChoose} style={{
            borderTopLeftRadius: '0.1041rem',
            borderBottomLeftRadius: '0.1041rem',
            border: PetselectedOption === 'Yes' ? '0.01041rem solid black' : 'none',
            fontWeight: PetselectedOption === 'Yes' ? 'bold' : 'normal',
          }}
            onClick={() => handlePetOptionClick('Yes')}>Yes</div>
          {PetselectedOption != 'No' && PetselectedOption != 'Yes' && <div className={styles.SecondStepItemBorder}></div>}
          <div className={styles.SecondStepItemChoose} style={{
            border: PetselectedOption === 'No' ? '0.01041rem solid black' : 'none',
            fontWeight: PetselectedOption === 'No' ? 'bold' : 'normal',
          }}
            onClick={() => handlePetOptionClick('No')}>No</div>
          {PetselectedOption != 'No' && <div className={styles.SecondStepItemBorder}></div>}
          <div className={styles.SecondStepItemAdd}>
            <div className={styles.SecondStepItemAddDemo}>#cat</div>
            <div className={styles.SecondStepItemAddButton}>+</div>
          </div>
        </div>
      </div>

      <div>
        <div className={styles.SecondStepSmallTitle}>Medical history</div>
        <div className={styles.SecondStepItem} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <div className={styles.SecondStepItemChoose} style={{
            borderTopLeftRadius: '0.1041rem',
            borderBottomLeftRadius: '0.1041rem',
            border: MedicalselectedOption === 'Yes' ? '0.01041rem solid black' : 'none',
            fontWeight: MedicalselectedOption === 'Yes' ? 'bold' : 'normal',
          }}
            onClick={() => handleMedicalOptionClick('Yes')}>Yes</div>
          {MedicalselectedOption != 'No' && MedicalselectedOption != 'Yes' && <div className={styles.SecondStepItemBorder}></div>}
          <div className={styles.SecondStepItemChoose} style={{
            border: MedicalselectedOption === 'No' ? '0.01041rem solid black' : 'none',
            fontWeight: MedicalselectedOption === 'No' ? 'bold' : 'normal',
          }}
            onClick={() => handleMedicalOptionClick('No')}>No</div>
          {MedicalselectedOption != 'No' && <div className={styles.SecondStepItemBorder}></div>}
          <div className={styles.SecondStepItemAdd}>
            <div className={styles.SecondStepItemAddDemo}>#cat</div>
            <div className={styles.SecondStepItemAddButton}>+</div>
          </div>
        </div>
      </div>

      <div>
        <div className={styles.SecondStepSmallTitle}>Other related tags</div>
        <div className={styles.SecondStepItem} style={{ display: 'flex', flexDirection: 'row' }}>
          <div className={styles.SecondStepItemAdd} style={{ alignItems: 'center' }}>
            <div className={styles.SecondStepItemAddDemo}>#cat</div>
            <div className={styles.SecondStepItemAddButton}>+</div>
          </div>
        </div>
      </div>

      <div>
        <div className={styles.SecondStepSmallTitle}>Describe Yourself</div>
        <div className={styles.ProfileEditTextAreaDiv}>
          <textarea className={styles.ProfileEditTextArea}></textarea>
        </div>
      </div>
    </div >
  )
}
export default ProfileEdit