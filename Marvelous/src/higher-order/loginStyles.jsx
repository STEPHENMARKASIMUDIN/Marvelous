export const useStyles = theme => ({
    '@global': {
        body: {
            backgroundColor: theme.palette.common.white,
        },
    },
    paper: {
        marginTop: theme.spacing(18),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: "white",
        borderRadius: "8px",
        opacity: 0.9
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
        width: '65px',
        height: '65px'
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    progressBar: {
        flexGrow: 1,
    }


})
