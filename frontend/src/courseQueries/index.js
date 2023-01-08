import { useState } from "react"
import SearchBar from "./searchbar"

const CourseQueries = () => {
    const [courses, setCourses] = useState([])

    const fetchSimiliarCourses = async (query) => {
        let res = await fetch(`http://localhost:8000/search?query=${query}&amt=10`)
        setCourses(await res.json())
    }

    return (
        <div className="CourseQueries">
            <SearchBar submitFunc={fetchSimiliarCourses} />
            {
                courses.map((course, i) => (
                    <h1 key={`courseRec${i}`}>{course.title}</h1>
                ))
            }
        </div>
    )
}

export default CourseQueries