import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { SkillsItem } from './SkillsItem'; 
import Carousel from "react-elastic-carousel";
import './index.css';

const useStyles=makeStyles({
    secBg:{
        width:'100%',
        height:'100vh',
        backgroundColor:'#052033',
        display:'grid',
        gridTemplateRows:'repeat(2,1fr)',
        '@media screen and (min-width: 530px) and (max-width: 699px)':{
        paddingTop:'100vh'
        },
        '@media screen and (min-width: 700px) and (max-width: 950px)':{
            paddingTop:'100vh'
            }
    },
    fisrtRow:{
        backgroundColor:'#052033',
        padding:'2%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',

    },
    fisrtRowData:{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        '@media screen and (min-width: 530px) and (max-width: 768px)':{


        }
    },
    fisrtRowDataTop:{
        display: 'flex',
        width: '100%',
        marginBottom:10,
        justifyContent: 'center',
        alignItems: 'center',

        '& hr':{
            width: '10%',
            borderRadius: 5,
            border: '5px solid #FF4A57',

        },
        '& h1':{
            fontFamily:'monospace',
            color:'white',
            '@media screen and (min-width: 530px) and (max-width: 699px)':{
                fontSize:'1.2rem'
                },
            '@media screen and (min-width: 700px) and (max-width: 950px)':{
                fontSize:'1.5rem'
                }
        }
    },
    fisrtRowDataDown:{
        marginTop:10,
        textAlign:'center',
        '@media screen and (min-width: 530px) and (max-width: 768px)':{

        },
        '& h4':{
            fontFamily:'cursive',
            fontSize:'1.2rem',
            color:'white',
            '@media screen and (min-width: 530px) and (max-width: 699px)':{
                fontSize:'1rem'
                },
            '@media screen and (min-width: 700px) and (max-width: 950px)':{
                fontSize:'1rem'
                }
        }
    },
    secondRow:{
        backgroundColor:'#052033',
        padding:'2%',
        display:'flex'
    },

    Card:{
        width:'100%',
        height: '30vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin:10,
        textAlign:'-webkit-center',
    
        '& h6':{
            fontSize:'2rem',
            marginTop:10,
            color:'#57ff4a',
            '@media screen and (min-width: 530px) and (max-width: 699px)':{
                fontSize:'1.5rem'
                },
        },
        '& h2':{
            fontSize:'1.5rem',
            marginTop:10,
            color:'#ffe74a',
            '@media screen and (min-width: 530px) and (max-width: 699px)':{
                fontSize:'1.2rem'
                },
        },
        '& p':{
            fontSize:'1.5rem',
            marginTop:10,
            color:'#57ff4a',
            '@media screen and (min-width: 530px) and (max-width: 699px)':{
                fontSize:'1.2rem'
                },
            '@media screen and (min-width: 700px) and (max-width: 768px)':{
                    fontSize:'1.2rem'
                    },    
        }
        
    },
    

       
})
export default function Skills() {


    const classes=useStyles()
    return (
        <div className={classes.secBg} id="skills">
            <div className={classes.fisrtRow}>
                <div className={classes.fisrtRowData}>
                    <div className={classes.fisrtRowDataTop}>
                        <hr/>
                        <h1> &nbsp;OUR AFFORDABLE SKILLS&nbsp;</h1>
                        <hr/>
                    </div>
                    <div className={classes.fisrtRowDataDown}>
                        <h4>My skill set has a lot of specialty, but what I love to do most <br/> of the time I a real question! Here are the things I really love to do!</h4>
                    </div>
                </div>
            </div>
            <div className={classes.secondRow}>
   
            <Carousel verticalMode itemsToShow={2} 
 
            className={classes.sliderCard}
            easing="cubic-bezier(1,.15,.55,1.54)"
            tiltEasing="cubic-bezier(0.110, 1, 1.000, 0.210)"
            transitionMs={700} 
            >
                {SkillsItem.map((val,i)=>{
                    return(
                                  
                        <div className={classes.Card}>
                                <h6>{val.icon}</h6>
                                <h2><b>{val.title}</b></h2> 
                                <p>{val.desc}</p> 
                        </div>
                        
                    )
                })}
                </Carousel>

            </div>

        </div>
    )
}
