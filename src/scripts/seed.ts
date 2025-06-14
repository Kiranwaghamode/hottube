import { db } from "@/db"
import { categories } from "@/db/schema"


const categoryNames = [
    "Cars",
    "Travel",
    "Podcasts",
    "Drama",
    "Action",
    "Pets And Animals",
    "Science And Technology",
    "Travel And Events",
    "Sports",
    "Blogs",
    "Crime",
    "News And Information",
    "IPL",
    "Batting",
    "Computer Science"
]

async function main(){
    console.log("Seeding the categories.....")

    try {
        const values = categoryNames.map((name)=>({
            name,
            description: `Videos related to ${name.toLowerCase()}`
        }))

        await db.insert(categories).values(values)
        console.log("Categories Seeded")
    } catch (error) {
        console.log("Error seeding categories", error)
        process.exit(1)
    }
}


main()