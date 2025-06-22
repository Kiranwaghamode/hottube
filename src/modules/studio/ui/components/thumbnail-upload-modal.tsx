import { ResponsiveModal } from "@/components/responsive-modal";

interface ThumbnailUploadModalProps {
    videoId: string;
    open: boolean;
    onOpenChange: (open: boolean)=> void
}


export const ThumbnailUploadModal = ({ 
    videoId,
    open,
    onOpenChange
}: ThumbnailUploadModalProps) =>{

    return (
        <ResponsiveModal
        title="Upload the thumbnail"
        open={open}
        onOpenChange={onOpenChange}
        >
            <p>Hello!</p>
        </ResponsiveModal>
    )
}