// import { useDispatch } from 'react-redux';
import SignOutLogo from '../../../images/sign-out.svg';
import { NavLink, Link } from 'react-router-dom';
import styles from './UserInfo.module.css';
import { Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  avatar: {
    backgroundColor: '#FFFFFF',
    color: '#555555',
    boxShadow: '0px 1px 1px rgba(18, 29, 46, 0.1)',
    width: '30px',
    height: '30px',
    fontSize: '14px',
    marginRight: '6px',
  },
}));

export default function UserMenu({ onClick }) {
  // const dispatch = useDispatch();
  const name = 'Group10';
  const classes = useStyles();

  return (
    <div className={styles.userMenuContainer}>
      <div>
        <NavLink
          to="/"
          exact
          className={styles.userLink}
          activeClassName={styles.userLinkActive}
        >
          Главная
        </NavLink>

        <NavLink
          to="/materials"
          exact
          className={styles.userLink}
          activeClassName={styles.userLinkActive}
        >
          Полезные материалы
        </NavLink>

        <NavLink
          to="/contacts"
          exact
          className={styles.userLink}
          activeClassName={styles.userLinkActive}
        >
          Контакты
        </NavLink>
      </div>

      <Avatar className={classes.avatar}>{name[0]}</Avatar>

      <span className={styles.userMenuName}>{name}</span>

      <div className={styles.logOutButton} onClick={onClick}>
        <Link href="/auth" className={styles.LogOutBox}>
          <img src={SignOutLogo} alt="SignOutLogo" height="16" width="16" />
        </Link>
      </div>
    </div>
  );
}
