import React, { useEffect, useState } from 'react'
import { entryFormData } from '../../utils/constants'
import FormInput from '../forms/FormInput'
import styles from './styles/entryStyles.module.css'

export default function Entry() {
    const [entryId, setEntryId] = useState('')
    useEffect(()=>{
        setEntryId(window.location.pathname.split('/')[2])
    },[])
  return (
    <div className={styles.wrapper}>
            <FormInput data={entryFormData} disabled={true} />
    </div>
  )
}
