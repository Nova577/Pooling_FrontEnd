import { FC } from "react"
import PModal from "../common/PModal"
import PCard from "../common/PCard"
import PButton from "../common/PButton"
import CalendarIcon from "../common/Icons/Calendar"
import PTag from "../common/PTag"
import locationIconSrc from '@/assets/location_icon.svg'
import { Controller, useForm } from "react-hook-form"
import PTextarea from "../common/PTextarea"
import DatePicker from "react-datepicker"

import "react-datepicker/dist/react-datepicker.css";
import dayjs from "dayjs"
import PTimePicker from "../PTimePicker"

interface FormValue {
  meetingDateTimestamp: number
  meetingStartTime: string | null
  meetingEndTime: string | null
  meetingInformation: string
  meetingDescription: string
}

const initFormValue: FormValue = {
  meetingDateTimestamp: dayjs().valueOf(),
  meetingDescription: '',
  meetingStartTime: null,
  meetingEndTime: null,
  meetingInformation: '',
}

interface Props {
  meetingName?: string
  type: 'save' | 'submit'
  isOpen?: boolean

  onWillCauseClose?: () => void
}

const NewQuestionnaireCardNewMeetingModal: FC<Props> = (props) => {
  const {
    meetingName,
    type,
    isOpen,
    onWillCauseClose
  } = props

  const {
    control,
    setValue,
    register,
    handleSubmit
  } = useForm<FormValue>({ defaultValues: initFormValue })

  const onSubmit = (v: FormValue) => {
  }

  return (
    <PModal
      classNames={{
        header: 'pt-unit-7 px-unit-7',
        body: 'px-unit-7',
      }}
      header={
        <div className="flex gap-unit-4">
          <i className="fi fi-rr-calendar-check text-[30px]" />

          <p className="font-playfair text-[35px] font-normal">
            { meetingName }
          </p>
        </div>
      }
      isOpen={isOpen}
      onWillCauseClose={onWillCauseClose}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex items-center">
          <Controller
            control={control}
            name="meetingDateTimestamp"
            render={({ field }) => {
              const handleChange = (date: Date) => {
                setValue('meetingDateTimestamp', dayjs(date).valueOf())
              }

              return (
                <DatePicker
                  customInput={
                    <PTag color="rosewater" size="sm">{ dayjs(field.value).format('MM DDt[h]')  }</PTag>
                  }
                  selected={new Date(field.value)}
                  onChange={handleChange}
                />
              )
            }}
          />

          <PTag className="ml-unit-2" color="rosewater" size="sm">
            <Controller
              name="meetingStartTime"
              control={control}
              render={({ field }) => <PTimePicker value={field.value} onChange={field.onChange} />}
            />
            &nbsp;-&nbsp;
            <Controller
              name="meetingEndTime"
              control={control}
              render={({ field }) => <PTimePicker value={field.value} onChange={field.onChange} />}
            />
          </PTag>
        </div>

        <PCard className="mt-unit-5 bg-[#F3EEEA]" bodyClass="py-unit-2 px-unit-10">
          <p className="text-black text-[15px] font-bold font-playfair leading-tight">Meeting Information</p>

          <PTextarea
            className="w-[370px] text-neutral-500  text-[15px] font-normal font-playfair leading-tight"
            classNames={{
              inputWrapper: '!bg-[#F3EEEA] shadow-none'
            }}
            placeholder="Add Meeting information"
            {...register('meetingInformation')}
          />
          <div className="absolute left-[20px] top-[10px]">
            <img className="h-5 aspect-square" src={locationIconSrc} />
          </div>
        </PCard>

          <PCard className="mt-unit-2 bg-[#F3EEEA]" bodyClass="py-unit-2 px-unit-10">
          <p className="text-black text-[15px] font-bold font-playfair leading-tight">Description</p>

          <PTextarea
            className="w-[370px] text-neutral-500 text-[15px] font-normal font-playfair leading-tight"
            classNames={{
              inputWrapper: '!bg-[#F3EEEA] shadow-none'
            }}
            placeholder="Describe your meeting"
            {...register('meetingDescription')}
          />

          <div className="absolute left-unit-4 top-unit-2">
            <CalendarIcon />
          </div>
        </PCard>
          
        <div className="mt-unit-2 flex justify-end">
          <PButton className="!bg-[#F3EEEA]" size="sm" htmlType="submit" squareRound onClick={onWillCauseClose}>
            {
              type === 'save' ? 'Save' : 'Submit'
            }
          </PButton>
        </div>
      </form>
    </PModal>
  )
}

export default NewQuestionnaireCardNewMeetingModal
