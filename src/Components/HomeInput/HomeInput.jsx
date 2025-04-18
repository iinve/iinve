'use client';


import { ProForm } from 'ProUI/Form/Form';
import ActionButton from '../../ProUI/ActionButton/ActionButton';
import Style from './HomeInput.module.scss';

const HomeInput = ({ isContact, onClick, isLoading, handleSubmit }) => {
  return (
    <div className={Style.input_container}>
      <ProForm onSubmit={handleSubmit} validationBehavior="native">
       <div className='flex items-center relative'>
       {!isContact && <label htmlFor="">viiew.me/</label>}
        <input
          name='username'
          id='username'
          type="text"
          placeholder={`${isContact ? "name@example.com" : "yourname"}`}
          // required
          autoComplete="off"
        />
       </div>
      <ActionButton type='submit' className={Style.claim} onClick={onClick} isLoading={isLoading}>{isContact ? "Get Support" : "Claim Username"}</ActionButton>
      </ProForm>
    </div>
  )
}

export default HomeInput
