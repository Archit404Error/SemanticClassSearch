import { Alert } from "@mui/material";
import { useState } from "react";
import '../App.css';
import JobQuery from "../sideBar/jobQuery";
import ActionAccordion from "./accordion";
import SearchBar from "./searchbar";

const CourseQueries = () => {
    const [courses, setCourses] = useState([])
    const [query, setQuery] = useState('')
    const [amt, setAmt] = useState(20)
    const [level, setLevel] = useState(7000)
    const [dep, setDep] = useState('None')

    const fetchSimiliarCourses = async ({ userQuery = query, resAmt = amt, resDep = dep, resLevel = level } = {}) => {
        setQuery(userQuery)
        if (userQuery === '') return;
        let res = await fetch(
            `https://backend.cornellcourses.org/search?query=${userQuery}&amt=${resAmt}&dep=${resDep}&level=${resLevel}`
        )
        const courseData = await res.json()
        if (courseData.length === 0) {
            Alert.alert('No courses found for these parameters.')
            setDep("None")
        } else {
            setCourses(courseData)
        }
    }

    return (
        <div>
            <SearchBar submitFunc={fetchSimiliarCourses} />
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
                <div style={{ flexDirection: 'column', position: 'sticky', top: 30, alignSelf: 'flex-start', margin: 30 }}>
                    {
                        courses.length > 0 && window.innerWidth > 600 &&
                        <ActionAccordion
                            submitFunc={fetchSimiliarCourses}
                            query={query}
                            amt={amt}
                            setAmt={setAmt}
                            dep={dep}
                            setDep={setDep}
                            level={level}
                            setLevel={setLevel}
                        />
                    }
                    {
                        courses.length > 0 && window.innerWidth > 600 &&
                        <JobQuery />
                    }
                </div>
            </div>
        </div>
    )
}

export default CourseQueries