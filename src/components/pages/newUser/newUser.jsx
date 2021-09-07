import "./newUser.css"

export const NewUser = () => {
    return (
        <div className="newUser">
            <h1 className="newUserTitle">New User</h1>
            <form className="newUserForm">
            <div className="newUserItem">
<label>Username</label>
<input type="text" placeholder="john" />
            </div>
            <div className="newUserItem">
<label>Full Name</label>
<input type="text" placeholder="John Smith" />
            </div>
            <div className="newUserItem">
<label>Email</label>
<input type="email" placeholder="JohnSmith@gmail.com" />
            </div>
            <div className="newUserItem">
<label>Password</label>
<input type="password" placeholder="password" />
            </div>
            <div className="newUserItem">
<label>phone</label>
<input type="text" placeholder="4065774827" />
            </div>
            <div className="newUserItem">
<label>address</label>
<input type="text" placeholder="123 cherry street" />
            </div>
            <div className="newUserItem">
                <label>Active</label>
                <select className="newUserSelect" name="active" id="active">
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
            </div>
            <button className="newUserButton">Create</button>
            </form>
        </div>
    )
}
