import { useState } from "react"
import SearchBar from "./searchbar"
import '../App.css';
import ActionAccordion from "./accordion";

const CourseQueries = () => {
    const [courses, setCourses] = useState([])
    const [query, setQuery] = useState('')

    const fetchSimiliarCourses = async (userQuery, amt = 20) => {
        if (userQuery === '') return;
        let res = await fetch(`https://backend.cornellcourses.org/search?query=${userQuery}&amt=${amt}`)
        setCourses(await res.json())
    }

    return (
        <div>
            <SearchBar submitFunc={fetchSimiliarCourses} query={query} queryChange={setQuery} />
            <div style={{ display: 'flex' }}>
                <div style={{ marginLeft: '10vw' }}>
                    {
                        courses.length > 0 && courses[0].similarity < 0.5 &&
                        <div className="CourseResult">
                            <p>Note: there were no great matches on this topic, but some potential matches are displayed below.</p>
                        </div>
                    }
                    {
                        courses.map((course, i) => (
                            <div key={`courseRec${i}`} className="CourseResult">
                                <h3 className="smallMargin">{course.title} ({course.dept} {course.number})</h3>
                                <span><p className="smallMargin">{Math.round(course.similarity * 10000) / 100}% query similarity score</p></span>
                                <p className="smallMargin">{course.desc}</p>
                                <a target="_blank" href={`https://classes.cornell.edu/browse/roster/SP23/class/${course.dept}/${course.number}`} rel="noreferrer">View on Class Roster</a>
                            </div>
                        ))
                    }
                </div>
                {
                    courses.length > 0 &&
                    <ActionAccordion submitFunc={fetchSimiliarCourses} query={query} />
                }
            </div>
        </div>
    )
}

export default CourseQueries