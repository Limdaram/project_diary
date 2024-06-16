import {Box, Button, Stack, TextField, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";
import loginImg from '../../img/loginImg.jpg';


// 위에 메뉴들 그리기
export default function Login() {
    const navigate = useNavigate();
    const onClickSignUp = () => {
        navigate('/signup');
    }
    return (
        <div style={{
            backgroundImage: `url(${loginImg})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'top center',
            backgroundAttachment: 'fixed',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            width: '100vw',
            overflow: 'hidden'
        }}>
            <Stack
                sx={{
                    padding: 3,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Stack spacing={2} alignItems="center">
                    <Typography variant="h4" color='black'>로그인</Typography>
                    <Box sx={{display: 'flex', alignItems: 'center'}}>
                        <Typography color='black'>아이디</Typography>
                        <TextField sx={{ml: 2}} id="outlined-basic" label="ID" variant="outlined"/>
                    </Box>
                    <Box sx={{display: 'flex', alignItems: 'center'}}>
                        <Typography color='black' >비밀번호</Typography>
                        <TextField sx={{ml: 2}} id="outlined-basic" label="PW" variant="outlined"/>
                    </Box>
                </Stack>
                <Stack direction='row' justifyContent='flex-end' mt={5}>
                    <Button color="secondary" onClick={onClickSignUp}>회원가입</Button>
                </Stack>
            </Stack>
        </div>

        )
    }