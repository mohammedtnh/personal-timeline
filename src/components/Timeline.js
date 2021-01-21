import TimelineItem from "./TimelineItem";
import data from "../data";
import "../style.css";

const Timeline = () => {
  const timeline = data.map((data) => (
    <TimelineItem key={data.id} data={data} />
  ));
  return <ul className="timeline">{timeline}</ul>;
};
export default Timeline;
