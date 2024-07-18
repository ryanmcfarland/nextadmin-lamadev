import React from "react";

const page = () => {
  const handleForm = async (formData) => {
    "use server";
    console.log(formData.get("username"));
  };

  return (
    <div>
      <form action={handleForm}>
        <input type="text" name="username" />
        <button>Send</button>
      </form>
    </div>
  );
};

export default page;
