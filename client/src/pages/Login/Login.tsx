import { useState } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import { Button, Input, Label, Card, CardHeader, useId, Text, Body1, Checkbox } from '@fluentui/react-components';
import { LockClosedRegular, MailRegular, EyeRegular, EyeOffRegular } from "@fluentui/react-icons";
import { useLoginStyles } from './styles';
import { useAuth } from '../../context/AuthContext';

const Login = () => {
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const { login, isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Navigate to="/dishes" replace />;
  }

  const handleLogin = (email: string, password: string) => {
    console.log('Login attempt:', { email, password });
    login({
      email,
      password,
      role: 'admin',
      name: 'Ansab Khan'
    });
    // TODO: Call backend auth service here
  };

  return showRegisterForm ?
    <RegisterForm setShowRegisterForm={setShowRegisterForm} /> :
    <LoginForm onLogin={handleLogin} setShowRegisterForm={setShowRegisterForm} />;
};

const LoginForm = ({ onLogin, setShowRegisterForm }: { onLogin: (email: string, password: string) => void; setShowRegisterForm: (value: boolean) => void; }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleRememberMe = (value: boolean) => {
    if (value) {
      console.log('remember session')
    }
    setRememberMe(value);
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(email, password);
  };

  // TODO: Call backend forgot password service here
  const openForgotPassForm = () => {
    console.log('Open forgot password form');
    window.alert('Forgot password is under development');
    // navigate('/forgot-password');
  }
  
  // TODO: Call backend register service here
  const showCreateUserForm = () => {
    window.alert('Registration is under development');
    // setShowRegisterForm(true);
  }

  const emailId = useId("email-input");
  const passwordId = useId("password-input");

  const styles = useLoginStyles();

  return (
    <div className={styles.wrapper}>
      <Card className={styles.card}>
        <CardHeader
          header={<Text weight="semibold" size={600}>Login</Text>}
        />
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputContainer}>
            <Label htmlFor={emailId} size="large">Email</Label>
            <Input
              size="large"
              contentBefore={<MailRegular />} id={emailId}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
          </div>
          <div className={styles.inputContainer}>
            <Label htmlFor={passwordId} size="large"> Password</Label>
            <Input
              size="large"
              contentBefore={<LockClosedRegular />}
              contentAfter={
                <span className={styles.passwordToggle} onClick={togglePasswordVisibility}>
                  {showPassword ? <EyeOffRegular /> : <EyeRegular />}
                </span>
              }
              autoComplete='off'
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}"
              id={passwordId}
            />
            <Body1 className={styles.inputNotes}>
              Must contain at least 8 characters, including uppercase, lowercase, number, and special character.
            </Body1>
          </div>
          <div className={styles.col2}>
            <Checkbox
              checked={rememberMe}
              onChange={(_, data) => {
                if (typeof data.checked === 'boolean') {
                  toggleRememberMe(data.checked);
                }
              }}
              label="Remember me"
            />
            <Text className={styles.forgotPass} onClick={openForgotPassForm}>Forgot Password ?</Text>
          </div>
          <Button type="submit" appearance="primary" className={styles.submitBtn} size='large'>
            Login
          </Button>
          <Text className={styles.registerText}>Don't have an account? <span onClick={showCreateUserForm}>Register</span></Text>
        </form>
      </Card>
    </div>
  );
};

const RegisterForm = ({setShowRegisterForm} : {setShowRegisterForm: (value: boolean) => void}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // TODO: Call backend register service here
  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    window.alert('Registration is under development');
  };

  const nameId = useId("name-input");
  const emailId = useId("email-input");
  const passwordId = useId("password-input");

  const styles = useLoginStyles();


  return (
    <div className={styles.wrapper}>
      <Card className={styles.card}>
        <CardHeader
          header={<Text weight="semibold" size={600}>Register</Text>}
        />
        <form onSubmit={handleRegister} className={styles.form}>
          <div className={styles.inputContainer}>
            <Label htmlFor={nameId} size="large">Name</Label>
            <Input
              size="large"
              contentBefore={<MailRegular />} id={nameId}
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              required
            />
          </div>
          <div className={styles.inputContainer}>
            <Label htmlFor={emailId} size="large">Email</Label>
            <Input
              size="large"
              contentBefore={<MailRegular />} id={emailId}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
          </div>
          <div className={styles.inputContainer}>
            <Label htmlFor={passwordId} size="large"> Password</Label>
            <Input
              size="large"
              contentBefore={<LockClosedRegular />}
              contentAfter={
                <span className={styles.passwordToggle} onClick={togglePasswordVisibility}>
                  {showPassword ? <EyeOffRegular /> : <EyeRegular />}
                </span>
              }
              autoComplete='off'
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}"
              id={passwordId}
            />
            <Body1 className={styles.inputNotes}>
              Must contain at least 8 characters, including uppercase, lowercase, number, and special character.
            </Body1>
          </div>
          <Button type="submit" appearance="primary" className={styles.submitBtn} size='large'>
            Register
          </Button>
          <Text className={styles.registerText}>Already have an account? <span onClick={()=>setShowRegisterForm(false)}>Login</span></Text>
        </form>
      </Card>
    </div>
  );
}

export default Login;
