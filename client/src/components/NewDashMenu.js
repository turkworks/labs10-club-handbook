import React from 'react'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import PopupState, {
  bindTrigger,
  bindMenu,
} from 'material-ui-popup-state/index'

function MenuPopupState() {
  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {popupState => (
        <React.Fragment>
          <Button
            variant="outlined"
            color="inherit"
            {...bindTrigger(popupState)}
          >
            User Account
          </Button>
          <Menu {...bindMenu(popupState)}>
            <MenuItem onClick={popupState.close}>My Account</MenuItem>
            <MenuItem component={Link} to="/settings">
              Settings
            </MenuItem>
            <MenuItem
              component={Link}
              to="https://club-handbook.auth0.com/v2/logout"
            >
              Logout
            </MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  )
}

export default MenuPopupState