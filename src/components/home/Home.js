import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import bkg from '../img/background.png';
import bb from '../img/bubble.png';
const useStyles=makeStyles({
    secBg:{
        width:'100%',
        height:'100vh',
        backgroundSize: 'cover',
        overflow: 'hidden',
        backgroundPosition: 'center',
        backgroundImage: `url(${bkg})`,
        '@media screen and (min-width: 350px) and (max-width: 529px)':{
          width:'35rem',
         },


        
    },
    // #fbfcfd
    conTent:{
        position: 'absolute',
        top: '53%',
        left: '8%',
        color:'#fbfcfd',
        transform: 'translateY(-50%)',
        '@media screen and (min-width: 350px) and (max-width: 529px)':{
           padding:5
         },
        '@media screen and (min-width: 530px) and (max-width: 757px)':{
            padding:2,
            
        },
        '& h1':{
                fontSize: '5rem',
                lineHeight: '5rem',
            
            '@media screen and (max-width: 500px)':{
                fontSize: '3rem',
                lineHeight: '3rem',
            },
            '@media screen and (min-width: 501px) and (max-width: 757px)':{
                fontSize: '4rem',
                lineHeight: '4rem',
                
            },   
            },


         '& p':{
            fontFamily: 'serif',
            fontSize: 20,
            lineHeight: '2rem',
            fontWeight: 'bold',
            '@media screen and (max-width: 500px)':{
                fontSize: 14,
                lineHeight: 2,
            },
            '@media screen and (min-width: 501px) and (max-width: 757px)':{
                fontSize: 17,
                lineHeight: 2,
                
            },
            
         },
        '& button':{
            padding: 15,
            fontSize: 20,
            borderRadius: '2rem',
            margin: '15px 0',
            border: '3px solid #FF4A57',
            backgroundColor:'#FF4A57',
            color:'white',
            cursor:'pointer',
            '@media screen and (max-width: 500px)':{
                fontSize: 15,
                padding:10,
            },
            '@media screen and (min-width: 501px) and (max-width: 757px)':{
                fontSize: 18,
                padding:12,
                
            },
        },
        '& button:hover':{
            backgroundColor:'white',
            color:'#FF4A57',
            transition:'.5s ease-in',
        },
        // '@media screen and (max-width: 768px)':{
           
            
        // }    
        
    },
    bubblesAnime:{
        width:'100%',
        display:'flex',
        alignItems:'center',
        justifyContent:'space-around',
        position:'absolute',
        bottom:0,
        '& img':{
            width:50,
            animation: '$slideDown 5s linear infinite',
            
        },
        '& img:nth-child(1)':{
            animationDelay:'2s',
            width:50
        },
        '& img:nth-child(2)':{
            animationDelay:'1s',
            width:20
        },
        '& img:nth-child(3)':{
            animationDelay:'1.5s',
            width:35
        },
        '& img:nth-child(4)':{
            animationDelay:'3s',
            width:45
        },
        '& img:nth-child(5)':{
            animationDelay:'2,5s',
            width:40
        },
        '& img:nth-child(6)':{
            animationDelay:'4s',
            width:35
        },
        '& img:nth-child(7)':{
            animationDelay:'3s',
            width:40
        },
        
        
    },
    // "@keyframes slideDown": {
    //     from: { bottom: "0px" },
    //     to: { bottom: "200px" }
    //   }
    '@keyframes slideDown': {
        '0%':{
            transform:'translateY(0)'
        },
        '50%':{
         opacity:1
        },
        '70%':{
         opacity:1
        },
        '100%':{
         transform:'translateY(-50vh)'
        },
       }
 
})
export default function Home() {

    // const value = useSelector(state =>state.click);
    // console.log('Home ',value)

    const classes=useStyles();
    

    return (

        <div className={classes.secBg} id='home' >
            {/* style={value?{display:'none'}:''} */}
            {/* className={value?{display:'none'}:`${classes.conTent}`} */}
            <div className={classes.conTent}>
            <h1>I am<br/> Samim Zafar</h1>
            <p>I am Samim, professional FrontEnd Web developer with<br/> long time experience in this field​</p>
            <button>My Portfolio</button>
            </div>
            {/* className={value?{display:'none'}:`${classes.bubblesAnime}` */}
            <div className={classes.bubblesAnime}>
                <img src={bb} alt='pic' style={{width:40}}/>
                <img src={bb} alt='pic' style={{width:20}}/>
                <img src={bb} alt='pic' style={{width:50}}/>
                <img src={bb} alt='pic' style={{width:30}}/>
                <img src={bb} alt='pic' style={{width:40}}/>
                <img src={bb} alt='pic' style={{width:10}}/>
                <img src={bb} alt='pic' style={{width:50}}/>
            </div>
           

        </div>
    )
}
