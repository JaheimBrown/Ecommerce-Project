import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  cardContainer: {
    width: 310,
    height: 'auto',
  },
  media: {
    height: 225,
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  cartActions: {
    justifyContent: 'space-between',
  },
  buttons: {
    display: 'flex',
    alignItems: 'center',
  },
}));