import { reload } from "firebase/auth";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
const AllUserCard = ({ user }) => {


    console.log('Demon of the 4th generation');
    const makeAdmin = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, make Admin!"
        }).then((result) => {
            if (result.isConfirmed) {
                // ============
                const updatedProfile = { role: "Admin" }
                fetch(`http://localhost:5000/makeAdmin/${user?.userEmail}`, {
                    method: 'PUT',
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(updatedProfile),
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.modifiedCount > 0) {
                            Swal.fire({
                                title: "Success!",
                                text: "User has been promoted to Admin.",
                                icon: "success"
                            });
                        }
                        // console.log(data);
                        location.reload();
                    })
                // ============

            }
        });
    }

    return (
        <tbody className="text-center">
            {/* row 1 */}
            <tr>
                <th className="flex justify-center">
                    <div>
                        <div className="font-bold text-left">{user.Name ? user.Name : user.name}</div>
                        {/* <div className="text-sm opacity-50 text-left">MedLab Ltd.</div> */}
                    </div>
                </th>
                <td>
                    {user.userEmail}
                </td>
                <td>
                    {
                        user.role==="Admin" ?
                            <button className="btn btn-ghost btn-sm bg-success">Admin</button> :
                            <button onClick={() => makeAdmin(user._id)} className="btn btn-ghost btn-sm BgPrimary">Make Admin</button>
                    }
                </td>
            </tr>
        </tbody>
    );
};

export default AllUserCard;