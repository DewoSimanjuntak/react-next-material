import EyeCareLogo from '../../../assets/icons/eyeCareLogo.svg';
import Link from "next/link";
import { styles } from "./style";
import { Button, ButtonGroup } from '@mui/material';

export default function BaseHeader () {
  return (
    <div style={styles.headerWrapper}>
      <EyeCareLogo />
      <div>This is example header</div>
      <ButtonGroup variant="text" aria-label="User Actions">
        <Button>
          <Link href="/login">Login</Link>
        </Button>
        <Button>
          <Link href="/auth/create-account">Register</Link>
        </Button>
      </ButtonGroup>
    </div>
  )
}