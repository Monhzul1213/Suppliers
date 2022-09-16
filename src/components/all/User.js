import React from 'react';
import { Menu, Dropdown } from 'antd';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { auth, logout } from '../../firebase';
import { logout as apiLogout } from '../../services';
import { DynamicMDIcon, DynamicAIIcon } from './DynamicIcon';

export function User(){
  const { t } = useTranslation();
  const [user] = useAuthState(auth);
  const dispatch = useDispatch();
  const login = useSelector(state => state.login?.user);

  const menuStyle = {paddingTop: 5, paddingBottom: 5, borderRadius: 5};

  const onPressLogout = () => {
    logout();
    dispatch(apiLogout());
    console.log(user)
  }

  const menu = (
    <Menu style={menuStyle}>
      <Menu.Item key='user'>
        <div className='drop_user_back'>
          <DynamicAIIcon className='drop_user_icon' name='AiOutlineUser' />
          <div>
            <p className='drop_user_name'>{user?.displayName}</p>
            <p className='drop_user_email'>{user?.email ?? login?.username}</p>
          </div>
        </div>
      </Menu.Item>
      <Menu.Item key='divider'>
        <div className='divider' />
      </Menu.Item>
      <Menu.Item key='logout' onClick={onPressLogout}>
        <div className='menu_logout_back'>
        <DynamicAIIcon className='drop_icon' name='AiOutlineLogout'/>
          <span className='menu_logout'>{t('login.logout')}</span>
        </div>
      </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menu} trigger={['click']} placement="bottomRight">
      <button className='header_user_back' >
        <DynamicAIIcon className='header_user' name='AiOutlineUser' />
        <span className='header_user_name'>{user?.displayName}</span>
        <DynamicMDIcon className='header_user_icon' name='MdKeyboardArrowDown' />
      </button>
    </Dropdown>
  )
}