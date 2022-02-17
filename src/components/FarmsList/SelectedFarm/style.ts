import { makeStyles, Theme } from '@material-ui/core/styles'
import { colors, typography } from '@static/theme'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    borderRadius: 20,
    backgroundColor: colors.invariant.component,
    padding: 16,
    paddingTop: 16,
    width: 508
  },
  unstakeButton: {
    background: 'rgba(46, 224, 154, 0.9)',
    fontSize: 16,
    width: 92,
    height: 27,
    fontWeight: 700,
    borderRadius: 9,
    padding: '7px 0',
    textTransform: 'none',
    color: colors.black.full,
    [theme.breakpoints.down('xs')]: {
      width: '50%',
      height: 40
    },
    '&:hover': {
      boxShadow: '0px 0px 20px -8px white',
      background: 'rgba(46, 224, 154, 0.9)'
    }
  },
  stakedValue: {
    marginLeft: 2
  },
  disableButton: {
    fontSize: 16,
    width: 92,
    height: 27,
    fontWeight: 400,
    borderRadius: 9,
    padding: '7px 0',
    textTransform: 'none',
    backgroundColor: colors.invariant.newDark,
    boxShadow: 'none',

    color: colors.invariant.dark,
    [theme.breakpoints.down('xs')]: {
      width: '50%',
      height: 40
    },
    '&:hover': {
      backgroundColor: colors.invariant.newDark,
      color: colors.invariant.lightGrey
    }
  },
  stakeButton: {
    fontSize: 16,
    width: 92,
    height: 27,
    fontWeight: 700,
    borderRadius: 9,
    padding: '7px 0',
    background: 'rgba(239, 132, 245, 0.9)',
    textTransform: 'none',
    color: colors.black.full,
    [theme.breakpoints.down('xs')]: {
      width: '50%',
      height: 40
    },
    '&:hover': {
      boxShadow: '0px 0px 20px -8px white',
      background: 'rgba(239, 132, 245, 0.9)'
    }
  },
  labelText: {
    justifyContent: 'center',
    ...typography.caption1,
    color: colors.white.main
  },
  top: {
    marginBottom: 20,
    display: 'flex',
    justifyContent: 'space-between',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column'
    }
  },
  labelGrid: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 36
  },
  greenText: {
    ...typography.body1,
    color: colors.invariant.green,
    letterSpacing: '-0.03em',
    [theme.breakpoints.down('xs')]: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: 10
    }
  },
  label: {
    color: colors.white.main,
    ...typography.caption1,
    fontWeight: 400
  },
  infoText: {
    ...typography.caption2,
    letterSpacing: '-0.03em',
    color: colors.invariant.textGrey
  },
  value: {
    color: colors.white.main,
    ...typography.caption1,
    marginLeft: 4
  },
  spacing: {
    marginLeft: 2
  },
  link: {
    marginTop: 20,
    textDecoration: 'none'
  },
  buttonStake: {
    width: '100%',
    height: 44,
    borderRadius: 16,
    textTransform: 'none',
    ...typography.body1,
    fontWeight: 700,
    letterSpacing: '-0.03em',
    background: colors.invariant.pinkLinearGradientOpacity,
    color: colors.black.full,
    '&:hover': {
      background: colors.invariant.pinkLinearGradient,
      boxShadow: '0px 0px 16px rgba(239, 132, 245, 0.35)}'
    }
  },
  buttonContainer: {
    backgroundColor: colors.invariant.newDark,
    borderRadius: 16,
    width: 184,
    [theme.breakpoints.down('xs')]: {
      display: 'flex',
      justifyContent: 'space-between',
      width: '100%'
    }
  },
  buttonUnstake: {
    width: '100%',
    height: 44,
    borderRadius: 16,
    textTransform: 'none',
    ...typography.body1,
    fontWeight: 700,
    background: colors.invariant.greenLinearGradientOpacity,
    color: colors.black.full,
    '&:hover': {
      background: colors.invariant.greenLinearGradient,
      boxShadow: '0px 0px 16px rgba(46, 224, 154, 0.35)'
    }
  },
  stakeLabel: {
    ...typography.body3
  },
  claimRewards: {
    width: 115,
    letterSpacing: '-0.03em',
    height: 44,
    borderRadius: 16,
    textTransform: 'none',
    ...typography.body1,
    background: colors.invariant.greenLinearGradientOpacity,
    color: colors.black.full,
    [theme.breakpoints.down('xs')]: {
      ...typography.body3,
      minWidth: 105
    },
    '&:hover': {
      background: colors.invariant.greenLinearGradient,
      boxShadow: '0px 0px 8px rgba(46, 224, 154, 0.35)'
    }
  },
  infoContainer: {
    marginBottom: 20,
    display: 'flex',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      maxHeight: 200
    }
  },
  boxLeft: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '50%',
    flexDirection: 'column',
    [theme.breakpoints.down('xs')]: {
      width: '100%'
    }
  },
  boxRight: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '50%',
    flexDirection: 'column',
    textAlign: 'right',
    [theme.breakpoints.down('xs')]: {
      textAlign: 'left',
      width: '100%'
    }
  },
  tokenArea: {
    backgroundColor: colors.invariant.newDark,
    borderRadius: 16,
    display: 'flex',
    flexDirection: 'row',
    width: 353,
    height: 40,
    justifyContent: 'flex-start',
    marginRight: 8,
    '&:not(:last-child)': {
      marginBottom: 8
    }
  },
  token: {
    backgroundColor: colors.invariant.light,
    borderRadius: 12,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    margin: 4,
    padding: '3px 12px'
  },
  tokenName: {
    color: colors.white.main,
    ...typography.caption1,
    [theme.breakpoints.down('xs')]: {
      ...typography.body2
    }
  },
  tokenValue: {
    ...typography.heading4,
    color: colors.white.main,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0 15px',
    [theme.breakpoints.down('xs')]: {
      ...typography.body2,
      paddingLeft: 4
    }
  }
}))

export default useStyles