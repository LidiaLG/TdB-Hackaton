import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';


const Footer = () => {
  return (
    <MDBFooter className='text-white' style={{backgroundColor: '#C06500'}}>
      <MDBContainer className='p-3 d-flex justify-content-around align-items-center'>
      <h4 className='text-white text-center mb-0'>CONTACTANOS</h4>
        <section className='align-items-center'>
          <MDBBtn
            floating
            className='m-2 mt-2'
            style={{ backgroundColor: '#3b5998' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='facebook-f' />
          </MDBBtn>

          <MDBBtn
            floating
            className='m-2'
            style={{ backgroundColor: '#55acee' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='twitter' />
          </MDBBtn>

          <MDBBtn
            floating
            className='m-2'
            style={{ backgroundColor: '#ac2bac' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='instagram' />
          </MDBBtn>

        </section>
      </MDBContainer>
    </MDBFooter>
  );
}

export default Footer
