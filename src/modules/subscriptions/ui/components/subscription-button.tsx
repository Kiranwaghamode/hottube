import { cn } from "@/lib/utils";
import { Button, ButtonProps } from "@/components/ui/button";


interface SubscriptionButtonProps {
    onClick: ButtonProps['onClick'],
    disabled: boolean,
    isSubscribed: boolean,
    clasName?: string,
    size?: ButtonProps["size"]
}


export const SubscriptionButton = ({
    onClick,
    disabled,
    isSubscribed,
    clasName,
    size
}: SubscriptionButtonProps) =>{
    return (
        <Button
        variant={isSubscribed ? 'secondary' : 'default'}
        className={cn('rounded-full', clasName)}
        onClick={onClick}
        disabled={disabled}
        >
            {isSubscribed ? "Unsubscribe" : "Subscribe"}
        </Button>
    )
}