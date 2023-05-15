import MissionItems from "./home/ui/missionItems";
import HomeTitle from "./home/ui/homeTitle";
export default function Home() {
  return (
    <>
      <div className="text-white overflow-hidden">
        <HomeTitle />
        <MissionItems />
      </div>
    </>
  );
}
