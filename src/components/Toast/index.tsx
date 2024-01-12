import { forwardRef, useState, useImperativeHandle, useRef, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { CSSTransition } from 'react-transition-group';
import clsx from 'clsx'
import styles from './index.module.css'

interface ToastMsgProps {
  children?: React.ReactNode
  duration?: number
  setEnter?: (value: boolean) => void
}

const ToastMsg = forwardRef<HTMLElement, ToastMsgProps>(({ children, duration = 3000 }, ref) => {
  const [enter, setEnter] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true)
    setTimeout(() => {
      setEnter(true)
    }, 100)
  }, [])

  return (
    visible && <CSSTransition 
      nodeRef={ref} 
      in={enter} 
      unmountOnExit
      timeout={duration} 
      classNames="my-toast-msg"
      onEntered={() =>{
        setEnter(false)
      }}
      onExiting={() => {
        setTimeout(() => {
          setVisible(false)
        }, 300);
      }}
    >
     <div className={clsx(
        'mt-[20px] mx-auto px-[40px] min-h-[40px] py-[8px] bg-[#F8F4F1] text-[#989391] text-[30px] font-playfair leading-[40px] rounded-lg',
        styles.my_toast_msg
      )}>{children}</div>  
    </CSSTransition>
  )
})

interface IToastRef {
  info: (msg: string, options?: { duration?: number }) => void
}

export const toast: { current: IToastRef | null } = { current: null }

const ToastComponent = () => {
  const toastRef = useRef<IToastRef>(null)
  const [toastList, setToastList] = useState<{ msg: string, duration?: number, id: string }[]>([])

  useImperativeHandle(toastRef, () => {
    return {
      info: (msg:string, option) => {
        const item = {
          msg, 
          duration: option?.duration,
          id: `${+new Date}`
        }
        return setToastList(list => [...list, item])
      }
    }
  })

  useEffect(() => {
    toast.current = toastRef.current
  }, [])

  const renderDom =  (
    <div className={clsx(
      'fixed top-0 left-0 right-0 z-[999] flex justify-center flex-col pt-[20px]',
      styles.my_toast
    )}>
      {
        toastList.map((item) => {
          return <ToastMsg key={item.id} {...item}>{ item.msg }</ToastMsg>
        })
      }
    </div>
  )
  return typeof document !== "undefined"
  ? createPortal(renderDom, document.body)
  : renderDom;
}

export default ToastComponent