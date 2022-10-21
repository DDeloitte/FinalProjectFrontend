import React, { useState } from "react";
import GetByIdForm from "./GetByIdForm";

const GetById = (props) => {

  return <GetByIdForm items={props.items} />;
};

export default GetById;
