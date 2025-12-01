import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Card } from '../components/ui/card';

function LoginPage({ onLogin }) {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50">
      <Card className="w-full max-w-lg p-8 space-y-6">
        <div className="space-y-4">
          <Input
            type="text"
            placeholder="Username"
            className="w-full"
          />
          <Input
            type="password"
            placeholder="Password"
            className="w-full"
          />
          <Button
            onClick={onLogin}
            className="w-full"
          >
            Login/Signup
          </Button>
        </div>
      </Card>
    </div>
  );
}

export default LoginPage;
