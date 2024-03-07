import { useState } from "react";
import { Card as ItemCard, Col, Row } from "antd";
import { AiOutlinePlus } from "react-icons/ai";
import Card from "../Card";
import Modal from "../Modal";
import Message from "../Message";
import { message } from "antd";

const ListCard = ({ dataTask }) => {
  const [open, setOpen] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const handleShow = () => {
    setOpen(true);
  };
  return (
    <div className="mt-6 h-[calc(100vh-160px)] overflow-y-auto overflow-x-hidden px-5">
      <Row gutter={[16, 16]}>
        {dataTask.map((item) => {
          return (
            <Col span={6} lg={6} md={8} sm={12} xs={24} key={item._id}>
              <Card item={item} messageApi={messageApi} />
            </Col>
          );
        })}
        <Col span={6} lg={6} md={8} sm={12} xs={24}>
          <ItemCard
            onClick={handleShow}
            className="dark:bg-[#333333] border-defaultBorder dark:border-defaultBorderDark w-full h-full flex items-center justify-center hover:bg-[#fafafa] cursor-pointer dark:hover:bg-defaultBorderDark transition-colors duration-300"
            bordered={true}
          >
            <div className="flex items-center gap-3 text-textColor dark:text-textDark">
              <AiOutlinePlus className="text-[1.4rem]" />
              <span className="font-medium text-[1rem]">Thêm công việc</span>
            </div>
          </ItemCard>
        </Col>
      </Row>
      <Modal open={open} setOpen={setOpen} btnText="Thêm" />
      <Message />
      <div>{contextHolder}</div>
    </div>
  );
};

export default ListCard;
