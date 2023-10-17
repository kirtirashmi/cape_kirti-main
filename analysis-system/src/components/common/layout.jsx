
function Layout(props) {
  return (
    <div className="layout" >      
      <div style={{ display: 'flex', alignItems: 'center' }}>
      <img
        src={"/image/capgeminilogo.jpg"}
        height={80}
        width={120}
        alt={"Capegemini Logo"} 
      />
      <div><h1 style={{ alignItems: 'center', marginLeft: '150px' }}>IFS Cloud Setup Comparison   </h1></div>
      </div>
      
      {props.children}
    </div>
  );
}

export default Layout;
