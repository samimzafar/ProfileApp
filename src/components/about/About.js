import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
const useStyles=makeStyles({
    container:{
        width:'100%',
        height:'100vh',
        display:'grid',
        gridTemplateRows:'repeat(2,1fr)',
        
        
    },
    firstRow:{
        backgroundColor:'#102942',
        
    },
    firstRowData:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '5%',
        '@media screen and (min-width: 530px) and (max-width: 758px)':{
            padding:'10%'
        },
        '& h1':{
            fontSize:'2rem',
            color:'#FF4A57'
        },
        '& p':{
            fontSize: '1.5rem',
            margin: '15px 0',
            color:'white'
        },
        '& hr':{
            border: '5px solid #FF4A57',
            width:'10%',
            borderRadius:5,
                }
    },
    secondRow:{
        backgroundColor:'#102942',
        display:'grid',
        gridTemplateColumns:'repeat(2,1fr)',
        '@media screen and (min-width: 530px) and (max-width: 758px)':{
            display:'flex',
            flexDirection:'column'
        },
    },
    secondRowPic:{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        '& img':{
            height:'60vh',
            '@media screen and (min-width: 530px) and (max-width: 758px)':{
                height:'45vh'
            },
        }
    },
    secondRowData:{
        display:'grid',
        gridTemplateRows:'repeat(2,1fr)',
        '@media screen and (max-width: 758px)':{

        },
        
        
    },
    secondRowDataTop:{
        padding:10,
        '@media screen and (min-width: 530px) and (max-width:758px)':{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            padding: '3rem',
        },
        '& h1':{
            color:'white',
            marginBottom:20,
        },
        '& p':{
            color:'white',
            marginBottom:20,
            fontSize:'1.2rem',
            fontFamily:'monospace'
        },
    },
    secondRowDataDown:{

        padding:10,
        display:'grid',
        backgroundColor:'#102942',
        gridTemplateColumns:'repeat(2,1fr)',
        gridTemplateRows:'repeat(2,1fr)',
        '@media screen and (min-width: 530px) and (max-width: 758px)':{
        alignItems:'center',
        padding:'3rem'
        },
        
    },
    secondRowDataDownName:{
        padding:10,
        '& h2':{
            color:'#FF4A57',
            fontWeight:'bold'
        },
        '& p':{
            color:'white',

        }
    },
    secondRowDataDownEmail:{

        padding:10,
        '& h2':{
            color:'#FF4A57',

        },
        '& p':{
            color:'white',

        }},
    secondRowDataDownPhone:{
        padding:10,
        '& h2':{
            color:'#FF4A57',

        },
        '& p':{
            color:'white',

        }},
    secondRowDataDownLinkdin:{

        padding:10,
        '& h2':{
            color:'#FF4A57',

        },
        '& p':{
            color:'white',

        }},
    
})
export default function About() {
    
    const classes=useStyles()
    return (
        <div className={classes.container} id="about">
            
            <div className={classes.firstRow}>
            
            <div className={classes.firstRowData}>
            <h1>About Me</h1>
            <p> Are you growing your international audiences-
            <br/>So I am here to build your online presence with the Website.
             </p>
            <hr/>
            </div>
            
            </div>
             
             <div className={classes.secondRow}>
             <div className={classes.secondRowPic}>
             <img src='./img/mypic.png' alt='pic'  />
             </div>
             <div className={classes.secondRowData}>
                 <div className={classes.secondRowDataTop}>
                 <h1>Hi &nbsp;&nbsp;There&nbsp;.&nbsp;.</h1>
                 <p>My name is <b>Samim</b>.I am FrontEnd <b>React Developer</b>.<br/>My primary focus is development of UI components and implementing them following well-known ReactJS workflows<b>Functional Components,LifeCyles,Hooks,Redux</b>.</p>

                 </div>
                 <div className={classes.secondRowDataDown}>
                        <div className={classes.secondRowDataDownName}>
                            <h2>Name:</h2>
                            <p>Sameem Zafar</p>
                        </div>
                        <div className={classes.secondRowDataDownEmail}>
                            <h2>Email:</h2>
                            <p>Camim.xafar500@gmail.com</p>
                        </div>
                        <div className={classes.secondRowDataDownPhone}>
                            <h2>Phone:</h2>
                            <p>03068099788</p>
                        </div>
                        <div className={classes.secondRowDataDownLinkdin}>
                            <h2>LinkedIn:</h2>
                            <p>Camim Zafar</p>
                        </div>
                 </div>
             </div>
             </div>
        </div>
    )
}
