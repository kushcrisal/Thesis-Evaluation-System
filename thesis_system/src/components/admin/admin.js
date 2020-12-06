import React from 'react'
import { Button } from 'react-bootstrap'



import "./admin.css"

export default function admin() {
    return (
        <div className="adminbody">
            
            <div className="teacher-section">
                <text className="teacher-head">TEACHER</text>
                <div className="add-teacher">
                    <input/>
                    <Button>Add Teacher</Button>


                </div>

                <div className="teacher-list"></div>

            </div>

            <div className="calendar">
                <text className="date-head">DATE</text>
                <div className="add-date">
                <input/>
                <input/>
                <Button>Add Date</Button>
                </div>
                <div className="date-list"></div>

            </div>
            
        </div>
    )
}
