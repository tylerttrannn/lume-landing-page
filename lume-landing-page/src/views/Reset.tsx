import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createClient } from "@supabase/supabase-js";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Missing Supabase environment variables");
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

function Reset() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const { error } = await supabase.auth.updateUser({ password });
    if (error) {
      alert("Update failed: " + error.message);
    } else {
      alert("Password updated!");
      navigate("/success");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <h1>Reset Password</h1>
      <div className="flex flex-col space-y-2">
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>
      <Button variant="outline" onClick={handleSubmit}>
        Submit
      </Button>
    </div>
  );
}

export default Reset;
