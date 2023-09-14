import React from "react";

const commentsData = [
  {
    name: "shubham",
    text: "this is comment",
    replies: [],
  },
  {
    name: "shubham",
    text: "this is comment",
    replies: [],
  },
  {
    name: "shubham",
    text: "this is comment",
    replies: [
      {
        name: "shubham",
        text: "this is comment",
        replies: [
          {
            name: "shubham",
            text: "this is comment",
            replies: [
              {
                name: "shubham",
                text: "this is comment",
                replies: [
                  {
                    name: "shubham",
                    text: "this is comment",
                    replies: [
                      {
                        name: "shubham",
                        text: "this is comment",
                        replies: [
                          {
                            name: "shubham",
                            text: "this is comment",
                            replies: [],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "shubham",
    text: "this is comment",
    replies: [],
  },
  {
    name: "shubham",
    text: "this is comment",
    replies: [],
  },
];

const CommentList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="pl-5 ml-5 border border-l-black">
        <CommentList comments={comment.replies} />
      </div>
    </div>
  ));
};
const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex shadow-sm bg-gray-100 p-2 rounded-md my-3">
      <img
        alt="user"
        className="w-12 h-12"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentContainer = () => {
  return (
    <div className="my-5 py-2">
      <h1 className="text-2xl font-bold">Comments:</h1>
      <CommentList comments={commentsData} />
    </div>
  );
};
export default CommentContainer;
