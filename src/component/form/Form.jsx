import React, { useState } from 'react'
import "./form.css"
const Form = () => {
    const [show, setShow] = useState(false);
    const [role, setRole] = useState(null);
    const [email, setEmail] = useState("");
    function roleHandler(value) {
        setRole(value);
        setShow(!show)
    }

    return (
        <section className='form__section'>
            <div className='form1'>
                <div className='box_img1'></div>

                <div className='img_box1'></div>

            </div>
            <div className='form__container' >
                <form onSubmit={(event) => event.preventDefault()}>
                    <h1>Stay in the loop</h1>
                    <div className="form_btns">
                        <div className='input__container'>
                            <button className='style_btn' onClick={() => setShow(!show)}>
                                <label style={{ display: 'block' }}>Role*</label>
                                <span>{role}</span>
                            </button>

                        </div>
                        <div>
                            <button className='style_btn' >
                                <label htmlFor='email' className={email ? 'email-label-none' : 'email-label'}>Enter your e-mail  address*</label>
                                <input style={{ display: 'block' }} type='email' name='user_email' value={email} onChange={(e) => setEmail(e.target.value)} id='email' />

                            </button>
                        </div>
                        <div>
                            <button className='desing_button'><span>Subscribe to Moooi Newsletter</span></button>
                        </div>
                        {show && (
                            <ul id='role'>

                                <li onClick={() => roleHandler("consumer")}>Consumer</li>
                                <li onClick={() => roleHandler("Professional")}>Professional (Architect/designer/dealer)</li>
                                <li onClick={() => roleHandler("Press")} >Press</li>
                            </ul>
                        )}


                    </div>

                </form>

            </div>
        </section>
    )
}

export default Form