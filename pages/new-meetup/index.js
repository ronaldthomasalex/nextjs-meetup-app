import React from "react";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import { useRouter } from "next/router";
import Head from "next/head";

const NewMeetupPage = () => {
  const router = useRouter();

  async function addMeetupHandler(enteredMeetupData) {
    try {
      const response = await fetch("/api/new-meetup", {
        method: "POST",
        body: JSON.stringify(enteredMeetupData),
        header: {
          "Context-type": "application/json",
        },
      });

      const data = await response.json();
      console.log("data", data);

      router.push("/");
    } catch (err) {
      console.log("error", err);
    }
  }
  return (
    <>
      <Head>
        <title>Add a new meetup</title>

        <meta
          name="Description"
          content="Add your own meetups and create amazing network opportunities"
        />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />;
    </>
  );
};

export default NewMeetupPage;
