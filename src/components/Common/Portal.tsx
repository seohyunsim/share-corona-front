import ReactDOM from "react-dom";

const Portal = (children: any, id: any) => {
  const element = typeof window !== "undefined" && document.getElementById(id);
  //   const id = document.queryid(id);
  console.log("id:", element);
  return element && children ? ReactDOM.createPortal(children, element) : null;
};

export default Portal;
