function Dev(props) {
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Role: {props.role}</p>
      <p>Skills: {props.skills}</p>
      <p>Dev: {props.isDev ? "Yes" : "No"}</p>
    </div>
  );
}

export default Dev;
