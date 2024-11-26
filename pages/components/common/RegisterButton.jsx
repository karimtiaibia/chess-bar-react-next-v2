import React, { useState } from 'react';
import { Button } from './Button';

export default function RegisterButton() {
    const [pending, setPending] = useState(false);

    return (
        <Button className="register-button" aria-disabled={pending}>
            Register
        </Button>
    );
}
