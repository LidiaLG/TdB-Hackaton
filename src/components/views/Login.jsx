import React from 'react';
import {
    MDBInput,
    MDBBtn,
    MDBIcon
} from 'mdb-react-ui-kit';

const Login = () => {
    return (
        <>
        <form className='container m-4 p-5 rounded-7' style={{backgroundColor: '#FFCB7D'}}>
            <h2 className='text-center pb-1'>Crear cuenta</h2>
            <MDBInput className='mb-4' type='user' id='form2Example1' label='Usuario' />
            <MDBInput className='mb-4' type='email' id='form2Example1' label='Email' />
            <MDBInput className='mb-4' type='password' id='form2Example2' label='Contraseña' />
            <MDBInput className='mb-4' type='password' id='form2Example2' label='Repita contraseña' />

            <MDBBtn type='submit' className='mb-4 text-black' block style={{backgroundColor: '#C06500'}}>
                Crear
            </MDBBtn>

            <div className='text-center'>
                <p>o crear cuenta con:</p>

                <MDBBtn floating className='mx-1' style={{backgroundColor: '#C06500'}}>
                    <MDBIcon fab icon='facebook-f' />
                </MDBBtn>

                <MDBBtn floating className='mx-1' style={{backgroundColor: '#C06500'}}>
                    <MDBIcon fab icon='instagram' />
                </MDBBtn>

                <MDBBtn floating className='mx-1' style={{backgroundColor: '#C06500'}}>
                    <MDBIcon fab icon='twitter' />
                </MDBBtn>

            </div>
        </form>
        </>
    );
}

export default Login;
