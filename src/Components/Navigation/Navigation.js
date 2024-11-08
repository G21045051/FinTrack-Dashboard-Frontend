import React from 'react';
import styled from 'styled-components';
import avatar from '../../img/avatar.jpg';
import { signout } from '../../utils/Icons';
import { menuItems } from '../../utils/menuItems';

function Navigation({ active, setActive }) {
  return (
    <NavStyled>
      <div className="user-con">
        <img src={avatar} alt="" />
        <div className="text">
          <h2>Gyanendra</h2>
          <p>Remember expenses</p>
        </div>
      </div>
      <ul className="menu-items">
        {menuItems.map((item) => {
          return (
            <li
              key={item.id}
              onClick={() => setActive(item.id)}
              className={active === item.id ? 'active' : ''}
            >
              {item.icon}
              <span>{item.title}</span>
            </li>
          );
        })}
      </ul> 
      </NavStyled>
  );
}

const NavStyled = styled.nav`
  padding: 2rem 1.5rem;
  width: 374px;
  height: 100%;
  background: #f9fafb;
  border: 2px solid #e0e6ed;
  backdrop-filter: blur(4.5px);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;

  .user-con {
    height: 100px;
    display: flex;
    align-items: center;
    gap: 1rem;

    img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      object-fit: cover;
      background: #f9fafb;
      border: 2px solid #e0e6ed;
      padding: 0.2rem;
      box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.05);
    }

    h2 {
      color: rgba(34, 34, 96, 0.9);
    }

    p {
      color: rgba(34, 34, 96, 0.6);
    }
  }

  .menu-items {
    flex: 1;
    display: flex;
    flex-direction: column;

    li {
      display: grid;
      grid-template-columns: 40px auto;
      align-items: center;
      margin: 0.6rem 0;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.3s ease;
      color: rgba(34, 34, 96, 0.6);
      padding-left: 1rem;
      position: relative;

      i {
        color: rgba(34, 34, 96, 0.6);
        font-size: 1.4rem;
        transition: all 0.3s ease;
      }
    }
  }

  .bottom-nav {
    li {
      display: flex;
      align-items: center;
      cursor: pointer;
      color: rgba(34, 34, 96, 0.6);
      transition: all 0.3s ease;
      margin-bottom: 0.5rem;

      &:hover {
        color: rgba(34, 34, 96, 1);
      }

      i {
        margin-right: 0.5rem;
      }
    }
  }

  .active {
    color: rgba(34, 34, 96, 1) !important;

    i {
      color: rgba(34, 34, 96, 1) !important;
    }

    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 4px;
      height: 100%;
      background: rgba(34, 34, 96, 0.9);
      border-radius: 0 8px 8px 0;
    }
  }
`;

export default Navigation;
 
