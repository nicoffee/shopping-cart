export default {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '0 20px'
  },

  divider: {
    width: '100%'
  },

  inner: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '1100px',
    width: '100%'
  },

  categories: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    maxWidth: '1100px',
    width: '100%',

    '& $a': {
      display: 'flex',
      alignItems: 'center',
      marginRight: '20px',
      textDecoration: 'none',
      color: 'black'
    }
  },

  cartIcon: {
    position: 'relative'
  },

  icon: {
    width: '20px',
    height: '20px',
    marginRight: '5px',

    '& svg': {
      width: '20px',
      height: '20px'
    }
  },

  goodsCount: {
    position: 'absolute',
    right: '5px',
    bottom: '5px',
    display: 'flex',
    width: '20px',
    height: '20px',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    fontSize: '14px',
    fontWeight: 'bold',
    backgroundColor: '#f1c40f',
    borderRadius: '50%'
  },

  'monitorsIcon casesIcon videocardsIcon': {
    width: '30px',
    height: '30px',
    marginRight: '10px',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  }
};
