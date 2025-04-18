import { signIn, useSession } from "next-auth/react";
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import ActionButton from '../../ProUI/ActionButton/ActionButton';
import ProIcon from '../../ProUI/Icons/icons';
import Style from './LoginForm.module.scss';

const LoginForm = () => {
  const router = useRouter();
  const { data: userSession, status } = useSession();
  // Log the session state
  useEffect(() => {
    if (status === "authenticated") {
      if(userSession?.template?.trim()){
        router.push("/editor"); 
      }else{
        router.push("/claim-username");
      }
    }
  }, [userSession, status, router]);


  const handleAuth = async () => {
    await signIn("google", { redirect: false }); 
  };
  return (
    <div className={Style.login_form}>
      <div>
        <h2 className='text-3xl font-bold mb-1'>Hey, Welcome!</h2>
        <span>
          To access your viiew.me, simply log in with your Google account.
        </span>
      </div>
      <div className={Style.form}>
        <ActionButton className={Style.google} onClick={handleAuth}>
          <small><ProIcon name={"FaGoogle"} size={20} color={"#fff"} /></small>
          Sign in with Google
        </ActionButton>
      </div>
    </div>
  );
};

export default LoginForm;
