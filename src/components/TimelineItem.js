import "../style.css";

const TimelineItem = (props) => {
  const data = props.data;
  return (
    <li>
      <div class="timeline-image">
        <img class="rounded-circle img-fluid" src={data.image} alt="" />
      </div>
      <div class="timeline-panel">
        <div class="timeline-heading">
          <h4>{data.year}</h4>
          <h4 class="subheading">{data.title}</h4>
        </div>
        <div class="timeline-body">
          <p class="text-muted">{data.description}</p>
        </div>
      </div>
    </li>
  );
};

export default TimelineItem;
