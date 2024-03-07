import useFetch from "../../Hook/useFetch.js";
import { BASE_URL } from "../../config.js";
import { ListCard, TitlePage } from "../../Component";

const AllTask = () => {
  const url = `${BASE_URL}/task/`;
  const { data, loading, error } = useFetch(url);
  console.log(data);
  return (
    <div>
      <TitlePage title="Toàn bộ công việc" />

      <div>
        <ListCard dataTask={data} />
      </div>
    </div>
  );
};

export default AllTask;
