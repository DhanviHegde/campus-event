<b>Campus Event Management Backend</b></br>
This is the backend for a Campus Event Management Platform, built with Node.js, Express, MySQL, and Sequelize.
It allows colleges to manage events, student registrations, attendance, feedback, and generate reports.</br></br>
<b>Approach & Assumptions</b></br>
Each event belongs to a college and is uniquely identified.
Students can register for multiple events.
Attendance can only be marked for registered students.
Feedback is optional and collected after event completion.</br></br>
<b>Data Tracked</b></br>
Event: title, type, date, createdBy, collegeId
Student: name, email
Registration: StudentId, EventId, attendance
Feedback: StudentId, EventId, rating, comment</br></br>
<b>API Endpoints</b></br>
<b>Events</b></br>
<b>Create Event</b></br>
Method: POST</br>
Endpoint: /api/events</br>
Description: Create a new event.</br>
</hr></br>
<b>List Events</b></br>
Method: GET</br>
Endpoint: /api/events</br>
Description: Retrieve a list of all events.</br>
</hr></br>
<b>Students</b></br>
<b>Create Student</b></br>
Method: POST</br>
Endpoint: /api/students</br>
Description: Create a new student.</br>
</hr></br>
<b>List Students</b></br>
Method: GET</br>
Endpoint: /api/students</br>
Description: Retrieve a list of all students.</br>
</hr></br>
<b>Registrations</b></br>
<b>Register Student for Event</b></br>
Method: POST</br>
Endpoint: /api/registrations</br>
Description: Register a student for a specific event.</br>
</hr></br>
<b>Mark Attendance</b></br>
Method: PATCH</br>
Endpoint: /api/registrations/:id/attendance</br>
Description: Mark attendance for a student registration.</br>
</hr></br>
<b>Feedback</b></br>
<b>Submit Feedback</b></br>
Method: POST</br>
Endpoint: /api/feedbacks</br>
Description: Submit feedback for a specific event.</br>
</hr></br>
<b>Reports</b></br>
<b>Event Popularity Report</b></br>
Method: GET</br>
Endpoint: /api/reports/events</br>
Description: Get a report showing the popularity of events based on registrations.</br>
</hr></br>
<b>Student Participation Report</b></br>
Method: GET</br>
Endpoint: /api/reports/students</br>
Description: Get a report showing how many events each student attended.</br>
</hr></br>

<b>Workflows</b>
Student Registration and Attendance</br>
Student selects event -> submits registration -> stored in Registration.</br>
On event day, admin marks student attendance -> updates attendance field.</br>
After event, student can submit feedback -> stored in Feedback.</br>
Reports can be generated at any time using Sequelize queries.</br>

<b>Tech Stack</b>
Backend: Node.js, Express.js</br>
Database: MySQL</br>
ORM: Sequelize</br>
Environment Management: dotenv</br>
Development Tools: nodemon, Postman (for API testing)</br>

Used ChatGPT for brainstorming the backend structure and modular design.</br>
Followed AI suggestions for:</br>
Modular folder structure</br>
Sequelize associations</br>
Report query designs</br>
Deviated from AI suggestions in:</br>
Final API paths for better readability</br>
Adding explicit validation for student/event existence before feedback</br>

<b>Notes & Edge Cases</b>
Cannot register the same student for the same event twice.</br>
Attendance cannot be marked for unregistered students.</br>
Feedback is optional; missing feedback does not break reports.</br>





