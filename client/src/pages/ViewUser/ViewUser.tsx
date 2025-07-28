import { Text, Link } from '@fluentui/react-components';
import { useViewUserStyles } from './styles';
import { useAuth } from '../../context/AuthContext';


export default function ViewUser() {
  const styles = useViewUserStyles();
  const { isAuthenticated } = useAuth();

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h2>User Details</h2>
        <Text size={800}>Under Development</Text>
        {
          isAuthenticated?
          <Link href='/dishes'>View Dishes</Link>
          :
          <Link href='/'>Go To Login</Link>
        }
      </div>
    </div>
  )
}