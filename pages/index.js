import Head from "next/head";
import React from "react";
import { MongoClient } from "mongodb";

import MeetupList from "../components/meetups/MeetupList";

const HomePage = (props) => {
  return (
    <>
      <Head>
        <title>React meetup</title>

        <meta
          name="Description"
          content="Browse a list of all meetups in Sydney"
        />
      </Head>

      <MeetupList meetups={props.meetups} />
    </>
  );
};

export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://ronaldthomas094db:irzAh9W5WriXKXN1@ronaldmongocluster.0ronf.mongodb.net/meetups?retryWrites=true&w=majority&appName=ronaldmongocluster"
  );

  const db = client.db();

  const meetupsCollections = db.collection("meetups");
  // FETCH DATA FROM API

  const meetups = await meetupsCollections.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        description: meetup.description,
        id: meetup._id.toString(),
      })),
    },
    // revalidate: 10,
  };
}

// export async function getServerSideProps(context) {
//   // const req = context.req;
//   // const res = context.res;

//   // FETCH DATA FROM API
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }

export default HomePage;
