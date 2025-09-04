import React, { useState } from "react";

export const InputForm = ({ taskList, setTaskList }) => {
  // 入力した情報を管理
  const [inputText, setInputText] = useState("");

  // 送信後にタスクを追加する関数
  const handleSubmit = (e) => {
    e.preventDefault();

    setTaskList([
      ...taskList,
      {
        text: inputText,
      },
    ]);
    setInputText("");
  };

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <div className="inputForm">
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={inputText} />
        <button>
          <i className="fa-solid fa-plus"></i>
        </button>
      </form>
    </div>
  );
};
