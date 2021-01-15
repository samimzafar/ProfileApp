import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
const useStyles=makeStyles({
    secBg:{
        width:'100%',
        height:'100vh',
        backgroundColor:'brown',
        
        
    },
})
export default function Contact() {
    const classes=useStyles()
    return (
        <div className={classes.secBg} id="contact">

        </div>
    )
}
