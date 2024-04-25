import DetailsCard from "../../../components/dashboard/DetailsCard";
const experience = [
  {
    title: "Frontend developer",
    start: "13/04/2023",
    end: "present",
    company: "OnFeet",
    location: "London",
    tasks: [
      "Contributed to the backend codebase",
      "Wrote automated tests",
      "Built a chatbot",
      "Collaborate with PMs and designers to achieve user requirements",
      "Implement a statitiscs dashboard",
    ],
  },
];
const DoctorDetails = () => {
  return (
    <div className="space-y-2 my-5">
      <DetailsCard name="Bio">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia
          dolorem aperiam fugiat consectetur vero libero, illum odio tempora rem
          voluptas?
        </p>
      </DetailsCard>
      <DetailsCard name="Experience">
        <div>
          {experience.map(({ title, start, end, company, location, tasks }) => (
            <div className="my-3">
              <div className="flex justify-between space-y-3">
                <p>{title}</p>
                <p>
                  {start}-{end}
                </p>
              </div>
              <p>
                {company} <span>{location}</span>
              </p>
              <ul>
                {tasks.map((task, index: number) => (
                  <li key={index} className="my-3 flex gap-2">
                    <span>{index + 1}.</span>
                    {task}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </DetailsCard>
      <DetailsCard name="Education">
        <div className="space-y-3">
          <div className="flex justify-between space-y-3">
            <p>Kenyatta University</p>
            <p>11/08/2017 - 12/12/2021</p>
          </div>
          <p>Bachelor of Science Medicine</p>
        </div>
      </DetailsCard>
      <DetailsCard name="Language">
        <p>English - Fluent</p>
      </DetailsCard>
    </div>
  );
};

export default DoctorDetails;
