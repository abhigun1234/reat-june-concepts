import React, { Component } from 'react';
import axios from 'axios'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
class CourseList extends Component {
    constructor() {

        super()
        this.state = { courseList: [] }
    }
    render() {

        return (
            <div>
                {this.state.courseList.length ?
                    this.state.courseList.map(course =>
                        <div >
                            {/* <div>{course.name}</div>
                            <div>{course.id}</div>
                            <div>{course.fees}</div>
                            <div>{course.duration}</div> */}
                            <div className="course-list">
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src="holder.js/100px180" />
                                    <Card.Body>
                                        <Card.Title>{course.name}</Card.Title>
                                        <Card.Text>
                                            {course.fees}
                                        </Card.Text>
                                        <Card.Text>
                                            {course.duration}
                                        </Card.Text>
                                        <Button variant="primary">Go somewhere</Button>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                    ) : null
                }
            </div>
        );
    }
    componentDidMount() {


        axios.get("https://dronaonlineadmin.herokuapp.com/courses/").then(res => {
            console.log("res", res)
            this.setState({ courseList: res.data.courseDetails })
            console.log("courseList", this.state.courseList)

        }).catch(error => {
            console.log("error")
        })
    }
}

export default CourseList;