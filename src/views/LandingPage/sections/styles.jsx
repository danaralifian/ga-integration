const styles = {
    imageDevelop : {
        height : 'auto',
        maxHeight : '100px',
        width : '100%',
        objectFit : 'contain',
        margin : 'auto',
        padding : 10
    },
    card : {
        background : '#fff',
        borderRadius : 5,
        //border : '1px solid #ddd',
        //boxShadow: '0 14px 26px -12px rgba(153, 153, 153, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(153, 153, 153, 0.2)'
    },
    devLabel : {
        padding: '10px',
        textAlign: 'center',
        background : '#132FFF',
        color : '#fff',
        borderRadius : '5px',
        fontWeight : 'bold',
        display : 'none'
    },
    sectionTitle : {
        fontWeight : 'bold',
        textAlign : 'center',
        margin : '0px 0px 20px'
    },
    jobs : {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom : 0
    },
    company : {
        fontSize : 16,
        margin : 0,
        fontWeight : 400,
    },
    wrapper : {
        borderLeft : '5px solid #132FFF', 
        padding : '0px 10px 20px 20px', 
        position : 'relative'
    },
    dots : {
        position: 'absolute',
        backgroundColor: 'rgb(19, 47, 255)',
        width: '20px',
        height: '20px',
        top: '-1px',
        borderRadius: '50%',
        left: '-12px',
    },
    portoMobile : {
        width : '48%', 
        height : '100%', 
        objectFit : 'contain',
        boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
        borderRadius : 10
    },
    playstore : {
        borderRadius :5,
        width : 150,
        objectFit : 'contain',
        display : 'block',
        margin : 'auto',
        "@media (min-width : 960px)" : {
            marginTop : 50,
        },
        boxShadow:
      '0 2px 2px 0 rgba(153, 153, 153, 0.14), 0 3px 1px -2px rgba(153, 153, 153, 0.2), 0 1px 5px 0 rgba(153, 153, 153, 0.12)',
        transition:
      'box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
        '&:hover': {
            boxShadow:
            '0 14px 26px -12px rgba(153, 153, 153, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(153, 153, 153, 0.2)',
        },
    }
}

export default styles