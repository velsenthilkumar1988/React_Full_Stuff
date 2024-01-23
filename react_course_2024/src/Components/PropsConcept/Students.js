function StudentsPage(props)
{
    console.log(props);
    const {showStudentNoText} = props;
    return(
        <div>
            <h1>Student List Pages</h1>
            {showStudentNoText ? (<p>The No. of Students in the class is 100</p>) : (<p>No Students</p>)}
            
        </div>
    )
}
export default StudentsPage;