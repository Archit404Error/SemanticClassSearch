import { useState } from "react"
import SearchBar from "./searchbar"
import '../App.css';

const CourseQueries = () => {
    const [courses, setCourses] = useState([])

    const fetchSimiliarCourses = async (query) => {
        if (query === '') return;
        let res = await fetch(`http://localhost:8000/search?query=${query}&amt=10`)
        setCourses(await res.json())
    }

    return (
        <div className="CourseQueries">
            <SearchBar submitFunc={fetchSimiliarCourses} />
            {
                courses.map((course, i) => (
                    <div key={`courseRec${i}`} style={{ width: "60vw", textAlign: 'left', marginTop: 30, backgroundColor: '#3E4451', padding: 40, paddingLeft: 60 }}>
                        <h3 className="smallMargin">{course.title} ({course.dept} {course.number})</h3>
                        <p className="smallMargin">{Math.round(course.similarity * 10000) / 100}% query similarity score</p>
                        <p className="smallMargin">{course.desc}</p>
                        <a target="_blank" href="https://google.com" rel="noreferrer">View on Class Roster</a>
                    </div>
                ))
            }
        </div>
    )
}

export default CourseQueries