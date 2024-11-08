import React from "react";
import Register from "./register";

const page = async ({ params }) => {
  const { as } = await params;
  return (
    <div>
      <Register as={as[0]} />
    </div>
  );
};

export default page;
