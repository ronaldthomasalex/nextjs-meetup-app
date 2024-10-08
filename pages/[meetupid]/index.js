import React from "react";
import { MongoClient, ObjectId } from "mongodb";
import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetailsPage = (props) => {
  const { meetupData } = props;
  return (
    <MeetupDetail
      image={meetupData.image}
      title={meetupData.title}
      address={meetupData.address}
      description={meetupData.description}
    />
  );
};

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://ronaldthomas094db:irzAh9W5WriXKXN1@ronaldmongocluster.0ronf.mongodb.net/meetups?retryWrites=true&w=majority&appName=ronaldmongocluster"
  );

  const db = client.db();

  const meetupsCollections = db.collection("meetups");

  const meetups = await meetupsCollections.find({}, { _id: 1 }).toArray();
  console.log("meetups", meetups);

  client.close();

  return {
    fallback: false,
    paths: meetups.map((meetup) => ({
      params: { meetupid: meetup._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  // Fetch data for API
  const meetupId = context.params.meetupid;

  const client = await MongoClient.connect(
    "mongodb+srv://ronaldthomas094db:irzAh9W5WriXKXN1@ronaldmongocluster.0ronf.mongodb.net/meetups?retryWrites=true&w=majority&appName=ronaldmongocluster"
  );

  const db = client.db();

  const meetupsCollections = db.collection("meetups");

  const selectedMeetup = await meetupsCollections.findOne({
    _id: new ObjectId(meetupId),
  });

  console.log("selectedMeetup", selectedMeetup);

  client.close();

  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        address: selectedMeetup.address,
        description: selectedMeetup.description,
        image: selectedMeetup.image,
      },
    },
  };
}

export default MeetupDetailsPage;
