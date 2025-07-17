function Education() {
    return (
        <section className="education grid grid-cols-1 w-full">
            <h2>Education</h2>
        <label for="school">School</label>
        <input type="text" id="school" name="school"/>

        <label for="study">Title of Study</label>
        <input type="text" id="study" name="study" />

        <label for="studyDate">Date of Study</label>
        <input
          type="date"
          id="studyDate"
          name="studyDate"
          
        />
      </section>
    )
}

export default Education;