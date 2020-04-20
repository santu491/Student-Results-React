// import React, { useState, useEffect } from 'react'
// import { studentsInfo } from '../constants/StudentsInfo'
// import { connect } from 'react-redux'
// import { convertIntoGrades, convertIntoPercentage } from '../utilities/genericFunctions'
// import ToolBar from './ToolBar'

// const StudentResults = (props) => {

//     const [results, setResults] = useState(studentsInfo)
//     const [serachResults, setSearchResults] = useState([])

//     const setPercaentage = (results) => {
//         let marks = []
//         for (let key in results) {
//             marks.push(parseFloat(results[key]))
//         }
//         const totalMarks = marks.reduce((accmulator, currentValue) => accmulator + currentValue)
//         const percentage = convertIntoPercentage(totalMarks)
//         const grade = convertIntoGrades(percentage)
//         return grade
//     }

//     const updateResults = () => {
//         let updatedData = results.map((student) => {
//             return {
//                 ...student,
//                 grade: setPercaentage(student.marks)
//             }
//         })
//         updatedData.sort((a, b) => {
//             var x = a.grade.toLowerCase();
//             var y = b.grade.toLowerCase();
//             if (x < y) { return -1; }
//             if (x > y) { return 1; }
//             return 0;
//         })
//         setResults(updatedData)
//         setSearchResults(updatedData)
//     }

//     useEffect(() => {
//         updateResults()
//     }, [])

//     const searchHandler = (e) => {
//         let searchString = e.target.value.trim()
//         if (searchString !== "") {
//             let updatedResults = serachResults.filter((student) => {
//                 return student.studentName.toLocaleLowerCase().indexOf(searchString.toLocaleLowerCase()) > -1
//             })
//             setResults(updatedResults)
//         }
//     }

//     let resultList = results.map((student) => {
//         return (
//             <div>
//                 <p>{student.grade}</p>
//                 <p>{student.studentName}</p>
//                 <p>{student.classTeacher}</p>
//                 <p>{student.branchName}</p>
//             </div>
//         )
//     })


//     return (
//         <div>
//             {/* <p>hii</p> */}
//             <ToolBar searchHandler={searchHandler} />
//             {resultList}
//         </div>
//     )
// }

// export default StudentResults

//-----------

import React, { useEffect, useState } from 'react'
//import { studentsInfo } from '../constants/StudentsInfo'
import { connect } from 'react-redux'
import { convertIntoGrades, convertIntoPercentage } from '../../utilities/genericFunctions'
import ToolBar from '../ToolBar/ToolBar'
import { getResults, serachResults } from '../../store/results'
import './ResultsDashBoard.scss'
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Modal from '../../UI/Modal'

const StudentResults = (props) => {

    // const [results, setResults] = useState(studentsInfo)
    const [showModal, setShowModal] = useState(false)
    const [studentData, setStudentData] = useState({})

    const setPercaentage = (results) => {
        let marks = []
        for (let key in results) {
            marks.push(parseFloat(results[key]))
        }
        const totalMarks = marks.reduce((accmulator, currentValue) => accmulator + currentValue)
        const percentage = convertIntoPercentage(totalMarks)
        const grade = convertIntoGrades(percentage)
        return grade
    }

    const updateResults = () => {
        let updatedData = props.results.map((student) => {
            return {
                ...student,
                grade: setPercaentage(student.marks).grade,
                color: setPercaentage(student.marks).color

            }
        })
        // updatedData.sort((a, b) => {
        //     var x = a.grade.toLowerCase();
        //     var y = b.grade.toLowerCase();
        //     if (x < y) { return -1; }
        //     if (x > y) { return 1; }
        //     return 0;
        // })

           updatedData.sort((a, b) => {
            var x = a.grade.toLowerCase();
            var y = b.grade.toLowerCase();
            if (x < y) { return -1; }
            if (x > y) { return 1; }
            return 0;
        })

        props.getResults(updatedData)
        //setResults(updatedData)
    }

    useEffect(() => {
        updateResults()
    }, [])

    const searchHandler = (e) => {
        let searchString = e.target.value.trim()
        props.serachResults(searchString)

        // if (searchString !== "") {
        //     let updatedResults = results.filter((student) => {

        //         return student.studentName.toLocaleLowerCase().indexOf(searchString.toLocaleLowerCase()) > -1

        //     })
        //     // props.serachResults()
        //     setResults(updatedResults)
        // }
        // else{
        //     setResults(studentsInfo)
        // }

    }

    // let resultList = props.results.map((student) => {
    //     return (
    //         <div>
    //             <p>{student.grade}</p>
    //             <p>{student.studentName}</p>
    //             <p>{student.classTeacher}</p>
    //             <p>{student.branchName}</p>
    //         </div>
    //     )
    // })

    let resultList = props.results.map((student) => {
        return (

            <tr>
                <td className="grade" style={{color:student.color}}>{student.grade}</td>
                <td>{student.studentName}</td>
                <td  className="Teacher">{student.classTeacher}</td>
                <td>{student.branchName}</td>

              <td className="button"> <p className="btn" onClick={() => {
                    setStudentData(student)
                    setShowModal(true)

                }}>></p></td> 



            </tr>



        )
    })




    return (
        <div className="studentResults">
            {/* <p>hii</p> */}
            <ToolBar searchHandler={searchHandler} />
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
            {/* <div className="model">
                <div className="modelContainer">
                    <p>Name:santosh</p>
                    <p>Branch:C.E.C</p>
                    <p>marks:</p>
                    {displayMarks}
                    <p>Grade: A</p>
                </div>
            </div> */}
            {showModal && <Modal>
                <div   className="modalContent">
                    <p className="results">Results</p>
                    <p>Name:{studentData.studentName}</p>
                    <p>Branch:{studentData.branchName}</p>
          
                    <table>
                        <tr>
                            <th>Subject</th>
                            <th>Marks</th>
                        </tr>
                        {Object.entries(studentData.marks).map(([key, val]) => (
                            <tr>
                                <td>{key}</td>
                                <td>{val}</td>
                            </tr>

                        ))}
                    </table>
                        <p>Grade: <span style={{color:studentData.color}}>{studentData.grade}</span> </p>
                    <button className="close" onClick={() => setShowModal(false)}>close</button>
                    </div>
             
            </Modal>
            }

        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        results: state.results
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getResults: (data) => dispatch(getResults(data)),
        serachResults: (searchString) => dispatch(serachResults(searchString))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentResults)