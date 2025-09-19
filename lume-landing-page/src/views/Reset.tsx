import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import { createClient } from '@supabase/supabase-js';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

const supabase = createClient(supabaseUrl, supabaseAnonKey);
const navigate = useNavigate();

async function verifyPasswords(password1: string, password2: string): Promise<boolean> {
    if (password1 !== password2) {
        return false;
    }

    const { data, error } = await supabase.auth.updateUser({ password: password1 });
    if (error) {
        console.error(error);
        return false;
    }

    return true;
}

function Reset() {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = async () => {
        const success = await verifyPasswords(password, confirmPassword);
        if (success) {
            alert('Password updated!');
            navigate("/success");
        } else {
            alert('Passwords do not match or update failed.');
        }
    }

    return (
        <div className="flex flex-col justify-center items-center">
            <h1>Reset Password</h1>
            <div className="flex flex-col space-y-2">
                <Input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <Input
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={e => setConfirmPassword(e.target.value)}
                />
            </div>
            <Button variant="outline" onClick={handleSubmit}>
                Submit
            </Button>
        </div>
    );
}

export default Reset;