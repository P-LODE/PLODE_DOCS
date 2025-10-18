import React from "react";
import { Button } from "@/components/react/Button/Button.js";

export interface LoginButtonProps {
  onLogin: () => void;
  provider: string;
  icon?: React.ReactNode;
}

export function LoginButton({ onLogin, provider, icon }: LoginButtonProps) {
  return (
    <Button size="sm" variant="primary" onClick={onLogin}>
      {icon && <span className="mr-2">{icon}</span>}
      Sign in with {provider}
    </Button>
  );
}

