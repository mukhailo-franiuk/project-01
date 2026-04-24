const LeftSidebar = () => {
    return (
        <div className="left-sidebar">
            <div className="left-sidebar__item">
                <i className="fa-solid fa-house"></i>
                <span>Home</span>
            </div>
            <div className="left-sidebar__item">
                <i className="fa-solid fa-user"></i>
                <span>Profile</span>
            </div>
            <div className="left-sidebar__item">
                <i className="fa-solid fa-users"></i>
                <span>Groups</span>
            </div>
            <div className="left-sidebar__item">
                <i className="fa-solid fa-briefcase"></i>
                <span>Jobs</span>
            </div>
            <div className="left-sidebar__item">
                <i className="fa-solid fa-calendar-days"></i>
                <span>Events</span>
            </div>
            <div className="left-sidebar__item">
                <i className="fa-solid fa-graduation-cap"></i>
                <span>Courses</span>
            </div>
        </div>
    );
}
export default LeftSidebar;