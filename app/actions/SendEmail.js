"use server";
export default async function SendEmail(formData) {
  try {
    const email = formData["email"];
    const fullName = formData["fullName"];
    console.log(email, fullName);
  } catch (e) {
    throw new Error(e);
  }
  return <div></div>;
}
