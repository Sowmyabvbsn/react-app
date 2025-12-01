import { useState } from 'react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Card } from '../components/ui/card';

function LoginPage({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (username === 'username' && password === 'password') {
      setError('');
      onLogin();
    } else {
      setError('Invalid Credentials');
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50">
      <Card className="w-full max-w-lg p-8 space-y-6">
        <div className="space-y-4">
          <Input
            type="text"
            placeholder="Username"
            className="w-full"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Password"
            className="w-full"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && (
            <p className="text-red-600 text-sm">{error}</p>
          )}
          <Button
            onClick={handleLogin}
            className="w-full"
          >
            Login
          </Button>
        </div>
      </Card>
    </div>
  );
}

export default LoginPage;
