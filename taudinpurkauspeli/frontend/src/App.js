import React from 'react';
import {
  BrowserRouter as Router,
  Switch, Route, Link,
} from 'react-router-dom';
import './App.css';
import {
  Navbar,
  Nav,
  NavLink,
  Dropdown,
} from 'react-bootstrap';

// Import translations
import { useTranslation } from 'react-i18next';

// Import components
import AddDisease from './components/add-disease.component';
import DiseasesList from './components/diseases-list.component';
import Frontpage from './components/frontpage.component';

const user = true;
const admin = false;

const App = () => {
  const { t } = useTranslation();
  const { i18n } = useTranslation();

  function changeLanguage(e) {
    i18n.changeLanguage(e.target.value);
  }

  return (
    <Router>
      <Navbar collapseOnSelect expand="lg" variant="dark">
        <Navbar.Brand as={Link} to="/">{t('nameOfTheGame')}</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Item>
              <select onChange={changeLanguage} id="selectLanguage">
                <option selected="selected">{t('selectLanguage')}</option>
                <option value="fi">{t('language_finnish')}</option>
                <option value="en">{t('language_english')}</option>
              </select>
            </Nav.Item>
            { user && admin && (
              <Nav.Item>
                <NavLink as={Link} to="/users">{t('userInformation')}</NavLink>
              </Nav.Item>
            )}
            { user && admin && (
              <Nav.Item>
                <NavLink as={Link} to="/files">{t('fileBank')}</NavLink>
              </Nav.Item>
            )}
            { user && !admin && (
              <Nav.Item>
                <NavLink as={Link} to="/howtoplay">{t('howToPlay')}</NavLink>
              </Nav.Item>
            )}
            { user && (
              <Nav.Item>
                <NavLink as={Link} to="/profile">{t('userProfile')}</NavLink>
              </Nav.Item>
            )}
            <Nav.Item>
              { user
                ? <NavLink as={Link} to="/logout">{t('logOut')}</NavLink>
                : <NavLink as={Link} to="/login">{t('logIn')}</NavLink> }
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <div id="sidebar">
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            {t('button_selectCase')}
          </Dropdown.Toggle>

          <Dropdown.Menu variant="#a9c9ae">
            <Dropdown.Item href="#/action-1">Case 1</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Case 2</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Case 3</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>

      <Switch>
        <Route path="/addDisease" component={AddDisease} />
        <Route exact path="/diseasesList" component={DiseasesList} />
        <Route path="/" component={Frontpage} />
      </Switch>
    </Router>
  );
};

export default (App);
