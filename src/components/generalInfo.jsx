function GeneralInfo() {
    return (
        <section className="generalInfo grid grid-cols-1 w-[50%]">
        <label for="name">Name</label>
        <input type="text" id="name" name="name" />

        <label for="email">email</label>
        <input type="email" id="email" name="email" />

        <label for="phoneNumber">Phone number</label>
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          
        />
      </section>
    )
}

export default GeneralInfo;