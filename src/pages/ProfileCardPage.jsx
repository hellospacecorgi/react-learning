import ProfileCard from "../components/ProfileCard";
import AlexaImage from "../assets/png/alexa.png";
import CortanaImage from "../assets/png/cortana.png";
import SiriImage from "../assets/png/siri.png";

// console.log(AlexaImage); // alexa.png is less than 9.7kb gets inlined in bundle.js
// console.log(SiriImage); // siri.png is larger than 9.7kb gets treated as a separate file

function ProfileCardPage() {
  return (
    <div>
      <div className="container">
        <p className="h1 p-3 mb-2 bg-success text-white">
          Personal Digital Assistants - Image, Styling
        </p>
      </div>
      <div className="container text-center">
        <div className="row">
          <div className="col is-3">
            <ProfileCard
              title="Alexa"
              handle="@alexa99"
              imageSrc={AlexaImage}
              description="Alexa was created by Amazon"
            />
          </div>
          <div className="col is-3">
            <ProfileCard
              title="Cortana"
              handle="@cortana32"
              imageSrc={CortanaImage}
              description="Cortana was created by Microsoft"
            />
          </div>
          <div className="col is-3">
            <ProfileCard
              title="Siri"
              handle="@siri01"
              imageSrc={SiriImage}
              description="Siri was created by Apple"
            />
          </div>
          <div className="col is-3">
            <ProfileCard
              title="Scene"
              handle="@scenephotography"
              imageSrc="https://picsum.photos/200/300"
              description="Photo from picsum"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileCardPage;
