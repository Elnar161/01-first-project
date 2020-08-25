import React from 'react';
import s from './Dialogs.module.css';

const Dialogs = (props) => {
    return (
            <div className={s.dialogs}>
                <div className={s.dialogs_items}>
                    <div className={s.dialog + ' ' + s.active}>
                        Artem
                    </div>
                    <div className={s.dialog}>
                        Artur
                    </div>
                    <div className={s.dialog}>
                        Natalia
                    </div>
                    <div className={s.dialog}>
                        Zhenia
                    </div>
                </div>
                <div className={s.messages}>
                    <div className={s.message}>Hi</div>
                    <div className={s.message}>How are you</div>
                    <div className={s.message}>ok</div>
                </div>                
            </div>
    );
}

export default Dialogs;