import React from 'react'
import './signup.css'
export const SignUp = () => {
    return (
        <div class="input-group">
            <input 
                required="" 
                type="text" 
                autocomplete="off" 
                class="input" 
            />
            <label class="user-label">First Name</label>
        </div>
    )
}
