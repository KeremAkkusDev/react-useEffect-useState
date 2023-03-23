import PropTypes from "prop-types"

function Loggedin(props){
    const login = (e) =>{
        props.isLoggedIn
        ? props.setLoggedIn(false)
        : props.setLoggedIn(true);
      }
    return(
        <>
            
            {
                props.isLoggedIn 
                ? <div><button onClick={login} >Giriş Yap</button><label>Giriş Yapmadınız.</label></div> 
                : <div><button onClick={login} >Çıkış Yap</button><label>Merhaba {props.name} {props.surname}</label></div>
            }
            {props.address.title}
            <br/>
            {props.address.zip}
            {   props.friends &&
                props.friends.map((friend,index)=>(
                    <div key={index}>{index}-{friend}</div>
                ))
            }

            
        </>
    );
}

Loggedin.propTypes={
    name:PropTypes.string.isRequired, //isRequired ZORUNLU ALAN.
    surname:PropTypes.oneOfType([
        PropTypes.number, PropTypes.string // KABUL EDİLENLER
    ]),
    isLoggedIn:PropTypes.bool,
    friends:PropTypes.array,
    address:PropTypes.shape({ //ARRAY İÇİNDEKİLERİ BELİRLEME
        title:PropTypes.string,
        zip:PropTypes.number
    })
};

Loggedin.defaultProps = {
    name:"isimsiz"
}

export default Loggedin;