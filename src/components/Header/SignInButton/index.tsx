import styles from './styles.module.scss';
import { FaGithub } from 'react-icons/fa'

export const SignInButton: React.FC = (props) => {
  return (

    <button type="button">
      <FaGithub />
      Sign in with GitHub
    </button>
  )
}