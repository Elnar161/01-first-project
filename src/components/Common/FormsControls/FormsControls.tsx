import React from 'react';
import { WrappedFieldProps } from 'redux-form';
import styles from './FormsControls.module.css';

export const Textarea: React.FC<WrappedFieldProps> = ({input, meta, ...props}) => {

    const hasError = meta.error && meta.touched;

    return(
        <div className={styles.formControl + ' ' + (hasError ? styles.error : "")}>
            
            <div>
                <textarea {...input} {...props}></textarea>
            </div>
    { hasError && <span className={styles.formControl + ' ' + styles.error}>{meta.error}</span>}
        </div>
    )
}

export const Input: React.FC<WrappedFieldProps> = ({input, meta, ...props}) => {

    const hasError = meta.error && meta.touched;

    return(
        <div className={styles.formControl + ' ' + (hasError ? styles.error : "")}>
            
            <div>
                <input {...input} {...props}></input>
            </div>
    { hasError && <span className={styles.formControl + ' ' + styles.error}>{meta.error}</span>}
        </div>
    )
}