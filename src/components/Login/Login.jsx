import {Button, Stack} from "@mui/material";
import {useNavigate} from "react-router-dom";


// 위에 메뉴들 그리기
export default function Login() {
    const navigate = useNavigate();
    const onClickSignUp = () => {
        navigate('/signup');
    }
    return (
        <>
            <Stack>로그인해</Stack>
            <Button onClick={() => onClickSignUp()}>회원가입해</Button>
        </>

    )
}