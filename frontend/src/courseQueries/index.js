import { useState } from "react"
import SearchBar from "./searchbar"
import '../App.css';

const CourseQueries = () => {
    const [courses, setCourses] = useState([])

    const fetchSimiliarCourses = async (query) => {
        if (query === '') return;
        let res = await fetch(`http://34.150.144.93:8000/search?query=${query}&amt=20`)
        setCourses(await res.json())
    }

    return (
        <div className="CourseQueries">
            <SearchBar submitFunc={fetchSimiliarCourses} />
            {
                courses.length > 0 && courses[0].similarity < 0.5 &&
                <div style={{ width: "60vw", textAlign: 'left', marginTop: 30, backgroundColor: '#3E4451', padding: 40, paddingLeft: 60 }}>
                    <p>Note: there were no great matches on this topic, but some potential matches are displayed below.</p>
                </div>
            }
            {
                courses.map((course, i) => (
                    <div key={`courseRec${i}`} style={{ width: "60vw", textAlign: 'left', marginTop: 30, backgroundColor: '#3E4451', padding: 40, paddingLeft: 60 }}>
                        <h3 className="smallMargin">{course.title} ({course.dept} {course.number})</h3>
                        <span><p className="smallMargin">{Math.round(course.similarity * 10000) / 100}% query similarity score</p></span>
                        <p className="smallMargin">{course.desc}</p>
                        <a target="_blank" href={`https://classes.cornell.edu/browse/roster/SP23/class/${course.dept}/${course.number}`} rel="noreferrer">View on Class Roster</a>
                    </div>
                ))
            }
        </div>
    )
}

export default CourseQueries