import styles from './Question.module.scss'
import { Radio, Checkbox } from 'antd'
import './Question.css'
function Question () {
  return (
    <div className={styles.Question}>
      <div className={styles.QuestionBigTitle}>Daily sugar consumption</div>
      <div className={styles.QuestionSmallTitle}>Lorem ipsum dolor sit amet,consectetur adipiscing elit.Nuncporta in libero
        convallis fringilla.Aenean pretium nunc in dolor porttitor consectetur,</div>
      <div className={styles.QuestionItemTitle}>1. Question 1 Text type</div>
      <div className={styles.QuestionInputDiv}>
        <input className={styles.QuestionInput}></input>
      </div>
      <div className={styles.QuestionItemTitle}>2. Question 2 Text type</div>
      <div className={styles.QuestionInputDiv}>
        <input className={styles.QuestionInput}></input>
      </div>
      <div className={styles.QuestionItemTitle}>3. Question 3 only one select</div>
      <div>
        <Radio.Group>
          <Radio value={1} style={{
            height: `${28 / 192}rem`,
            fontSize: `${21 / 192}rem`,
            fontFamily: 'PlayfairDisplay-Regular-, PlayfairDisplay-Regular',
            fontWeight: 'normal',
            color: '#141414',
            lineHeight: `${26 / 192}rem`,
          }}>option1</Radio>
          <Radio value={2} style={{
            height: `${28 / 192}rem`,
            fontSize: `${21 / 192}rem`,
            fontFamily: 'PlayfairDisplay-Regular-, PlayfairDisplay-Regular',
            fontWeight: 'normal',
            color: '#141414',
            lineHeight: `${26 / 192}rem`,
          }}>option2</Radio>
          <Radio value={3} style={{
            height: `${28 / 192}rem`,
            fontSize: `${21 / 192}rem`,
            fontFamily: 'PlayfairDisplay-Regular-, PlayfairDisplay-Regular',
            fontWeight: 'normal',
            color: '#141414',
            lineHeight: `${26 / 192}rem`,
          }}>option3</Radio>
        </Radio.Group>
      </div>
      <div className={styles.QuestionItemTitle}>4. Question 4 multiple select</div>
      <div>
        <Checkbox style={{
          height: `${28 / 192}rem`,
          fontSize: `${21 / 192}rem`,
          fontFamily: 'PlayfairDisplay-Regular-, PlayfairDisplay-Regular',
          fontWeight: 'normal',
          color: '#141414',
          lineHeight: `${26 / 192}rem`,
          marginRight: `${8 / 192}rem`
        }}>option1</Checkbox>
        <Checkbox style={{
          height: `${28 / 192}rem`,
          fontSize: `${21 / 192}rem`,
          fontFamily: 'PlayfairDisplay-Regular-, PlayfairDisplay-Regular',
          fontWeight: 'normal',
          color: '#141414',
          lineHeight: `${26 / 192}rem`,
          marginRight: `${8 / 192}rem`
        }}>option2</Checkbox>
        <Checkbox style={{
          height: `${28 / 192}rem`,
          fontSize: `${21 / 192}rem`,
          fontFamily: 'PlayfairDisplay-Regular-, PlayfairDisplay-Regular',
          fontWeight: 'normal',
          color: '#141414',
          lineHeight: `${26 / 192}rem`,
        }}>option3</Checkbox>
      </div>
      <div className={styles.QuestionItemTitle}>5. Question 2 Text type</div>
      <div className={styles.QuestionInputDiv}>
        <input className={styles.QuestionInput}></input>
      </div>
      <div className={styles.QuestionItemTitle}>6. Question 2 Text type</div>
      <div className={styles.QuestionInputDiv}>
        <input className={styles.QuestionInput}></input>
      </div>
      <div className={styles.QuestionButton}>Submit</div>
    </div>
  )
}

export default Question