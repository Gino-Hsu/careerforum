import { createPortal } from 'react-dom'
import Backdrop from '../Backdrop/Backdrop'
import Button from '../Button/Button'
import style from './Modal.module.scss'

interface modalProps {
  title: string
  onConfirm: (e: React.MouseEvent) => void
  children: React.ReactElement
}

export default function Modal(props: modalProps) {
  return createPortal(
    <>
      <div className={style['modal-outer']}>
        <Backdrop onConfirm={props.onConfirm} />
        <div className={`${style['modal-container']} ${style['scrollbar']}`}>
          <Button
            type="button"
            style="button-close"
            onClick={props.onConfirm}
            innerText="X"
            disabled={false}
          />
          <header className={style['header']}>
            <h2>{props.title}</h2>
          </header>
          <form className={style['form']}>{props.children}</form>
        </div>
      </div>
    </>,
    document.getElementById('modal-root') as Element
  )
}
