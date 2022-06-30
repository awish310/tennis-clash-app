import { Button, Nav, Sidebar as GrommetSidebar } from 'grommet';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LogoSrc from '../../assets/tennis_clash_logo.webp';
import { getNavbarLinks } from '../../utils';
import { Logo, Wrapper } from './Navbar.styled';

const links = getNavbarLinks();

const Navbar = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('Home');
  return (
    <Wrapper>
      <GrommetSidebar
        fill
        gap="none"
        header={
          <Logo
            src={LogoSrc}
            onClick={() => {
              navigate('/');
            }}
          />
        }
      >
        <Nav gap="small">
          <Button
            key={`navbar-item-home`}
            hoverIndicator
            label={'Home'}
            primary
            active={activeTab === 'Home'}
            onClick={() => {
              setActiveTab('Home');
              navigate('/');
            }}
            margin={{ bottom: '24px' }}
          />
          {links.map(({ label, path }) => {
            return (
              <Button
                key={`navbar-item-${label}`}
                hoverIndicator
                label={label}
                primary
                active={activeTab === label}
                onClick={() => {
                  setActiveTab(label);
                  navigate(path);
                }}
              />
            );
          })}
        </Nav>
      </GrommetSidebar>
    </Wrapper>
  );
};

export default Navbar;
