import Link from 'next/link'
import React from 'react'

const registerHome = () => {
  return (
    <div>
        Register as <Link href={"/register/Job-seeker"}>Job seeker</Link> or <Link href={"/register/recruiter"}>Recruiter</Link> or <Link href={"/register/mentor"}>Mentor</Link>
    </div>
  )
}

export default registerHome
