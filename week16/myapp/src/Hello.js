const Hello = (props) => {
  console.log(props);
  return (
    <>
      <h1>Hello {props.title}</h1>
      <p>{props.subtitle}</p>
    </>
  );
};
export default Hello;
