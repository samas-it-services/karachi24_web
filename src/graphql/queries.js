/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
      id
      name
      description
      type
      postDateTime
      userName
      isActive
      isFlagged
      url
      numLikes
      upVotes
      downVotes
      extraData
      image
      imageThumbnail
      createdAt
      updatedAt
    }
  }
`;
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        type
        postDateTime
        userName
        isActive
        isFlagged
        url
        numLikes
        upVotes
        downVotes
        extraData
        image
        imageThumbnail
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
