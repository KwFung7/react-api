import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { indigo500, blue500, grey500, orange500, deepPurple400 } from 'material-ui/styles/colors';

export const muiTheme = getMuiTheme({
  appBar: {
    color: indigo500
  },
  textField: {
    borderColor: grey500,
    floatingLabelColor: grey500,
    focusColor: blue500
  },
  button: {
    height: 45
  },
  raisedButton: {
    primaryColor: deepPurple400,
    secondaryColor: orange500
  },
  fontFamily: 'Ubuntu'
});