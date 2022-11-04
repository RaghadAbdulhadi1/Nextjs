import React from 'react'
import { render, screen } from '@testing-library/react'
import { Button } from "./index"

test('should render a button with the class of button', () => {
    render(<Button isSubmit={true} text={"Button"} className={'button'} handleClick={()=> console.log("aa")}/>)
    const basicButton = screen.getByRole('button', { name: /button/i });
    expect(basicButton).toHaveClass('button');
})

test('button exists', () => {
    render(<Button isSubmit={true} text={"Button"} className={'button'} handleClick={()=> console.log("aa")}/>)
    const basicButton = screen.getByText(/button/i);
    expect(basicButton).toBeInTheDocument();
})

