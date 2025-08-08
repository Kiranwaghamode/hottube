import { CategoriesSection } from "../sections/categories-section"
import { HomeVideosSection } from "../sections/home-videos-section"

interface HomeviewProps {
    categoryId? : string
}

export const HomeView = ({categoryId}: HomeviewProps)=>{
    return (
        <div className="max-w-[2400px] mx-auto mb-10 pt-2.5 flex flex-col gap-y-6">
            <div>
                <CategoriesSection categoryId={categoryId}/>
            </div>
            <HomeVideosSection categoryId={categoryId}/>
        </div>
        )
}