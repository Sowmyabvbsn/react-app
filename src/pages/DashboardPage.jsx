import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Avatar, AvatarFallback } from '../components/ui/avatar';
import { LogOut } from 'lucide-react';

function DashboardPage({ onLogout }) {
    return (
        <div className="min-h-screen w-full flex flex-col p-8">
            <div className="flex w-full mb-12 gap-4 items-start">
                <h1 className="text-2xl font-bold whitespace-nowrap">CitizenPortal</h1>
                <div className="flex flex-col flex-1 whitespace-nowrap text-start">
                    Welcome xxxx
                    <div style={{ height: '1px', backgroundColor: 'black' }} />
                </div>

                <Avatar className="h-12 w-12 border-2 border-black ml-auto">
                    <AvatarFallback className="bg-gray-200">U</AvatarFallback>
                </Avatar>
            </div>

            <div className="flex gap-8 flex-1">
                <div className="w-64 flex flex-col justify-between">
                    <div className="space-y-4">
                        <Button
                            variant="outline"
                            className="w-full justify-start text-left border-2 border-black rounded-xl h-auto py-3 px-4"
                        >
                            Dashboard
                        </Button>
                        <Button
                            variant="outline"
                            className="w-full justify-start text-left border-2 border-black rounded-xl h-auto py-3 px-4"
                        >
                            My Applications
                        </Button>
                        <Button
                            variant="outline"
                            className="w-full justify-start text-left border-2 border-black rounded-xl h-auto py-3 px-4"
                        >
                            settings
                        </Button>
                    </div>

                    <Button
                        onClick={onLogout}
                        variant="ghost"
                        className="flex items-center gap-2 justify-start"
                    >
                        <LogOut className="h-4 w-4" />
                        logout
                    </Button>
                </div>

                <div className="flex-1 flex items-start justify-center">
                    <div className="grid grid-cols-3 gap-8 w-full max-w-5xl">
                        <Card className="border-2 border-black rounded-3xl p-12 text-center hover:shadow-lg transition-shadow cursor-pointer">
                            <h3 className="text-lg font-medium">Apply for Adhaar</h3>
                        </Card>
                        <Card className="border-2 border-black rounded-3xl p-12 text-center hover:shadow-lg transition-shadow cursor-pointer">
                            <h3 className="text-lg font-medium">Apply for DL</h3>
                        </Card>
                        <Card className="border-2 border-black rounded-3xl p-12 text-center hover:shadow-lg transition-shadow cursor-pointer">
                            <h3 className="text-lg font-medium">Register Land documents</h3>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DashboardPage;
