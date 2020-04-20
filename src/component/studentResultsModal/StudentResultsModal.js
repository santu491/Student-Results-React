import React from 'react'
import Modal from '../../UI/Modal'
import './StudentResultsModal.scss'

const StudentResultsModal = ({ studentData, setShowModal }) => {
    return (
        <Modal>
            <div className="modalContent">
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
                <p>Grade: <span style={{ color: studentData.color }}>{studentData.grade}</span> </p>
                <button className="close" onClick={setShowModal}>Close</button>
            </div>

        </Modal>

    )
}

export default StudentResultsModal