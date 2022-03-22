//import '../explore.css';

const NavigationItem = ({
  activeItem = 'Explore',
  item = {
    name: "",
    icon: "fab fa-twitter",
    link: "../../../public/tuiter/tuit.html"
  }
}) =>
{
  return(
      <div className="list-group wd-no-rounding">
        <a className={`list-group-item ${activeItem == item.name ? 'wd-selected' : ''}`} href={item.link}>
          <div className="d-none d-sm-block d-xl-none d-xxl-none"><i className={item.icon}></i></div>
          <div className="d-none d-xl-block"><i className={item.icon}></i> {item.name}</div>
        </a>
      </div>
  );
}
export default NavigationItem;