import React, {FC} from 'react'
import error404 from './404.png'
import s from './Error404.module.css'

type PropsType = {
}

export const Error404: FC<PropsType> = () => {
    return (
        <div id={'hw5-page-404'}>
            <div className={s.wrapper}>
                <img src={error404} alt={'404'} className={s.error404} />
            </div>
        </div>
    )
}
