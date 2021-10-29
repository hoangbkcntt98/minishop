import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useDispatch } from 'react-redux';
import Breadcrumb from '../components/bread-cumb/BreadCumb';
import { setLinks } from '../redux/product/ProductSlice';

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="/">
                MinimumShop
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const theme = createTheme();

export default function Login() {
    const dispatch = useDispatch()
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        // eslint-disable-next-line no-console
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };
    React.useEffect(() => {
        dispatch(setLinks([{
            display: "Dang nhap",
            link: '/login'
        }]))
    }, [])
    return (
        <React.Fragment>
            <Breadcrumb />
            <ThemeProvider theme={theme}>
                <Container component="main" maxWidth="md" >
                    <CssBaseline />
                    <Box
                        sx={{
                            marginTop: 5,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            border: 'mediu',
                            borderRadius: '10px',
                            p: 2,
                            
                            paddingBottom:3,
                            boxShadow: "2px 2px 2px 2px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12)",
                        }}
                    >
                        <Typography component="h1" variant="h5">
                            Đăng Nhập Tài Khoản
                        </Typography>

                        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                            <hr className="login__hr-title" />
                            <div className="login__social">
                                <button className="login__social__button login__social__button__fb">
                                    <i className="bx bxl-facebook"></i>
                                    <div className="login__social__button__divider">
                                    </div>
                                    <div className="login__social__button__text">
                                        Facebook
                                    </div>


                                </button>
                                <button className="login__social__button login__social__button__gg">
                                    <i className="bx bxl-google-plus"></i>
                                    <div className="login__social__button__divider">
                                    </div>
                                    <div className="login__social__button__text">Google</div>
                                </button>
                            </div>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Remember me"
                            />
                            <div className="login__button">
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{
                                        // mt: 3,
                                        // mb: 2,
                                        border: '1px solid #ed71a3',
                                        backgroundColor: '#ed71a3',
                                        color: "white",
                                        borderRadius: '50px',
                                        width: '50%',

                                    }}
                                >
                                    Đăng Nhập
                                </Button>

                            </div>

                            <hr className="login__hr-title" />
                            <Grid container className = "login__footer">
                                <Grid item xs>
                                    <Link href="#" variant="body2">
                                        Quên mật khẩu
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link href="/signup" variant="body2">
                                     <p>Bạn chưa có tài khoản ?</p>
                                     <p>Đăng kí tại đây</p>
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                    <Copyright sx={{ mt: 8, mb: 4 }} />
                </Container>
            </ThemeProvider>
        </React.Fragment>

    );
}