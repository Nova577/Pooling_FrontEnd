import { FC } from 'react';
import TimePicker from 'react-time-picker'
import 'react-time-picker/dist/TimePicker.css';
import styles from './index.module.css'

interface Props {
  value?: string | null
  onChange?: (newValue: string | null) => void
}

const PTimePicker: FC<Props> = (props) => {
  return (
    <TimePicker
      className={styles.p_time_picker}
      maxDetail="minute"
      clearIcon={null}
      clockIcon={null}
      disableClock
      {...props}
    />
  )
}

export default PTimePicker
