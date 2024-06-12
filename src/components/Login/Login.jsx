import {Box, Button, Stack, TextField, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";


// 위에 메뉴들 그리기
export default function Login() {
    const navigate = useNavigate();
    const onClickSignUp = () => {
        navigate('/signup');
    }
    return (
        <>
            <Box
                sx={{ height: 500, width: 500, border: '2px solid grey', alignItems:'center'}}>
                <Stack>로그인</Stack>
                <Typography>
                    아이디 <TextField  sx={{ml:2}} id="outlined-basic" label="ID" variant="outlined" />
                </Typography>
                <Typography>
                    비밀번호 <TextField sx={{ml:2}} id="outlined-basic" label="PW" variant="outlined" />
                </Typography>
                <Button color="secondary" onClick={() => onClickSignUp()}>회원가입</Button>
            </Box>

        </>

    )
}