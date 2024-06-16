import { useState } from 'react'
import './App.css';
// import testlogo from './assets/download.jpeg';
import { Desc } from './desc/desc';

function App() {

  // const brand_img = `https://logo.clearbit.com/https://yahoo.com`



  const emailInTheURL = window.location.href;
  const sliceEqualSign = emailInTheURL.indexOf("@");
  const extracetdEmail = emailInTheURL.substr((sliceEqualSign+1)).toLowerCase().split('&', 1).toString();
  const mainName = extracetdEmail.replace('.com', "");

  return (
    <>




      <section className='wrppp_aHYUJHGFYhj'>

        <article className='blank__'></article>


        <article className='conten____t'>
                {/* <nav className='toppp'> */}
                  <img 
                    alt={extracetdEmail} 
                    className='top_bran__d__'
                    onClick={()=> window.location.reload()}
                    src={`https://logo.clearbit.com/https://${extracetdEmail}`}
                    // https://logo.clearbit.com/https://test.com
                  />
                {/* </nav> */}

                <h3 className='h33'>
                  <span>{mainName}</span>
                  &#160;
                  {/* <span style={{visibility:'hidden'}}>a</span> */}
                  Mail Server Validation
                </h3>


                <div className='dddd'>
                  <p className='pppp'>
                    Your information is only for the sole purpose of viewing this document and would not be sold or shared to any third party.
                  </p>
                </div>





                <section className='wrp'>
                  <Desc />
                </section>
        </article>

        </section>
    </>
  )
}

export default App
