import { ComponentProps } from "react";

interface IconButtonProps extends ComponentProps<'button'> {
    transparent?: boolean
}

export function IconButton({ transparent, ...props }: IconButtonProps) {
    return (
        <button
            {...props}
            className={
                transparent
                    ? "bg-black/20 border rounded-md p-1.5 border-white/10"
                    : "bg-white/10 border rounded-md p-1.5 border-white/10"
            }
        />
    )
}