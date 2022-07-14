import axios from "axios";
import { useCallback, useState } from "react";
import "./Comment.css";
import moment from "moment";
import "moment/locale/vi";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useRef } from "react";

const Comments = ({ teamInfo }) => {
	const commentTextarea = useRef();
	const [commentList, setCommentList] = useState([]);
	const [content, setContent] = useState("");
	const user = useSelector((state) => state.auth.login?.currentUser);

	const getListComments = useCallback(async () => {
		const response = await axios.get(
			`/team/comment-list/${teamInfo.team._id}`
		);
		setCommentList(response.data.comments);
	}, [teamInfo.team._id]);

	const addComment = async (e) => {
		await axios.post(
			`/user/add-comment/${teamInfo.team._id}`,
			{ content: content },
			{
				headers: { Authorization: `Bearer ${user?.token}` },
			}
		);
		getListComments();
		commentTextarea.current.value = "";
	};

	useEffect(() => {
		getListComments();
	}, []);

	return (
		<div className="comments">
			<div className="input-comment-div">
				<textarea
					ref={commentTextarea}
					className="comment-textarea"
					cols="50"
					rows="5"
					placeholder="Bình luận..."
					onChange={(e) => setContent(e.target.value)}
				></textarea>
				<button className="send" onClick={addComment}>
					Gửi
				</button>
			</div>
			{commentList.length === 0 ? (
				<h2>Không có bình luận nào</h2>
			) : (
				commentList.map((comment) => {
					return (
						<div className="comment-item">
							<img
								src={require("../../../assets/blank-avatar.jpg")}
								className="avatar"
								alt=""
							/>
							<div className="right">
								<div className="upper">
									{comment.user.name}{" "}
									<span>
										{moment(comment.createdAt)
											.locale("vi")
											.fromNow()}
									</span>{" "}
								</div>
								<p>{comment.content}</p>
							</div>
						</div>
					);
				})
			)}
		</div>
	);
};

export default Comments;
