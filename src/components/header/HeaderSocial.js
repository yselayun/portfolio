import React from 'react';
import {BsFacebook} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs';
import {BsLinkedin} from 'react-icons/bs';
export const HeaderSocial = () => {
  return (
   <div className='header__socials'>
        <a href='https://www.facebook.com' target='blank'><BsFacebook/></a>
        <a href='https://github.com' target='blank'><BsGithub/></a>
        <a href='https://linkedin.com' target='blank'><BsLinkedin/></a>
   </div>
  )
}
