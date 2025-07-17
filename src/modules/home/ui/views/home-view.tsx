import { CategoriesSection } from "../sections/categories-section"

interface HomeviewProps {
    categoryId? : string
}

export const HomeView = ({categoryId}: HomeviewProps)=>{
    return (
        <div className="max-w-[2400px] mx-auto mb-10 pt-2.5 flex flex-col gap-y-6">
            <CategoriesSection categoryId={categoryId}/>
        </div>
        )
}