import { useState } from "react";
import { Modal as ModalAntd, DatePicker, Checkbox } from "antd";
import { AiOutlineLoading } from "react-icons/ai";
import PropTypes from "prop-types";
import { BASE_URL } from "../../config.js";
import { message } from "antd";
import axios from "axios";
import { Input, Button } from "../../Component";

const Modal = ({ open, setOpen, titleModal, btnText }) => {
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const [formData, setFormData] = useState({
    title: null,
    description: null,
    date: null,
    isImportant: false,
  });
  const [errors, setErrors] = useState(formData);
  const onChangeDate = (date, dateString) => {
    console.log(date, dateString);
    setFormData((prev) => ({ ...prev, date: date }));
  };

  const handleOnChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (e.target.value) {
      setErrors((prev) => ({ ...prev, [e.target.name]: false }));
    }
  };
  const handleOk = async () => {
    const url = `${BASE_URL}/task`;
    setConfirmLoading(true);
    try {
      const response = await axios.post(url, formData);
      // Destructure correctly to access the 'data' property
      const { data } = response; // This is the corrected line
      console.log(data);
      if (data.success) {
        setTimeout(() => {
          setConfirmLoading(false);
          setOpen(false);
        }, 1000);
        setTimeout(() => {
          messageApi.open({
            className: "text-white text-[1rem] font-medium",
            type: "success",
            content: "Thêm rồi đấy",
          });
        }, 1500);
      } else {
        messageApi.open({
          className: "text-white text-[1rem] font-medium",
          type: "error",
          content: "Chịu á, lỗi rồi",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
  };
  const footer = (
    <div className="flex items-center gap-3 justify-end mt-8">
      <Button outline medium onClick={handleCancel}>
        Hủy
      </Button>
      <Button
        primary
        medium
        lefIcon={
          confirmLoading && <AiOutlineLoading className="animate-spin" />
        }
        className={`flex items-center gap-3 transition-all ${
          confirmLoading && "cursor-text select-none opacity-60"
        }`}
        onClick={handleOk}
      >
        {btnText}
      </Button>
    </div>
  );
  return (
    <ModalAntd
      title={
        <h1 className="text-[1.4rem] font-medium dark:text-textHeaddingDark dark:bg-gray">
          {titleModal}
        </h1>
      }
      open={open}
      onOk={handleOk}
      confirmLoading={confirmLoading}
      onCancel={handleCancel}
      footer={footer}
    >
      <div>
        <div className="mt-6">
          <label className="dark:text-textDark text-[1rem]" htmlFor="title">
            Tiêu đề
          </label>
          <Input
            id="title"
            type="text"
            className="py-0"
            name="title"
            onChange={handleOnChange}
          />
        </div>
        <div className="mt-6">
          <label className="dark:text-textDark text-[1rem]" htmlFor="desc">
            Mô tả
          </label>
          <textarea
            onChange={handleOnChange}
            id="desc"
            type="text"
            name="description"
            rows={6}
            className="w-full border dark:border-defaultBorderDark dark:bg-gray dark:text-textDark border-defaultBorder focus:outline-none mt-4 rounded-md p-2 focus:border-primaryColor"
          />
        </div>
        <div className="mt-6 flex flex-col">
          <label className="dark:text-textDark text-[1rem]" htmlFor="date">
            Thời gian
          </label>
          <DatePicker
            id="date"
            className="mt-4 focus:border-primaryColor dark:bg-gray dark:text-textDark dark:border-defaultBorderDark"
            placeholder="Chọn ngày"
            format={{
              format: "DD-MM-YYYY",
              type: "mask",
            }}
            onChange={onChangeDate}
          />
        </div>
        <div className="mt-6">
          <label
            htmlFor="important"
            className="dark:text-textDark text-[1rem] cursor-pointer hover:opacity-90"
          >
            Quan trọng
          </label>
          <Checkbox
            className="float-right"
            id="important"
            name="important"
          ></Checkbox>
        </div>
      </div>
      <div>{contextHolder}</div>
    </ModalAntd>
  );
};

Modal.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.func,
  titleModal: PropTypes.string,
  btnText: PropTypes.string,
};
export default Modal;
