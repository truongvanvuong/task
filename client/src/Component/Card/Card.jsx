import PropTypes from "prop-types";
import { useContext } from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { Card as ItemCard } from "antd";
import { Button } from "../../Component";
import Tippy from "@tippyjs/react";
import { ThemeContext } from "../../App.jsx";
import axios from "axios";
import { useState } from "react";
import { BASE_URL } from "../../config.js";
import useFetch from "../../Hook/useFetch.js";
const Card = ({ item, messageApi }) => {
  const [items, setItems] = useState([]); // Lưu trữ danh sách items
  const { isDarkMode } = useContext(ThemeContext);
  const url = `${BASE_URL}/task/`;
  const { data, loading, error, mutate } = useFetch(url); // Lấy dữ liệu từ API
  const handleDelete = async () => {
    try {
      const response = await axios.delete(`${url}${item._id}`);
      // Destructure correctly to access the 'data' property
      const { data } = response; // This is the corrected line
      if (data.success) {
        mutate(items.filter((item) => item.id !== id));
        messageApi.open({
          className: "text-white text-[1rem] font-medium",
          type: "success",
          content: "Đã xóa nhé",
        });
      } else {
        messageApi.open({
          className: "text-white text-[1rem] font-medium",
          type: "error",
          content: "Chịu không xóa được",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <ItemCard
        className="dark:bg-[#333333] border-defaultBorder dark:border-defaultBorderDark w-full h-full"
        bordered={true}
      >
        <div>
          <div>
            <h3 className="font-semibold text-[1.2rem] mb-2 dark:text-textHeaddingDark text-textColor">
              {item.title}
            </h3>
            <p className="text-textColor dark:text-textDark text-[0.9rem]">
              {item.description}
            </p>
            <div className="flex justify-between items-center my-4 font-medium text-textColor dark:text-textDark text-[0.95rem]">
              <span>9:10</span>
              <p>
                <span>Thứ 2 - </span> <span>{item.date}</span>
              </p>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <Button
              small
              roundedBorder
              className={`${
                item.isCompleted ? "bg-green-600" : "bg-red-600"
              } hover:opacity-85 transition-opacity px-[12px]`}
            >
              {item.isCompleted ? "Đã hoàn thành" : "Chưa hoàn thành"}
            </Button>
            <div className="flex gap-4 items-center text-[1.4rem]">
              <Tippy
                content="Chỉnh sửa"
                placement="top"
                className="dark:border dark:border-defaultBorderDark"
                theme={isDarkMode ? "dark" : "light"}
              >
                <div>
                  <AiFillEdit className="cursor-pointer text-secondaryText dark:text-textDark hover:opacity-85 transition-opacity" />
                </div>
              </Tippy>
              <Tippy
                content="Xóa"
                placement="top"
                theme={isDarkMode ? "dark" : "light"}
                className="dark:border dark:border-defaultBorderDark"
              >
                <div onClick={handleDelete}>
                  <AiFillDelete className="cursor-pointer text-secondaryText dark:text-textDark hover:opacity-85 transition-opacity" />
                </div>
              </Tippy>
            </div>
          </div>
        </div>
      </ItemCard>
    </div>
  );
};

Card.propTypes = {};

export default Card;
