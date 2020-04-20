import React from 'react'

import './StudentResults.scss'
const StudentResults = ({results,selectStudent}) => {
    let resultList = results.map((student) => {
        return (
            <tr>
                <td className="grade" style={{ color: student.color }}>{student.grade}</td>
                <td>{student.studentName}</td>
                <td className="Teacher">{student.classTeacher}</td>
                <td>{student.branchName}</td>
                <td className="button"> <p className="btn" onClick={() => {selectStudent(student)}}>></p></td>
            </tr>
        )
    })
    return (
        <div className="resultTable">
        <table>
            <tr>
                <th>Grade</th>
                <th>Student Name</th>
                <th className="Teacher">Teacher Name</th>
                <th>Branch</th>
            </tr>
            {resultList}
        </table>
    </div>
    )
}

export default StudentResults