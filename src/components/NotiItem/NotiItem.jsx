import React from "react";
import moment from 'moment';
import axios from "axios";
import { useSelector } from 'react-redux';
import { toast } from "react-toastify";

const NotiItem = ({notiItem}) => {

    const user = useSelector((state) => state.auth.login?.currentUser);

    const acceptRequest = async () => {
        switch(notiItem.type) {
            case 'invite':
                try {
                    await axios.put(`/user/accept-invitation/${notiItem._id}`, {}, {
                        headers: { Authorization: `Bearer ${user?.token}` }
                    });
                    toast.success('Chấp nhận thành công');
                } catch (error) {
                    toast.error('Xảy ra lỗi')
                }
                break;
            case 'join':
                try {
                    await axios.put(`/user/accept-member-to-team/${notiItem._id}`, {}, {
                        headers: { Authorization: `Bearer ${user?.token}` }
                    });
                    toast.success('Chấp nhận thành công');
                } catch (error) {
                    toast.error('Xảy ra lỗi')
                }
                break;
            case 'opponent':
                try {
                    await axios.post(`/team/accept-opponent/${notiItem._id}`, {}, {
                        headers: { Authorization: `Bearer ${user?.token}` }
                    });
                    toast.success('Chấp nhận thành công');
                } catch (error) {
                    toast.error('Xảy ra lỗi')
                }
                break;
            default: break;
        }
    }

    return (
        <div className="noti-item" key={notiItem._id}>
            <img src={require("../../assets/pep.jpg")} alt="" />
            <div>
                <p>{notiItem.content}</p>
                <div className="time">{moment(notiItem.createdAt).locale("vi").fromNow()}</div>
                {
                    notiItem.type !== 'system' &&
                    <>
                        <button 
                            className="accept" 
                            onClick={(e) => acceptRequest()}
                        >
                            Chấp nhận
                        </button>
                        <button className="reject">Từ chối</button>
                    </>
                }
            </div>
        </div>
    );
};

export default NotiItem;
