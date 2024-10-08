import React from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetailsPage = (meetupData) => {
  return (
    <MeetupDetail
      image="https://upload.wikimedia.org/wikipedia/commons/a/a0/OfferUp_Community_MeetUp_Spot_Sign.png"
      title="First meetup"
      address="123 Sydney Australia"
      description="Meetup description"
    />
  );
};

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupid: "m1",
        },
      },
      {
        params: {
          meetupid: "m2",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  // Fetch data for API
  const meetupId = context.params.meetupid;

  console.log("meetupId", meetupId);

  return {
    props: {
      meetupData: {
        image:
          "https://upload.wikimedia.org/wikipedia/commons/a/a0/OfferUp_Community_MeetUp_Spot_Sign.png",
        title: "First meetup",
        address: "123 Sydney Australia",
        description: "Meetup description",
        id: meetupId,
      },
    },
  };
}

export default MeetupDetailsPage;
