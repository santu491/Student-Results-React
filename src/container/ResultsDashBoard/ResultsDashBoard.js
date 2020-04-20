import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { setPercaentage } from '../../utilities/genericFunctions'
import ToolBar from '../ToolBar/ToolBar'
import { getResults, serachResults } from '../../store/results'
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import StudentResultsModal from '../../component/studentResultsModal/StudentResultsModal'
import StudentResults from '../../component/studentResults/StudentResults'


const ResultsDashBoard = (props) => {
    const [showModal, setShowModal] = useState(false)
    const [studentData, setStudentData] = useState({})

    //update student results with gardes and grade color
    const updateResults = () => {
        let updatedData = props.results.map((student) => {
            return {
                ...student,
                grade: setPercaentage(student.marks).grade,
                color: setPercaentage(student.marks).color

            }
        })
        // updatedData.sort((a, b) => {
        //     console.log("a:",a,"b:",b)
        //     var x = a.grade.toLowerCase();
        //     var y = b.grade.toLowerCase();
        //     if (x < y) { return -1; }
        //     if (x > y) { return 1; }
        //     return 0;
        // })

        //Sort based on Grade and  studentnames
        updatedData.sort((a, b) => {
            let u = a.studentName.toLowerCase();
            let v = b.studentName.toLowerCase();
            let x = a.grade.toLowerCase();
            let y = b.grade.toLowerCase();
            if (x === y) {
                if (u < v) { return -1; }
                if (u > v) { return 1; }
                return 0;
            }
            if (x < y) { return -1; }
            if (x > y) { return 1; }
            return 0;
        })

        props.getResults(updatedData)
    }

    useEffect(() => {
        updateResults()
    }, [])

    const searchHandler = (e) => {
        let searchString = e.target.value.trim()
        props.serachResults(searchString)
    }


    const selectStudent = (student) => {
        setStudentData(student)
        setShowModal(true)
    }


    return (
        <>
            <ToolBar searchHandler={searchHandler} />
            <StudentResults
                results={props.results}
                selectStudent={(student) => selectStudent(student)}
            />
            {
                showModal && <StudentResultsModal studentData={studentData} setShowModal={() => setShowModal(false)} />
            }
        </>
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

export default connect(mapStateToProps, mapDispatchToProps)(ResultsDashBoard)